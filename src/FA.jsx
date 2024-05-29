import React, { useState } from 'react';
import './FA.css'; 
import { FaSearch } from 'react-icons/fa'; 

function FA() {
    const [formData, setFormData] = useState({
        branch: 'HEAD OFFICE',
        farrNo: '',
        farrDate: '2024-05-20',
        poNo: '',
        payeeCode: '',
        payeeName: '',
        drNo: '',
        currency: 'Philippine Peso',
        rate: '1.000000',
        siNo: '',
        siDate: '',
        remarks: ''
    });

    const [items, setItems] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            itemCode: '',
            itemDescription: '',
            assetDescription: '',
            uom: '',
            quantity: '',
            unitCost: '',
            amount: '',
            vat: '',
            vatRate: '',
            vatAmount: '',
            netAmount: '',
            department: '',
            faCategory: ''
        }]);
    };

    const handleItemChange = (index, e) => {
        const { name, value } = e.target;
        const updatedItems = items.map((item, i) =>
            i === index ? { ...item, [name]: value } : item
        );
        setItems(updatedItems);
    };

    const deleteItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <div className="header container mt-4">
            <div className="row">
                <div className="col d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <button type="button" className="btn btn-outline-secondary me-2">First</button>
                        <button type="button" className="btn btn-outline-secondary me-2">Previous</button>
                        <button type="button" className="btn btn-outline-secondary me-2">Next</button>
                        <button type="button" className="btn btn-outline-secondary">Last</button>
                    </div>
                    <div className="input-group search-input-group">
                        <input type="text" className="form-control search-input" placeholder="Search..." />
                        <span className="input-group-text"><FaSearch /></span>
                        <button type="button" className="btn btn-outline-secondary">Post Transaction</button>
                    </div>
                </div>
            </div>
            <form>
                <div className="form-sections">
                    <div className="form-section-1">
                        <div className="form-group">
                            <label>Branch:</label>
                            <input type="text" name="branch" value={formData.branch} onChange={handleChange} readOnly />
                            <FaSearch style={{ position: 'absolute', top: '22%', right: '1020px', transform: 'translateY(-50%)', cursor: 'pointer' }}/>
                            </div>
                        <div className="form-group">
                            <label>FARR No.:</label>
                            <input type="text" name="farrNo" value={formData.farrNo} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>FARR Date:</label>
                            <input type="date" name="farrDate" value={formData.farrDate} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>PO No.:</label>
                            <input type="text" name="poNo" value={formData.poNo} onChange={handleChange} />
                            <FaSearch style={{ position: 'absolute', top: '43.5%', right: '1020px', transform: 'translateY(-50%)', cursor: 'pointer' }}/>
                        </div>
                        <div className="form-group">
                            <label>Payee Code:</label>
                            <input type="text" name="payeeCode" value={formData.payeeCode} onChange={handleChange} />
                            <FaSearch style={{ position: 'absolute', top: '51%', right: '1020px', transform: 'translateY(-50%)', cursor: 'pointer' }}/>
                        </div>
                        <div className="form-group">
                            <label>Payee Name:</label>
                            <input type="text" name="payeeName" value={formData.payeeName} onChange={handleChange} />
                            <FaSearch style={{ position: 'absolute', top: '58%', right: '1020px', transform: 'translateY(-50%)', cursor: 'pointer' }}/>
                        </div>
                    </div>
                    <div className="form-section-2">
                        <div className="form-group">
                            <label>Currency:</label>
                            <input type="text" name="currency" value={formData.currency} onChange={handleChange} readOnly />
                            <FaSearch style={{ position: 'absolute', top: '22%', right: '1020px', transform: 'translateY(-50%)', cursor: 'pointer' }}/>
                        </div>
                        <div className="form-group">
                            <label>Rate:</label>
                            <input type="text" name="rate" value={formData.rate} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>SI No.:</label>
                            <input type="text" name="siNo" value={formData.siNo} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>SI Date:</label>
                            <input type="date" name="siDate" value={formData.siDate} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>DR No.:</label>
                            <input type="text" name="drNo" value={formData.drNo} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-section-3">
                        <label className='remarks'>Remarks:</label>
                        <div className="form-group">
                            <textarea name="remarks" value={formData.remarks} onChange={handleChange}></textarea>
                        </div>
                    </div>
                </div>
                <div className="item-details">
                    <div style={{ overflowX: 'auto' }}>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: '100px', position: 'sticky', left: 0, zIndex: 1, backgroundColor: 'white' }} frozen>LN</th>
                                    <th style={{ width: '250px', position: 'sticky', left: '50px', zIndex: '1', backgroundColor: 'white' }} frozen>Item Code</th>
                                    <th style={{ width: '200px', position: 'sticky', left: '150px', zIndex: '1', backgroundColor: 'white' }} frozen>Item Description</th>
                                    <th>Asset Description</th>
                                    <th>UOM</th>
                                    <th>Quantity</th>
                                    <th>Unit Cost</th>
                                    <th>Amount</th>
                                    <th>VAT</th>
                                    <th>VAT Rate</th>
                                    <th>VAT Amount</th>
                                    <th>Net Amount</th>
                                    <th>Department</th>
                                    <th>FA Category</th>
                                    <th style={{ position: 'sticky', right: 0, zIndex: 1, backgroundColor: 'white' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <td style={{ width: '100px',position: 'sticky', left: 0, zIndex: 1, backgroundColor: 'white' }} frozen>{index + 1}</td>
                                        <td style={{ width: '150px', position: 'sticky', left: '30px', zIndex: '1', backgroundColor: 'white' }} frozen><input type="text" name="itemCode" value={item.itemCode} onChange={(e) => handleItemChange(index, e)} className="form-control" /></td>
                                        <td style={{ width: '200px', position: 'sticky', left: '150px', zIndex: '1', backgroundColor: 'white' }} frozen><input type="text" name="itemDescription" value={item.itemDescription} onChange={(e) => handleItemChange(index, e)} className="form-control" /></td>
                                        <td><input type="text" name="assetDescription" value={item.assetDescription} onChange={(e) => handleItemChange(index, e)} className="form-control" /></td>
                                        <td><input type="text" name="uom" value={item.uom} onChange={(e) => handleItemChange(index, e)} className="form-control" /></td>
                                        <td><input type="text" name="quantity" value={item.quantity} onChange={(e) => handleItemChange(index, e)} className="form-control" /></td>
                                        <td><input type="text" name="unitCost" value={item.unitCost} onChange={(e) => handleItemChange(index, e)} className="form-control" /></td>
                                        <td><input type="text" name="amount" value={item.amount} onChange={(e) => handleItemChange(index, e)} className="form-control" /></td>
                                        <td><input type="text" name="vat" value={item.vat} onChange={(e) => handleItemChange(index, e)} className="form-control" /></td>
                                        <td><input type="text" name="vatRate" value={item.vatRate} onChange={(e) => handleItemChange(index, e)} className="form-control" /></td>
                                        <td><input type="text" name="vatAmount" value={item.vatAmount} onChange={(e) => handleItemChange(index, e)} className="form-control" /></td>
                                        <td><input type="text" name="netAmount" value={item.netAmount} onChange={(e) => handleItemChange(index, e)} className="form-control" /></td>
                                        <td><input type="text" name="department" value={item.department} onChange={(e) => handleItemChange(index, e)} className="form-control" /></td>
                                        <td><input type="text" name="faCategory" value={item.faCategory} onChange={(e) => handleItemChange(index, e)} className="form-control" /></td>
                                        <td style={{width:'200px', position: 'sticky', right: 0, zIndex: 1, backgroundColor: 'white' }}>
                                            <button type="button" onClick={() => deleteItem(index)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="form-footer">
                    <div className="form-actions">
                        <button onClick={addItem} type="button" className="btn btn-primary">Add</button>
                        <button type="button" className="btn btn-secondary">Generate GL Entries</button>
                        <button type="button" className="btn btn-success">Save</button>
                    </div>
                    <div className="totals">
                        <div>Total Amount: 0.00</div>
                        <div>VAT Amount: 0.00</div>
                        <div>Net Amount: 0.00</div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FA;
