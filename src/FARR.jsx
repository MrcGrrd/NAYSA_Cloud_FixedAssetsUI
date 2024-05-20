import React, { useState } from 'react';
import './FARR.css';

function FARR() {
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

  return (
    <div className="form-container">
      <div className="form-header">
        <button className="toolbar-button" title="First"><img className='tools' src='src/assets/first.png' alt="First" /></button>
        <button className="toolbar-button" title="Next"><img className='tools' src='src/assets/next.png' alt="Next" /></button>
        <button className="toolbar-button" title="Previous"><img className='tools' src='src/assets/previous.png' alt="Previous" /></button>
        <button className="toolbar-button" title="Last"><img className='tools' src='src/assets/last.png' alt="Last" /></button>
        <button className="toolbar-button" title="Save"><img className='tools' src='src/assets/diskette.png' alt="Save" /></button>
        <button className="toolbar-button" title="Reset"><img className='tools' src='src/assets/reset.png' alt="Reset" /></button>
        <button className="toolbar-button" title="Print"><img className='tools' src='src/assets/printing.png' alt="Print" /></button>
        <button className="toolbar-button" title="Cancel"><img className='tools' src='src/assets/cancel.png' alt="Cancel" /></button>
        <button className="toolbar-button" title="Info"><img className='tools' src='src/assets/info.png' alt="Info" /></button>
        <button className='post' type="button">Post Transaction</button>
      </div>
      <form>
        <div className="form-sections">
          <div className="form-section-1">
            <div className="form-group">
              <label>Branch:</label>
              <input type="text" name="branch" value={formData.branch} onChange={handleChange} readOnly />
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
            </div>
            <div className="form-group">
              <label>Payee Code:</label>
              <input type="text" name="payeeCode" value={formData.payeeCode} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Payee Name:</label>
              <input type="text" name="payeeName" value={formData.payeeName} onChange={handleChange} />
            </div>
          </div>
          <div className="form-section-2">
            <div className="form-group">
              <label>Currency:</label>
              <input type="text" name="currency" value={formData.currency} onChange={handleChange} readOnly />
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
      </form>
    </div>
  );
}

export default FARR;