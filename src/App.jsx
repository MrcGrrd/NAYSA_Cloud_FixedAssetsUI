import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { SplitButton } from 'primereact/splitbutton';
import { Tooltip } from 'primereact/tooltip';
import { saveAs } from 'file-saver';
import Swal from 'sweetalert2'; 
    
import './App.css';

export default function App() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [globalFilter, setGlobalFilter] = useState('');
    const [formData, setFormData] = useState({
        FACATEG_CODE: '',
        FACATEG_NAME: '',
        ASSETACCT_CODE: '',
        ACCUMACCT_CODE: '',
        EXPACCT_CODE: '',
        GAINACCT_CODE: '',
        LOSSACCT_CODE: '',
        ARACCT_CODE: '',
        SALESACCT_CODE: '',
        CLEARINGACCT_CODE: ''
    });
    const [displayDialog, setDisplayDialog] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const dt = useRef(null);

    const exportColumns = [
        { title: "Category Code", dataKey: "FACATEG_CODE" },
        { title: "Category Name", dataKey: "FACATEG_NAME" },
        { title: "Asset Account Code", dataKey: "ASSETACCT_CODE" },
        { title: "Accumulated Account Code", dataKey: "ACCUMACCT_CODE" },
        { title: "Expenses Account Code", dataKey: "EXPACCT_CODE" },
        { title: "Gain Account Code", dataKey: "GAINACCT_CODE" },
        { title: "Loss Account Code", dataKey: "LOSSACCT_CODE" },
        { title: "AR Account Code", dataKey: "ARACCT_CODE" },
        { title: "Sales Account Code", dataKey: "SALESACCT_CODE" },
        { title: "Clearing Account Code", dataKey: "CLEARINGACCT_CODE" },
    ];

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/index');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const responseData = await response.json();
            setData(responseData.data);
        } catch (error) {
            setError(error);
        }
    };

    const handleGlobalFilterChange = (e) => {
        setGlobalFilter(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdateInsert = () => {
        if (
            formData.FACATEG_CODE.trim() === '' ||
            formData.FACATEG_NAME.trim() === '' ||
            formData.ASSETACCT_CODE.trim() === '' ||
            formData.ACCUMACCT_CODE.trim() === '' ||
            formData.EXPACCT_CODE.trim() === '' ||
            formData.GAINACCT_CODE.trim() === '' ||
            formData.LOSSACCT_CODE.trim() === '' ||
            formData.ARACCT_CODE.trim() === '' ||
            formData.SALESACCT_CODE.trim() === '' ||
            formData.CLEARINGACCT_CODE.trim() === ''
        ) {
            alert('Please fill in all required fields');
            return;
        }
    
        if (selectedRow) {
            const updatedData = data.map(row => {
                if (row.FACATEG_CODE === selectedRow.FACATEG_CODE) {
                    return formData;
                }
                return row;
            });
            setData(updatedData);
        } else {
            setData(prevState => [...prevState, formData]);
        }
    
        setFormData({
            FACATEG_CODE: '',
            FACATEG_NAME: '',
            ASSETACCT_CODE: '',
            ACCUMACCT_CODE: '',
            EXPACCT_CODE: '',
            GAINACCT_CODE: '',
            LOSSACCT_CODE: '',
            ARACCT_CODE: '',
            SALESACCT_CODE: '',
            CLEARINGACCT_CODE: ''
        });
        Swal.fire(
            'Success!',
            'Data has been updated/inserted successfully.',
            'success'
        );

        setDisplayDialog(false);
    };

    const showDialog = () => {
        setDisplayDialog(true);
    };

    const onHideDialog = () => {
        setDisplayDialog(false);
    };

    const handleEdit = (rowData) => {
        setFormData(rowData);
        setSelectedRow(rowData);
        setDisplayDialog(true);
    };

    const handleDelete = (rowData) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this data!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete It!',
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedData = data.filter(row => row !== rowData);
                setData(updatedData);
                Swal.fire(
                    'Deleted!',
                    'Your data has been deleted.',
                    'success'
                );
            }
        });
    };
    

    const exportCSV = () => {
        dt.current.exportCSV();
        Swal.fire(
            'Success!',
            'CSV file has been exported successfully.',
            'success'
        );
    };
    
    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(data);
            const workbook = xlsx.utils.book_new();
            xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    
            const excelBuffer = xlsx.write(workbook, {
                type: 'array',
                bookType: 'xlsx',
            });
            const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'FixedAssets.xlsx');
            Swal.fire(
                'Success!',
                'Excel file has been exported successfully.',
                'success'
            );
        });
    };
    
    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then((module) => {
                const { default: autoTable } = module;
                const doc = new jsPDF.default(0, 0);
                doc.autoTable({ columns: exportColumns, body: data });
                doc.save('FixedAssets.pdf');
                Swal.fire(
                    'Success!',
                    'PDF file has been exported successfully.',
                    'success'
                );
            });
        });
    };
    


    const exportItems = [
        { label: 'CSV', command: exportCSV },
        { label: 'Excel', command: exportExcel },
        { label: 'PDF', command: exportPdf }
    ];

    const header = (
        <div className="p-input-icon-left mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
                <i className="pi pi-search" style={{ position: 'absolute', left: '0.5rem', top: '50%', transform: 'translateY(-50%)' }} />
                <InputText type="search" value={globalFilter} onChange={handleGlobalFilterChange} placeholder="Search..." style={{ paddingLeft: '2rem' }} />
            </div>
            <div>
                <Button label="" icon="pi pi-plus" className="p-button-raised p-button-success p-button-sm mr-2" onClick={showDialog} />
                <SplitButton label="Export" model={exportItems} className="p-button-help" />
            </div>
        </div>
    );

    return (
        <div className="card">
            <Tooltip target=".p-button-help" />

            {error && <p>Error fetching data: {error.message}</p>}
            {header}
            <Dialog visible={displayDialog} onHide={onHideDialog} header="Add/Edit Data" modal>
                <div className="dialog-content">
                    <div className="input-row">
                        <div className="input-column">
                            <InputText className="mb-2" name="FACATEG_CODE" value={formData.FACATEG_CODE} onChange={handleInputChange} placeholder="Category Code" />
                            <InputText className="mb-2" name="FACATEG_NAME" value={formData.FACATEG_NAME} onChange={handleInputChange} placeholder="Category Name" />
                            <InputText className="mb-2" name="ASSETACCT_CODE" value={formData.ASSETACCT_CODE} onChange={handleInputChange} placeholder="Asset Account Code" />
                            <InputText className="mb-2" name="EXPACCT_CODE" value={formData.EXPACCT_CODE} onChange={handleInputChange} placeholder="Expense Account Code" />
                            <InputText name="LOSSACCT_CODE" value={formData.LOSSACCT_CODE} onChange={handleInputChange} placeholder="Loss Account Code" />
                        </div>
                        <div className="input-column">
                            <InputText className="mb-2" name="ACCUMACCT_CODE" value={formData.ACCUMACCT_CODE} onChange={handleInputChange} placeholder="Accumulated Account Code" />
                            <InputText className="mb-2" name="GAINACCT_CODE" value={formData.GAINACCT_CODE} onChange={handleInputChange} placeholder="Gain Account Code" />
                            <InputText className="mb-2" name="ARACCT_CODE" value={formData.ARACCT_CODE} onChange={handleInputChange} placeholder="Accounts Receivable Account Code" />
                            <InputText className="mb-2" name="SALESACCT_CODE" value={formData.SALESACCT_CODE} onChange={handleInputChange} placeholder="Sales Account Code" />
                            <InputText name="CLEARINGACCT_CODE" value={formData.CLEARINGACCT_CODE} onChange={handleInputChange} placeholder="Clearing Account Code" />
                        </div>
                    </div>
                    <Button label="Update/Insert" className="p-button-raised p-button-success" onClick={handleUpdateInsert} />
                </div>
            </Dialog>

            <div className="table-container">
                <DataTable ref={dt} value={data} paginator rows={5} rowsPerPageOptions={[5, 10, 15, 25, 50]} tableStyle={{ minWidth: '50rem' }} globalFilter={globalFilter}>
                    <Column field="FACATEG_CODE" header="Category Code" sortable style={{ width: '150px', position: 'sticky', left: '0', zIndex: '1', backgroundColor: 'white' }} frozen></Column>
                    <Column field="FACATEG_NAME" header="Category Name" sortable style={{ width: '200px', position: 'sticky', left: '150px', zIndex: '1', backgroundColor: 'white' }} frozen></Column>
                    <Column field="ASSETACCT_CODE" header="Asset Account Code" sortable style={{ width: '20%' }}></Column>
                    <Column field="ACCUMACCT_CODE" header="Accumulated Account Code" sortable style={{ width: '20%' }}></Column>
                    <Column field="EXPACCT_CODE" header="Expenses Account Code" sortable style={{ width: '20%' }}></Column>
                    <Column field="GAINACCT_CODE" header="Gain Account Code" sortable style={{ width: '20%' }}></Column>
                    <Column field="LOSSACCT_CODE" header="Loss Account Code" sortable style={{ width: '20%' }}></Column>
                    <Column field="ARACCT_CODE" header="AR Account Code" sortable style={{ width: '20%' }}></Column>
                    <Column field="SALESACCT_CODE" header="Sales Account Code" sortable style={{ width: '20%' }}></Column>
                    <Column field="CLEARINGACCT_CODE" header="Clearing Account Code" sortable style={{ width: '20%' }}></Column>
                    <Column
                        body={(rowData) => (
                            <div className="action-buttons">
                                <Button
                                    icon="pi pi-pencil"
                                    className="p-button-rounded p-button-warning mx-2 custom-green-button"
                                    onClick={() => handleEdit(rowData)}
                                />
                                <Button
                                    icon="pi pi-trash"
                                    className="p-button-rounded p-button-danger "
                                    onClick={() => handleDelete(rowData)}
                                />
                            </div>
                        )}
                        style={{ textAlign: 'center', width: '150px', position: 'sticky', right: '0', zIndex: '1', backgroundColor: 'white' }}
                    />
                </DataTable>
            </div>
        </div>
    );
}
