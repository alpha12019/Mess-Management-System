import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MessUpdateBalanceStatus: React.FC = () => {
  const location = useLocation();
  const isUpdateBalanceTab = location.pathname === '/mess/update-payment' || location.pathname === '/mess/update-balance';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isStatusTab = location.pathname === '/mess/update-payment/status' || location.pathname === '/mess/update-balance/status';

  // Mock data for update balance requests
  const initialRequests = [
    {
      id: 'UBR-2023-001',
      mess: 'Mess 1',
      transactionNo: 'TXN12345678',
      amount: '₹2000',
      paymentDate: '2023-11-15',
      rollNo: 'BT21CS001',
      submittedOn: '2023-11-14',
      status: 'Approved'
    },
    {
      id: 'UBR-2023-002',
      mess: 'Mess 2',
      transactionNo: 'TXN87654321',
      amount: '₹1500',
      paymentDate: '2023-11-18',
      rollNo: 'BT21CS002',
      submittedOn: '2023-11-16',
      status: 'Pending'
    },
    {
      id: 'UBR-2023-003',
      mess: 'Mess 1',
      transactionNo: 'TXN98765432',
      amount: '₹3000',
      paymentDate: '2023-11-12',
      rollNo: 'BT21CS003',
      submittedOn: '2023-11-10',
      status: 'Rejected',
      rejectionReason: 'Invalid transaction number'
    }
  ];

  // State for requests and filters
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [requests, setRequests] = useState(initialRequests);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [messFilter, setMessFilter] = useState<string>('');
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);

  // Apply filters
  const filteredRequests = requests.filter(req => {
    const matchesStatus = statusFilter === '' || req.status === statusFilter;
    const matchesMess = messFilter === '' || req.mess === messFilter;
    return matchesStatus && matchesMess;
  });

  // Get selected request details
  const selectedRequest = requests.find(req => req.id === selectedRequestId);

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Secondary Navigation */}
      <div className="mb-6">
        <div className="flex border-b">
          <NavLink
            to="/mess/update-balance"
            end
            className={({ isActive }) => 
              `px-4 py-3 text-center border-b-2 ${
                (isActive || isUpdateBalanceTab) 
                  ? 'border-blue-500 text-blue-600 font-medium' 
                  : 'border-transparent text-gray-600 hover:text-blue-500'
              }`
            }
          >
            Update Balance Request
          </NavLink>
          
          <NavLink
            to="/mess/update-balance/status"
            className={({ isActive }) => 
              `px-4 py-3 text-center border-b-2 ${
                isActive 
                  ? 'border-blue-500 text-blue-600 font-medium' 
                  : 'border-transparent text-gray-600 hover:text-blue-500'
              }`
            }
          >
            Request Status
          </NavLink>
        </div>
      </div>
      
      {/* Page Title */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Update Balance Request Status</h1>
          
          {/* Filters */}
          <div className="flex gap-4">
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="block w-40 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="relative">
              <select
                value={messFilter}
                onChange={(e) => setMessFilter(e.target.value)}
                className="block w-40 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">All Messes</option>
                <option value="Mess 1">Mess 1</option>
                <option value="Mess 2">Mess 2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Requests Table */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Request ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction No.
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRequests.length > 0 ? (
                filteredRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      {request.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {request.transactionNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {request.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(request.paymentDate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        request.status === 'Approved' 
                          ? 'bg-green-100 text-green-800' 
                          : request.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                      }`}>
                        {request.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        onClick={() => setSelectedRequestId(request.id)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                    No balance update requests found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Request Detail */}
      {selectedRequest && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-start">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Balance Update Request Details
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Request ID: {selectedRequest.id}
              </p>
            </div>
            <button 
              onClick={() => setSelectedRequestId(null)}
              className="text-gray-400 hover:text-gray-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Mess
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {selectedRequest.mess}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Transaction Number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {selectedRequest.transactionNo}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Amount
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {selectedRequest.amount}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Payment Date
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {formatDate(selectedRequest.paymentDate)}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Roll Number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {selectedRequest.rollNo}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Submitted On
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {formatDate(selectedRequest.submittedOn)}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Status
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    selectedRequest.status === 'Approved' 
                      ? 'bg-green-100 text-green-800' 
                      : selectedRequest.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                  }`}>
                    {selectedRequest.status}
                  </span>
                </dd>
              </div>
              {selectedRequest.status === 'Rejected' && selectedRequest.rejectionReason && (
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Rejection Reason
                  </dt>
                  <dd className="mt-1 text-sm text-red-600 sm:mt-0 sm:col-span-2">
                    {selectedRequest.rejectionReason}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessUpdateBalanceStatus; 