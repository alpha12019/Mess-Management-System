import React from 'react';

const UpdateBill: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-8">Update Bill</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Roll No. *</label>
          <input type="text" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Roll No of Student" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">New Amount *</label>
          <input type="text" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="New amount for this month's bill" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Month *</label>
          <select className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Select month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Year *</label>
          <select className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Select year</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
          </select>
        </div>
        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">Update Bill</button>
      </div>
    </div>
  );
};

export default UpdateBill; 