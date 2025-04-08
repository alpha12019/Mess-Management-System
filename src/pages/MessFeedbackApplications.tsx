import React, { useState } from 'react';
import MessFeedbackNavbar from '../components/MessFeedbackNavbar';

const MessFeedbackApplications: React.FC = () => {
  // Mock data for feedback applications
  const initialApplications = [
    {
      id: 'FDB-2023-001',
      mess: 'Mess 1',
      type: 'Food Quality',
      description: 'The food served today was cold and not properly cooked.',
      submittedAt: '2023-11-15T10:30:00',
      status: 'Pending',
      response: null
    },
    {
      id: 'FDB-2023-002',
      mess: 'Mess 2',
      type: 'Cleanliness',
      description: 'The dining area was not properly cleaned. Tables were sticky and there were food scraps on the floor.',
      submittedAt: '2023-11-12T08:45:00',
      status: 'Resolved',
      response: 'Thank you for your feedback. We have instructed the cleaning staff to pay more attention to the dining area. The issue has been resolved.'
    },
    {
      id: 'FDB-2023-003',
      mess: 'Mess 1',
      type: 'Staff Behavior',
      description: 'The staff was very rude during lunch today.',
      submittedAt: '2023-11-10T13:15:00',
      status: 'In Progress',
      response: 'We are investigating this issue and will take appropriate action.'
    }
  ];

  // State for applications and filters
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [applications, setApplications] = useState(initialApplications);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [messFilter, setMessFilter] = useState<string>('');
  const [selectedApplicationId, setSelectedApplicationId] = useState<string | null>(null);

  // Apply filters
  const filteredApplications = applications.filter(app => {
    const matchesStatus = statusFilter === '' || app.status === statusFilter;
    const matchesMess = messFilter === '' || app.mess === messFilter;
    return matchesStatus && matchesMess;
  });

  // Get selected application details
  const selectedApplication = applications.find(app => app.id === selectedApplicationId);

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <MessFeedbackNavbar />

      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-blue-600 mb-6">Feedback Applications</h1>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div>
              <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="statusFilter"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
              >
                <option value="">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="messFilter" className="block text-sm font-medium text-gray-700 mb-1">
                Mess
              </label>
              <select
                id="messFilter"
                value={messFilter}
                onChange={(e) => setMessFilter(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
              >
                <option value="">All Messes</option>
                <option value="Mess 1">Mess 1</option>
                <option value="Mess 2">Mess 2</option>
              </select>
            </div>
          </div>
          
          {/* Application List */}
          <div className="mb-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Feedback ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mess
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
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
                  {filteredApplications.length > 0 ? (
                    filteredApplications.map((application) => (
                      <tr key={application.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                          {application.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(application.submittedAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {application.mess}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {application.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            application.status === 'Resolved' 
                              ? 'bg-green-100 text-green-800' 
                              : application.status === 'In Progress'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {application.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button 
                            onClick={() => setSelectedApplicationId(application.id)}
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
                        No feedback applications found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Application Detail */}
          {selectedApplication && (
            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">Feedback Details</h2>
                  <p className="text-sm text-gray-500">ID: {selectedApplication.id}</p>
                </div>
                <button 
                  onClick={() => setSelectedApplicationId(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Submitted On</p>
                  <p className="font-medium">{formatDate(selectedApplication.submittedAt)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      selectedApplication.status === 'Resolved' 
                        ? 'bg-green-100 text-green-800' 
                        : selectedApplication.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {selectedApplication.status}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mess</p>
                  <p className="font-medium">{selectedApplication.mess}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Feedback Type</p>
                  <p className="font-medium">{selectedApplication.type}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Description</p>
                <p className="bg-gray-50 p-3 rounded text-gray-700">{selectedApplication.description}</p>
              </div>
              
              {selectedApplication.response && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Response</p>
                  <div className="bg-blue-50 p-3 rounded text-gray-700">
                    <p>{selectedApplication.response}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessFeedbackApplications; 