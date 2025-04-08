import React from 'react';
import { Link } from 'react-router-dom';

interface QuickAction {
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
}

const StudentDashboard: React.FC = () => {
  // Mock data - replace with actual data from your backend
  const registrationStatus = 'registered'; // or 'unregistered'
  const currentMess = 'Mess 1';
  const messBalance = 2500;

  const quickActions: QuickAction[] = [
    {
      title: 'View Menu',
      description: 'Check today\'s mess menu',
      path: '/student/menu',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
    },
    {
      title: 'Submit Feedback',
      description: 'Share your mess experience',
      path: '/student/feedback',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: 'Apply Rebate',
      description: 'Request mess rebate',
      path: '/student/rebate',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Status Card */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Mess Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Registration Status</p>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {registrationStatus === 'registered' ? (
                <span className="text-green-600">Registered</span>
              ) : (
                <span className="text-red-600">Not Registered</span>
              )}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Current Mess</p>
            <p className="mt-1 text-lg font-medium text-gray-900">{currentMess}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Mess Balance</p>
            <p className="mt-1 text-lg font-medium text-gray-900">₹{messBalance}</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.title}
              to={action.path}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {action.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900">{action.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{action.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard; 