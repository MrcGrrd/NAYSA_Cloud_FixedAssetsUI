import React from 'react';
import './FixedAsset.css'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStepBackward, faBackward, faPlay, faSave, faUndo, faPrint, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faStepBackward, faBackward, faPlay, faSave, faUndo, faPrint, faTimes, faInfoCircle);


function FixedAsset() {
  return (
    <div>
       <button className="toolbar-button" title="First"><i className="fas fa-step-backward"></i></button>
        <button className="toolbar-button" title="Play"><i className="fas fa-play"></i></button>
        <button className="toolbar-button" title="Play"><i className="fas fa-play"></i></button>
        <button className="toolbar-button" title="Save"><i className="fas fa-save"></i></button>
        <button className="toolbar-button" title="Reset"><i className="fas fa-undo"></i></button>
        <button className="toolbar-button" title="Print"><i className="fas fa-print"></i></button>
        <button className="toolbar-button" title="Cancel"><i className="fas fa-times"></i></button>
        <button className="toolbar-button" title="Info"><i className="fas fa-info-circle"></i></button>
           
    <div className="fixed-asset-container">
      <div className="left">
        <div className="row">
          <label htmlFor="branch">Branch:</label>
          <input type="text" id="branch" name="branch" className="small-input" />
          <i className="fas fa-search"></i>
        </div>
        <div className="row">
          <label htmlFor="farrNo">FARR No.:</label>
          <input type="text" id="farrNo" name="farrNo" className="small-input" />
          <i className="fas fa-search"></i>
        </div>
        <div className="row">
          <label htmlFor="farrDate">FARR Date:</label>
          <input type="date" id="farrDate" name="farrDate" className="small-input" />
        </div>
        <div className="row">
          <label htmlFor="po">PO No.:</label>
          <input type="text" id="po" name="po" className="small-input" />
          <i className="fas fa-search"></i>
        </div>
        <div className="row">
          <label htmlFor="payeeCode">Payee Code:</label>
          <input type="text" id="payeeCode" name="payeeCode" className="small-input" />
          <i className="fas fa-search"></i>
        </div>
        <div className="row">
          <label htmlFor="payeeName">Payee Name:</label>
          <input type="text" id="payeeName" name="payeeName" className="input" />
        </div>
        <div className="row">
          <label htmlFor="drNo">DR No.:</label>
          <input type="text" id="drNo" name="drNo" className="input" />
        </div>
      </div>

      <div className="middle">
        <div className="row">
          <label htmlFor="currency">Currency:</label>
          <input type="text" id="currency" name="currency" className="input" />
        </div>
        <div className="row">
          <label htmlFor="rate">Rate:</label>
          <input type="text" id="rate" name="rate" className="input" />
        </div>
        <div className="row">
          <label htmlFor="siNo">SI No.:</label>
          <input type="text" id="siNo" name="siNo" className="input" />
        </div>
        <div className="row">
          <label htmlFor="siDate">SI Date:</label>
          <input type="text" id="siDate" name="siDate" className="input" />
        </div>
      </div>
      <div className="right">
        <div className="row">
          <label htmlFor="currency">Remarks</label>
          <textarea type="text" id="currency" name="currency" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default FixedAsset;
