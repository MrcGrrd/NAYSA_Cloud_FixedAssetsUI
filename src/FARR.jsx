import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

const FARR = () => {
  const formRef = useRef();

  return (
    <div className="p-4">
      <div ref={formRef} className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-xl font-bold text-center mb-4">CREDIT INVESTIGATION REPORT</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Inquiry Party:</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date of Report:</label>
          <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date of C.I.:</label>
          <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Business Address:</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <h2 className="text-lg font-bold mb-2">I. Credit Request</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Credit Limit:</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Credit Term:</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <h2 className="text-lg font-bold mb-2">II. Background Check</h2>
        <h3 className="text-md font-semibold mb-1">A. Employment Background History</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Company Name:</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Number of Years in the Company:</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Employment Status:</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Address:</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <h3 className="text-md font-semibold mb-1">B. Personal Background</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name of Customer:</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Present Address:</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Family Background:</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Educational Attainment:</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Community Affiliation:</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">No. of Children (if married):</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name of Wife/Husband (if married):</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <h3 className="text-md font-semibold mb-1">C. Government Licenses</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Licenses</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Registered Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Number</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Date of Issuance/Expiry</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <ReactToPrint
          trigger={() => <button className="px-4 py-2 bg-blue-500 text-white rounded">Export to PDF</button>}
          content={() => formRef.current}
        />
      </div>
    </div>
  );
};

export default FARR;
