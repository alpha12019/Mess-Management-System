import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import MessApplicationsNav from '../components/MessApplicationsNav';

const MessRebateStatus: React.FC = () => {
  const location = useLocation();
  const isApplyTab = location.pathname === '/mess/rebate' || location.pathname === '/mess/rebate/apply';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isStatusTab = location.pathname === '/mess/rebate/status';

  // Mock data for rebate applications
  const initialApplications = [
    {
      id: 'RBT-2023-001',
      mess: 'Mess 1',
      fromDate: '2023-11-10',
      toDate: '2023-11-15',
      days: 6,
      purpose: 'Going home for family function',
      appliedOn: '2023-11-01',
      status: 'Approved',
      amount: 450
    },
    {
      id: 'RBT-2023-002',
      mess: 'Mess 1',
      fromDate: '2023-12-20',
      toDate: '2023-12-31',
      days: 12,
      purpose: 'Winter vacation',
      appliedOn: '2023-12-10',
      status: 'Pending'
    },
    {
      id: 'RBT-2023-003',
      mess: 'Mess 2',
      fromDate: '2023-10-05',
      toDate: '2023-10-10',
      days: 6,
      purpose: 'Medical leave',
      appliedOn: '2023-09-25',
      status: 'Rejected',
      rejectionReason: 'Insufficient documentation provided'
    }
  ];

  // State for applications and filters
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [applications, setApplications] = useState(initialApplications);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [messFilter, setMessFilter] = useState<string>('');
  const [selectedApplication, setSelectedApplication] = useState<any>(null);

  // Filter applications based on status and mess
  const filteredApplications = applications.filter(app => {
    if (statusFilter && app.status !== statusFilter) return false;
    if (messFilter && app.mess !== messFilter) return false;
    return true;
  });

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Secondary Navigation */}
      <MessApplicationsNav 
        applyPath="/mess/rebate"
        statusPath="/mess/rebate/status"
        applyLabel="Apply for Rebate"
        statusLabel="Request Status"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Rebate Request Status</h2>

            {/* Filters */}
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700">
                  Filter by Status
                </label>
                <select
                  id="statusFilter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">All Statuses</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              <div>
                <label htmlFor="messFilter" className="block text-sm font-medium text-gray-700">
                  Filter by Mess
                </label>
                <select
                  id="messFilter"
                  value={messFilter}
                  onChange={(e) => setMessFilter(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">All Messes</option>
                  <option value="Mess 1">Mess 1</option>
                  <option value="Mess 2">Mess 2</option>
                  <option value="Mess 3">Mess 3</option>
                </select>
              </div>
            </div>

            {/* Applications Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Request ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mess
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      From
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      To
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Days
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredApplications.map((app) => (
                    <tr key={app.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {app.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {app.mess}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatDate(app.fromDate)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatDate(app.toDate)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {app.days}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${app.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                            app.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <button
                          onClick={() => setSelectedApplication(app)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Application Details Modal */}
            {selectedApplication && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg p-6 max-w-lg w-full">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Rebate Request Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Request ID</p>
                      <p className="mt-1">{selectedApplication.id}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Mess</p>
                      <p className="mt-1">{selectedApplication.mess}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">From Date</p>
                      <p className="mt-1">{formatDate(selectedApplication.fromDate)}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">To Date</p>
                      <p className="mt-1">{formatDate(selectedApplication.toDate)}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Days</p>
                      <p className="mt-1">{selectedApplication.days}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Purpose</p>
                      <p className="mt-1">{selectedApplication.purpose}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Applied On</p>
                      <p className="mt-1">{formatDate(selectedApplication.appliedOn)}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Status</p>
                      <p className="mt-1">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${selectedApplication.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                            selectedApplication.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                          {selectedApplication.status}
                        </span>
                      </p>
                    </div>
                    {selectedApplication.amount && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">Rebate Amount</p>
                        <p className="mt-1">₹{selectedApplication.amount}</p>
                      </div>
                    )}
                    {selectedApplication.rejectionReason && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">Rejection Reason</p>
                        <p className="mt-1 text-red-600">{selectedApplication.rejectionReason}</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setSelectedApplication(null)}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessRebateStatus; 