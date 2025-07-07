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
          { title: 'View Menu ', path: '/student/menu', icon: '🍽️' },
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
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-gray-900 tracking-tight drop-shadow-lg font-sans">
        {getWelcomeTitle()}
      </h1>
      {/* Summary Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-5 text-purple-700 tracking-wide uppercase font-sans">Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryData.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden ${item.color} p-6 rounded-2xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 group`}
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-tr from-purple-200 via-pink-200 to-blue-200 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <p className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-1">{item.title}</p>
              <p className="text-3xl font-extrabold text-gray-900 font-mono">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Quick Links */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-5 text-blue-700 tracking-wide uppercase font-sans">Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:bg-gradient-to-tr hover:from-blue-50 hover:to-purple-100 transition-all flex items-center group hover:scale-105"
            >
              <span className="text-3xl mr-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                {link.icon}
              </span>
              <span className="text-gray-900 font-semibold text-lg tracking-tight font-sans">
                {link.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
      {/* Recent Activity (Placeholder) */}
      <div>
        <h2 className="text-xl font-semibold mb-5 text-pink-700 tracking-wide uppercase font-sans">Recent Activity</h2>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center py-3 border-b border-gray-100 last:border-b-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center mr-4 animate-pulse-slow">
                  <span className="text-2xl">
                    {userType === 'student' && '📚'}
                    {userType === 'caretaker' && '🍽️'}
                    {userType === 'warden' && '📊'}
                    {userType === 'unregistered' && '📝'}
                  </span>
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900 font-sans">
                    {userType === 'student' && 'Rebate request processed'}
                    {userType === 'caretaker' && 'Menu updated for next week'}
                    {userType === 'warden' && 'New feedback received'}
                    {userType === 'unregistered' && 'Registration open'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 font-mono">Today at 2:30 PM</p>
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