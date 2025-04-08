import React from 'react';

const AddOrRemoveFromMess: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-8">View Mess Registrations</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Mess*</label>
          <select className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Select Mess</option>
            <option>Mess 1</option>
            <option>Mess 2</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Roll No*</label>
          <input type="text" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Student Roll Number Here" />
        </div>
        <div className="flex gap-2 mb-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Search</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md">Add</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md">Remove</button>
        </div>
        <div className="flex gap-2 mb-4">
          <button className="px-4 py-2 bg-red-500 text-white rounded-md">Remove All from Mess 1</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md">Remove All from Mess 2</button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Add by uploading Excel</label>
          <input type="file" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">Register All</button>
        <div className="mt-4 text-sm text-gray-600">
          <ul className="list-disc pl-5">
            <li>The excel sheet should only contain three columns including the heading - Roll no, Balance, mess_option.</li>
            <li>File should be in .xlsx or .xls format.</li>
            <li>This registration will add the Students to the provided mess_option.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddOrRemoveFromMess; 