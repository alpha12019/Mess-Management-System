import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MessApplicationsNav from '../components/MessApplicationsNav';

const MessRegisteredStudentStatus: React.FC = () => {
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isStatusTab = location.pathname === '/mess/registered-student/status';

  // Mock data for registration status
  const initialRegistrations = [
    {
      id: 'REG001',
      firstName: 'John',
      lastName: 'Doe',
      rollNumber: '2023001',
      email: 'john.doe@example.com',
      mess: 'Mess 1',
      mealPlan: 'Full Plan',
      status: 'Approved',
      submissionDate: '2024-03-15',
      approvalDate: '2024-03-16'
    },
    {
      id: 'REG002',
      firstName: 'Jane',
      lastName: 'Smith',
      rollNumber: '2023002',
      email: 'jane.smith@example.com',
      mess: 'Mess 2',
      mealPlan: 'Partial Plan',
      status: 'Pending',
      submissionDate: '2024-03-14'
    },
    {
      id: 'REG003',
      firstName: 'Mike',
      lastName: 'Johnson',
      rollNumber: '2023003',
      email: 'mike.johnson@example.com',
      mess: 'Mess 3',
      mealPlan: 'Full Plan',
      status: 'Rejected',
      submissionDate: '2024-03-13',
      rejectionReason: 'Invalid roll number format'
    }
  ];

  // State for registrations and filters
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [registrations, setRegistrations] = useState(initialRegistrations);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [messFilter, setMessFilter] = useState<string>('');
  const [selectedRegistration, setSelectedRegistration] = useState<any>(null);

  // Filter registrations based on status and mess
  const filteredRegistrations = registrations.filter(reg => {
    if (statusFilter && reg.status !== statusFilter) return false;
    if (messFilter && reg.mess !== messFilter) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Secondary Navigation */}
      <MessApplicationsNav 
        applyPath="/mess/registered-student/apply"
        statusPath="/mess/registered-student/status"
        applyLabel="Student Registration"
        statusLabel="Registration Status"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Status</h2>

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

            {/* Registrations Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Registration ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Roll Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mess
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
                  {filteredRegistrations.map((reg) => (
                    <tr key={reg.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {reg.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {reg.firstName} {reg.lastName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {reg.rollNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {reg.mess}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${reg.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                            reg.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                          {reg.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <button
                          onClick={() => setSelectedRegistration(reg)}
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

            {/* Registration Details Modal */}
            {selectedRegistration && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg p-6 max-w-lg w-full">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Registration Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Registration ID</p>
                      <p className="mt-1">{selectedRegistration.id}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Name</p>
                      <p className="mt-1">{selectedRegistration.firstName} {selectedRegistration.lastName}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Roll Number</p>
                      <p className="mt-1">{selectedRegistration.rollNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="mt-1">{selectedRegistration.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Mess</p>
                      <p className="mt-1">{selectedRegistration.mess}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Meal Plan</p>
                      <p className="mt-1">{selectedRegistration.mealPlan}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Status</p>
                      <p className="mt-1">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${selectedRegistration.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                            selectedRegistration.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                          {selectedRegistration.status}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Submission Date</p>
                      <p className="mt-1">{selectedRegistration.submissionDate}</p>
                    </div>
                    {selectedRegistration.approvalDate && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">Approval Date</p>
                        <p className="mt-1">{selectedRegistration.approvalDate}</p>
                      </div>
                    )}
                    {selectedRegistration.rejectionReason && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">Rejection Reason</p>
                        <p className="mt-1 text-red-600">{selectedRegistration.rejectionReason}</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setSelectedRegistration(null)}
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

export default MessRegisteredStudentStatus; 