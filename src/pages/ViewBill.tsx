import React from 'react';

const ViewBill: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-8">Student Bill Management</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Search by Roll Number</label>
          <input type="text" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Roll Number" />
        </div>
        <div className="flex gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
            <select className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All</option>
              <option>Registered</option>
              <option>Deregistered</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Program</label>
            <select className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All</option>
              <option>B.Tech</option>
              <option>M.Tech</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Mess</label>
            <select className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All</option>
              <option>Mess 1</option>
              <option>Mess 2</option>
            </select>
          </div>
        </div>
        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md mb-4">Apply Filters</button>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Roll No</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Program</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Balance</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Mess</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">View Bill</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">View Payments</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">View Payments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border-b border-gray-200">Karthik Padarthi</td>
              <td className="px-6 py-4 border-b border-gray-200">22BCS177</td>
              <td className="px-6 py-4 border-b border-gray-200">B.Tech</td>
              <td className="px-6 py-4 border-b border-gray-200">Registered</td>
              <td className="px-6 py-4 border-b border-gray-200">5000</td>
              <td className="px-6 py-4 border-b border-gray-200">Mess 1</td>
              <td className="px-6 py-4 border-b border-gray-200"><button className="text-blue-500">View Bills</button></td>
              <td className="px-6 py-4 border-b border-gray-200"><button className="text-blue-500">View Payments</button></td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b border-gray-200">Utkarsh Purohit</td>
              <td className="px-6 py-4 border-b border-gray-200">22BCS260</td>
              <td className="px-6 py-4 border-b border-gray-200">M.Tech</td>
              <td className="px-6 py-4 border-b border-gray-200">Deregistered</td>
              <td className="px-6 py-4 border-b border-gray-200">2000</td>
              <td className="px-6 py-4 border-b border-gray-200">Mess 2</td>
              <td className="px-6 py-4 border-b border-gray-200"><button className="text-blue-500">View Bills</button></td>
              <td className="px-6 py-4 border-b border-gray-200"><button className="text-blue-500">View Payments</button></td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b border-gray-200">Swaran Tej</td>
              <td className="px-6 py-4 border-b border-gray-200">22BCS263</td>
              <td className="px-6 py-4 border-b border-gray-200">B.Tech</td>
              <td className="px-6 py-4 border-b border-gray-200">Registered</td>
              <td className="px-6 py-4 border-b border-gray-200">3000</td>
              <td className="px-6 py-4 border-b border-gray-200">Mess 1</td>
              <td className="px-6 py-4 border-b border-gray-200"><button className="text-blue-500">View Bills</button></td>
              <td className="px-6 py-4 border-b border-gray-200"><button className="text-blue-500">View Payments</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBill; 