import React, { useEffect, useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import Swal from 'sweetalert2';

function HeaderDetail() {
    const [error, setError] = useState(null);
    const [modalData, setModalData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalSearchText, setModalSearchText] = useState('');
    const [selectedFacategCode, setSelectedFacategCode] = useState(null);
    const [selectedFacategName, setSelectedFacategName] = useState(null);
    const [selectedAssetAcctCode, setSelectedAssetAcctCode] = useState(null);
    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');
    const [input3Value, setInput3Value] = useState('');
    const [input4Value, setInput4Value] = useState('');
    const [error2, setError2] = useState(null);
    const [modalData2, setModalData2] = useState([]);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [savedData, setSavedData] = useState([]);

    const dt = useRef(null);

    useEffect(() => {
        fetchCateg();
    }, []);

    const fetchCateg = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/index');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const responseData = await response.json();
            setModalData(responseData.data);

            if (responseData.data.length > 0) {
                setInput1Value(responseData.data[0].FACATEG_CODE);
            }
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchClass();
    }, []);

    const fetchClass = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/coamast');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const responseData = await response.json();
            setModalData2(responseData.data);
        } catch (error) {
            setError2(error);
        }
    };

    const handleSearchModalOpen = () => {
        setModalVisible(true);
    };

    const handleSearchModalOpen2 = () => {
        setModalVisible2(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };

    const handleModalClose2 = () => {
        setModalVisible2(false);
    };

    const handleRowSelect = (rowData) => {
        setSelectedFacategCode(rowData.FACATEG_CODE);
        setSelectedFacategName(rowData.FACATEG_NAME);
        setSelectedAssetAcctCode(rowData.ASSETACCT_CODE);
        setInput1Value(rowData.FACATEG_CODE);
        setInput3Value(rowData.FACATEG_NAME);
        setModalVisible(false);
    };

    const handleRowSelect2 = (e) => {
        setSelectedRow(e.data);
        setInput4Value(e.data ? e.data.ACCT_NAME : '');
        setModalVisible2(false);
    };

    const handleModalSearchChange = (e) => {
        setModalSearchText(e.target.value);
    };

    const fetchAllData = async () => {
        try {
            const inputData = {
                input1Value,
                input2Value,
                input3Value,
                input4Value,
                savedData
            };

            const response = await fetch('http://localhost:8000/api/fetchData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputData)
            });

            if (!response.ok) {
                throw new Error('Failed to fetch all data');
            }
            const allData = await response.json();

            setInput1Value(allData.input1Value || '');
            setInput2Value(allData.input2Value || '');
            setInput3Value(allData.input3Value || '');
            setInput4Value(allData.input4Value || '');

        } catch (error) {
            console.error('Error fetching all data:', error);
        }
        Swal.fire(
            'Success!',
            'Data has been fetched.',
            'success'
        );

    };

    const filteredModalData = modalData.filter(item =>
        item.FACATEG_CODE.toLowerCase().includes(modalSearchText.toLowerCase()) ||
        item.FACATEG_NAME.toLowerCase().includes(modalSearchText.toLowerCase())
    );

    const handleSaveData = () => {
        const newData = {
            FACATEG_CODE: input1Value,
            FACATEG_NAME: input3Value,
            ASSETACCT_CODE: input2Value,
            ACCT_NAME: input4Value
        };
    
        // Clear input values
        setInput1Value('');
        setInput2Value('');
        setInput3Value('');
        setInput4Value('');
    
        setSavedData([...savedData, newData]);
    
        // Show Swal alert
        Swal.fire(
            'Success!',
            'Data has been saved.',
            'success'
        );
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="input-group">
                        <input type="text" className="form-control" style={{ width: '20%', borderRadius: '0.2rem', height: '2.2rem' }} placeholder="Enter Category Code" value={input1Value} onChange={(e) => setInput1Value(e.target.value)} aria-describedby="button-addon2" />
                        <button className="btn btn-primary border-custom" onClick={handleSearchModalOpen} type="button" id="button-addon2" style={{ borderRadius: '0.2rem', height: '2.2rem' }}><i className="icon pi pi-search"></i></button>
                    </div>
                </div>
                <div className="col">
                    <input type="text" className="form-control" style={{ width: '22%', borderRadius: '0.2rem', height: '2.2rem' }} placeholder="Enter Category Name" value={input3Value} onChange={(e) => setInput3Value(e.target.value)} aria-describedby="button-addon2" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" style={{ width: '22%', borderRadius: '0.2rem', height: '2.2rem' }} placeholder="Enter Asset Account Code" value={input2Value} onChange={(e) => setInput2Value(e.target.value)} aria-describedby="button-addon2" />
                </div>
                <div className="col">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" style={{ width: '20%', borderRadius: '0.2rem', height: '2.2rem' }} placeholder="Enter Account Name" value={input4Value} onChange={(e) => setInput4Value(e.target.value)} aria-describedby="button-addon2" />
                        <button className="btn btn-primary border-custom" onClick={handleSearchModalOpen2} type="button" id="button-addon2" style={{ borderRadius: '0.2rem', height: '2.2rem' }}><i className="icon pi pi-search"></i></button>
                    </div>
                </div>
                <div className="col">
                    <Button label="Fetch Data" className="btn btn-success shadow-none" style={{ borderRadius: '0.5rem' }} onClick={fetchAllData} />
                </div>
                <div className="col">
                    <Button label="Save Data" className="btn btn-primary shadow-none" style={{ borderRadius: '0.5rem' }} onClick={handleSaveData} />
                </div>
            </div>

            <div className="mt-3">
                
                <DataTable value={savedData}>
                    <Column field="FACATEG_CODE" header="Category Code" />
                    <Column field="FACATEG_NAME" header="Category Name" />
                    <Column field="ASSETACCT_CODE" header="Asset Account Code" />
                    <Column field="ACCT_NAME" header="Account Name" />
                </DataTable>
            </div>

            <Dialog visible={modalVisible} onHide={handleModalClose} header="FA CATEGORY" modal>
                <div className="p-input-icon-left" style={{ position: 'relative' }}>
                    <i className="pi pi-search" style={{ position: 'absolute', left: '0.5rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <InputText type="search" value={modalSearchText} onChange={handleModalSearchChange} placeholder="Search..." style={{ paddingLeft: '2rem' }} className="form-control" />
                </div>
                <div className="table-container">
                    <DataTable
                        value={filteredModalData}
                        selectionMode="single"
                        selection={selectedFacategCode}
                        onSelectionChange={(e) => {
                            setSelectedFacategCode(e.value ? e.value.FACATEG_CODE : '');
                            setSelectedFacategName(e.value ? e.value.FACATEG_NAME : '');
                            setSelectedAssetAcctCode(e.value ? e.value.ASSETACCT_CODE : '');
                        }}
                    >
                        <Column
                            header={<span style={{ visibility: 'hidden' }}>Select</span>}
                            style={{ width: '3em' }}
                            body={rowData => <i className="modal pi pi-check" onClick={() => handleRowSelect(rowData)} />}
                        />
                        <Column field="FACATEG_CODE" header="Category Code" />
                        <Column field="FACATEG_NAME" header="Category Name" />
                        <Column field="ASSETACCT_CODE" header="Asset Account Code" />
                        <Column field="ACCUMACCT_CODE" header="Accumulated Account Code" />
                        <Column field="EXPACCT_CODE" header="Expenses Account Code" />
                        <Column field="GAINACCT_CODE" header="Gain Account Code" />
                        <Column field="LOSSACCT_CODE" header="Loss Account Code" />
                        <Column field="ARACCT_CODE" header="AR Account Code" />
                        <Column field="SALESACCT_CODE" header="Sales Account Code" />
                        <Column field="CLEARINGACCT_CODE" header="Clearing Account Code" />
                    </DataTable>
                </div>
            </Dialog>

            <Dialog visible={modalVisible2} onHide={handleModalClose2} header="FA CLASS" modal>
                <div className="table-container">
                    <DataTable
                        value={modalData2}
                        selectionMode="single"
                        selection={selectedRow}
                        onRowSelect={handleRowSelect2}
                    >
                        <Column
                            header={<span style={{ visibility: 'hidden' }}>Select</span>}
                            style={{ width: '3em' }}
                            body={rowData => <i className="modal pi pi-check" onClick={() => handleRowSelect2(rowData)} />}
                        />
                        <Column field="ACCT_CODE" header="Account Code" />
                        <Column field="ACCT_NAME" header="Account Name" />
                        <Column field="CLASS_CODE" header="Class Code" />
                        <Column field="CLASS_NAME" header="Class Name" />
                    </DataTable>
                </div>
            </Dialog>
        </div>
    );
}

export default HeaderDetail;
