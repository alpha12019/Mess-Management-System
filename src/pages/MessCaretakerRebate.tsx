import React, { useState } from 'react';

interface RebateRequest {
  date: string;
  studentId: string;
  purpose: string;
  from: string;
  to: string;
  remark: string;
  status: 'pending' | 'approved' | 'unapproved';
}

type FilterType = 'all' | 'approved' | 'unapproved';

const MessCaretakerRebate: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [rebateRequests] = useState<RebateRequest[]>([]);

  const getFilterButtonClass = (filter: FilterType) => {
    const baseClass = "px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2";
    if (activeFilter === filter) {
      return `${baseClass} bg-blue-500 text-white`;
    }
    return `${baseClass} bg-white text-gray-700 hover:bg-gray-50`;
  };

  const getFilterIcon = (filter: FilterType) => {
    switch (filter) {
      case 'all':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        );
      case 'approved':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'unapproved':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-center text-gray-900 mb-6">
        Respond to Rebate Request
      </h1>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveFilter('all')}
          className={getFilterButtonClass('all')}
        >
          {getFilterIcon('all')}
          All Requests
        </button>
        <button
          onClick={() => setActiveFilter('approved')}
          className={getFilterButtonClass('approved')}
        >
          {getFilterIcon('approved')}
          Approved
        </button>
        <button
          onClick={() => setActiveFilter('unapproved')}
          className={getFilterButtonClass('unapproved')}
        >
          {getFilterIcon('unapproved')}
          Unapproved
        </button>
      </div>

      {/* Rebate Requests Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Purpose
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  From
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  To
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Remark
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rebateRequests.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-4 text-center text-sm text-gray-500">
                    No rebate requests found
                  </td>
                </tr>
              ) : (
                rebateRequests.map((request) => (
                  <tr key={`${request.studentId}-${request.date}`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {request.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {request.studentId}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {request.purpose}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {request.from}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {request.to}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {request.remark}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`inline-flex rounded-full px-2 text-xs font-semibold ${
                        request.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : request.status === 'unapproved'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {request.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {request.status === 'pending' && (
                        <div className="flex space-x-2">
                          <button className="text-green-600 hover:text-green-900">
                            Approve
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            Reject
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MessCaretakerRebate; 