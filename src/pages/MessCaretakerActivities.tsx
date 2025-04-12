import React from 'react';

const MessCaretakerActivities: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-8">Monthly Bill Base</h1>
      <div className="bg-blue-50 p-4 rounded-md mb-6">
        <h2 className="text-lg font-medium text-blue-700">Important Instructions</h2>
        <p className="text-sm text-blue-700">Please ensure that the Excel file is named as "MessBillUpload.xlsx" before uploading.</p>
      </div>
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Current Base Amount *</label>
          <input type="text" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter the new base amount" />
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Update Base Amount</button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Monthly Bill *</label>
          <input type="file" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Update Bills</button>
        </div>
      </div>
    </div>
  );
};



export default MessCaretakerActivities; 