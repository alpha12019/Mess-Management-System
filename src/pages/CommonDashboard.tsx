import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


interface DashboardProps {
  userType: 'student' | 'caretaker' | 'warden' | 'unregistered';
}

const CommonDashboard: React.FC<DashboardProps> = ({ userType }) => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [notifications, setNotifications] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Define quick links based on user type
  const getQuickLinks = () => {
    switch (userType) {
      case 'student':
        return [
          { title: 'View Menu', path: '/student/menu', icon: '🍽️', color: 'from-orange-400 to-red-500' },
          { title: 'View Bill', path: '/student/view-bill', icon: '💰', color: 'from-green-400 to-blue-500' },
          { title: 'Submit Feedback', path: '/student/feedback', icon: '💬', color: 'from-purple-400 to-pink-500' },
          { title: 'Apply Rebate', path: '/student/applications', icon: '📅', color: 'from-blue-400 to-indigo-500' }
        ];
      case 'caretaker':
        return [
          { title: 'View Menu', path: '/caretaker/menu', icon: '🍽️', color: 'from-orange-400 to-red-500' },
          { title: 'Update Menu', path: '/caretaker/update-menu', icon: '📋', color: 'from-green-400 to-blue-500' },
          { title: 'Update Dates', path: '/caretaker/update-dates', icon: '📅', color: 'from-purple-400 to-pink-500' },
          { title: 'Add/Remove Students', path: '/caretaker/add-remove-mess', icon: '👥', color: 'from-blue-400 to-indigo-500' }
        ];
      case 'warden':
        return [
          { title: 'View Menu', path: '/warden/menu', icon: '🍽️', color: 'from-orange-400 to-red-500' },
          { title: 'View Bills', path: '/warden/bills', icon: '💰', color: 'from-green-400 to-blue-500' },
          { title: 'View Feedback', path: '/warden/feedback', icon: '💬', color: 'from-purple-400 to-pink-500' },
          { title: 'Student Applications', path: '/warden/applications', icon: '📄', color: 'from-blue-400 to-indigo-500' }
        ];
      case 'unregistered':
        return [
          { title: 'View Menu', path: '/student/menu', icon: '🍽️', color: 'from-orange-400 to-red-500' },
          { title: 'View Bill', path: '/student/view-bill', icon: '💰', color: 'from-green-400 to-blue-500' },
          { title: 'Register', path: '/student/registration', icon: '👤', color: 'from-purple-400 to-pink-500' }
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
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-fade-in">
      {/* Top Bar with Search, Time, and Notifications */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/40">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input
              type="text"
              placeholder="Search dashboard..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
            />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-sm text-gray-500 font-medium">Current Time</div>
            <div className="text-lg font-bold text-gray-800 font-mono">
              {currentTime.toLocaleTimeString()}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500 font-medium">Date</div>
            <div className="text-lg font-bold text-gray-800 font-mono">
              {currentTime.toLocaleDateString()}
            </div>
          </div>
          <button className="relative p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-110 transition-transform duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {notifications}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Hero Section with animated background */}
      <div className="relative mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10 rounded-3xl"></div>
        <div className="relative p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce">
              <svg className="text-white text-4xl w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight drop-shadow-lg font-sans animate-pulse">
            {getWelcomeTitle()}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-medium max-w-2xl mx-auto mb-6">
            Welcome to your personalized mess management dashboard. Everything you need, right at your fingertips.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg className="text-green-500 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Secure & Reliable</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg className="text-blue-500 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Fast & Efficient</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 tracking-wide font-sans flex items-center">
          <svg className="mr-3 text-purple-600 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          Dashboard Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryData.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:scale-105 transition-all duration-500 group cursor-pointer"
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-tr from-purple-200 via-pink-200 to-blue-200 rounded-full opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110"></div>
              <div className="relative z-10">
                <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-2">{item.title}</p>
                <p className="text-3xl font-black text-gray-900 font-mono group-hover:text-purple-600 transition-colors duration-300">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 tracking-wide font-sans flex items-center">
          <FaClipboardList className="mr-3 text-blue-600" />
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="group relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="relative z-10 flex items-center">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${link.color} text-white mr-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <link.icon className="w-6 h-6" />
                </div>
                <span className="text-gray-900 font-bold text-lg tracking-tight font-sans group-hover:text-purple-600 transition-colors duration-300">
                  {link.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 tracking-wide font-sans flex items-center">
          <FaRegCalendarCheck className="mr-3 text-pink-600" />
          Recent Activity
        </h2>
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 rounded-lg px-3 transition-colors duration-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center mr-4 animate-pulse">
                  {userType === 'student' && <FaRegCalendarCheck className="text-blue-600 text-xl" />}
                  {userType === 'caretaker' && <FaUtensils className="text-green-600 text-xl" />}
                  {userType === 'warden' && <FaChartLine className="text-purple-600 text-xl" />}
                  {userType === 'unregistered' && <FaFileAlt className="text-pink-600 text-xl" />}
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold text-gray-900 font-sans">
                    {userType === 'student' && 'Rebate request processed successfully'}
                    {userType === 'caretaker' && 'Menu updated for next week'}
                    {userType === 'warden' && 'New feedback received from student'}
                    {userType === 'unregistered' && 'Registration portal is now open'}
                  </p>
                  <p className="text-sm text-gray-500 mt-1 font-mono">Today at 2:30 PM</p>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements & Stats Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 tracking-wide font-sans flex items-center">
          <FaTrophy className="mr-3 text-yellow-600" />
          Achievements & Insights
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Achievement Cards */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl border border-yellow-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-yellow-800">Your Progress</h3>
              <FaStar className="text-yellow-500 text-2xl animate-pulse" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Profile Completion</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full w-4/5"></div>
                  </div>
                  <span className="text-sm font-bold text-gray-800">80%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Active Days</span>
                <span className="text-lg font-bold text-yellow-600">15 days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Tasks Completed</span>
                <span className="text-lg font-bold text-green-600">24/30</span>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl border border-blue-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-blue-800">Pro Tips</h3>
              <FaLightbulb className="text-blue-500 text-2xl" />
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <p className="text-gray-700 text-sm">Submit feedback early for better response time</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <p className="text-gray-700 text-sm">Check menu updates daily for special meals</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <p className="text-gray-700 text-sm">Keep track of your payment deadlines</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Quick Actions */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-gray-600 font-medium">Need help? Contact support</p>
            <p className="text-sm text-gray-500">We're here to help you 24/7</p>
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:scale-105 transition-transform duration-200 font-medium">
              Get Help
            </button>
            <button className="px-6 py-2 border border-purple-500 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-200 font-medium">
              Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonDashboard; 