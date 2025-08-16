import React, { useState } from 'react';


interface SpecialFoodRequest {
  date: string;
  studentId: string;
  food: string;
  reason: string;
  from: string;
  to: string;
  status: 'Approved' | 'Not Approved';
}

const MessCaretakerSpecialFood: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'approved' | 'unapproved'>('all');
  const [requests] = useState<SpecialFoodRequest[]>([
    {
      date: '2024-04-09',
      studentId: '21BCS163',
      food: 'kheer',
      reason: 'pet kharaab',
      from: '2024-05-01',
      to: '2024-05-10',
      status: 'Approved'
    }
  ]);

  const filteredRequests = requests.filter(request => {
    if (activeFilter === 'approved') return request.status === 'Approved';
    if (activeFilter === 'unapproved') return request.status === 'Not Approved';
    return true;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-8">View Special Food Requests</h1>
      
      <div className="flex gap-3 mb-8">
        <button
          className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
            activeFilter === 'all' 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => setActiveFilter('all')}
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
          All Requests
        </button>
        <button
          className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
            activeFilter === 'approved' 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => setActiveFilter('approved')}
        >
          <FaCheck size={14} />
          Approved
        </button>
        <button
          className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
            activeFilter === 'unapproved' 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => setActiveFilter('unapproved')}
        >
          <FaClock size={14} />
          Unapproved
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Student ID</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Food</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Reason</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">From</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">To</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Approval</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                    No special food requests found
                  </td>
                </tr>
              ) : (
                filteredRequests.map((request, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-800">{request.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-800">{request.studentId}</td>
                    <td className="px-6 py-4 text-sm text-gray-800">{request.food}</td>
                    <td className="px-6 py-4 text-sm text-gray-800">{request.reason}</td>
                    <td className="px-6 py-4 text-sm text-gray-800">{request.from}</td>
                    <td className="px-6 py-4 text-sm text-gray-800">{request.to}</td>
                    <td className="px-6 py-4">
                      {request.status === 'Approved' ? (
                        <span className="px-4 py-1 text-sm bg-green-500 text-white rounded-md">
                          Approved
                        </span>
                      ) : (
                        <span className="px-4 py-1 text-sm bg-red-500 text-white rounded-md">
                          Not Approved
                        </span>
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

export default MessCaretakerSpecialFood; 