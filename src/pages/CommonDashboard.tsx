import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface DashboardProps {
  userType: 'student' | 'caretaker' | 'warden' | 'unregistered';
}

const CommonDashboard: React.FC<DashboardProps> = ({ userType }) => {
  const navigate = useNavigate();

  // Define quick links based on user type
  const getQuickLinks = () => {
    switch (userType) {
      case 'student':
        return [
          { title: 'View Menu', path: '/student/menu', icon: '🍽️' },
          { title: 'View Bill', path: '/student/view-bill', icon: '💰' },
          { title: 'Submit Feedback', path: '/student/feedback', icon: '📝' },
          { title: 'Apply Rebate', path: '/student/applications', icon: '🗓️' }
        ];
      case 'caretaker':
        return [
          { title: 'View Menu', path: '/caretaker/menu', icon: '🍽️' },
          { title: 'Update Menu', path: '/caretaker/update-menu', icon: '📋' },
          { title: 'Update Dates', path: '/caretaker/update-dates', icon: '📅' },
          { title: 'Add/Remove Students', path: '/caretaker/add-remove-mess', icon: '👥' }
        ];
      case 'warden':
        return [
          { title: 'View Menu', path: '/warden/menu', icon: '🍽️' },
          { title: 'View Bills', path: '/warden/bills', icon: '💰' },
          { title: 'View Feedback', path: '/warden/feedback', icon: '📝' },
          { title: 'Student Applications', path: '/warden/applications', icon: '📄' }
        ];
      case 'unregistered':
        return [
          { title: 'View Menu', path: '/student/menu', icon: '🍽️' },
          { title: 'View Bill', path: '/student/view-bill', icon: '💰' },
          { title: 'Register', path: '/student/registration', icon: '📝' }
        ];
      default:
        return [];
    }
  };

  // Get summary data based on user type
  const getSummaryData = () => {
    switch (userType) {
      case 'student':
        return [
          { title: 'Total Bill', value: '₹4,500', color: 'bg-blue-100' },
          { title: 'Pending Rebates', value: '2', color: 'bg-yellow-100' },
          { title: 'Special Meals', value: '1', color: 'bg-green-100' },
          { title: 'Days Left', value: '15', color: 'bg-purple-100' }
        ];
      case 'caretaker':
        return [
          { title: 'Total Students', value: '120', color: 'bg-blue-100' },
          { title: 'Pending Rebates', value: '8', color: 'bg-yellow-100' },
          { title: 'Special Food Requests', value: '5', color: 'bg-green-100' },
          { title: 'Days in Semester', value: '45', color: 'bg-purple-100' }
        ];
      case 'warden':
        return [
          { title: 'Total Feedback', value: '24', color: 'bg-blue-100' },
          { title: 'Pending Approvals', value: '12', color: 'bg-yellow-100' },
          { title: 'Total Students', value: '350', color: 'bg-green-100' },
          { title: 'Total Collection', value: '₹15,75,000', color: 'bg-purple-100' }
        ];
      case 'unregistered':
        return [
          { title: 'Mess Options', value: '2', color: 'bg-blue-100' },
          { title: 'Semester Fee', value: '₹15,000', color: 'bg-yellow-100' },
          { title: 'Registration Status', value: 'Open', color: 'bg-green-100' },
          { title: 'Days to Register', value: '10', color: 'bg-purple-100' }
        ];
      default:
        return [];
    }
  };

  // Format title based on user type
  const getWelcomeTitle = () => {
    switch (userType) {
      case 'student':
        return 'Student Dashboard';
      case 'caretaker':
        return 'Mess Caretaker Dashboard';
      case 'warden':
        return 'Warden Dashboard';
      case 'unregistered':
        return 'Student Portal';
      default:
        return 'Dashboard';
    }
  };

  const quickLinks = getQuickLinks();
  const summaryData = getSummaryData();

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800">{getWelcomeTitle()}</h1>
      
      {/* Summary Section */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4 text-gray-700">Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryData.map((item, index) => (
            <div key={index} className={`${item.color} p-4 rounded-lg shadow-sm`}>
              <p className="text-sm font-medium text-gray-600">{item.title}</p>
              <p className="text-2xl font-bold text-gray-800">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Quick Links */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4 text-gray-700">Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.path}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors flex items-center"
            >
              <span className="text-2xl mr-3">{link.icon}</span>
              <span className="text-gray-800 font-medium">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Recent Activity (Placeholder) */}
      <div>
        <h2 className="text-lg font-medium mb-4 text-gray-700">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center py-2 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <span className="text-gray-500">
                    {userType === 'student' && '📚'}
                    {userType === 'caretaker' && '🍽️'}
                    {userType === 'warden' && '📊'}
                    {userType === 'unregistered' && '📝'}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {userType === 'student' && 'Rebate request processed'}
                    {userType === 'caretaker' && 'Menu updated for next week'}
                    {userType === 'warden' && 'New feedback received'}
                    {userType === 'unregistered' && 'Registration open'}
                  </p>
                  <p className="text-xs text-gray-500">Today at 2:30 PM</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonDashboard; 