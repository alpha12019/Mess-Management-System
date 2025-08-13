import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChartLine, FaUsers, FaClipboardList, FaCalendarAlt, FaMoneyBillWave, FaUtensils, FaRegCommentDots, FaFileAlt, FaUserPlus, FaUserEdit, FaUserMinus, FaRegCalendarCheck } from 'react-icons/fa';

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
          { title: 'View Menu', path: '/student/menu', icon: FaUtensils, color: 'from-orange-400 to-red-500' },
          { title: 'View Bill', path: '/student/view-bill', icon: FaMoneyBillWave, color: 'from-green-400 to-blue-500' },
          { title: 'Submit Feedback', path: '/student/feedback', icon: FaRegCommentDots, color: 'from-purple-400 to-pink-500' },
          { title: 'Apply Rebate', path: '/student/applications', icon: FaRegCalendarCheck, color: 'from-blue-400 to-indigo-500' }
        ];
      case 'caretaker':
        return [
          { title: 'View Menu', path: '/caretaker/menu', icon: FaUtensils, color: 'from-orange-400 to-red-500' },
          { title: 'Update Menu', path: '/caretaker/update-menu', icon: FaClipboardList, color: 'from-green-400 to-blue-500' },
          { title: 'Update Dates', path: '/caretaker/update-dates', icon: FaCalendarAlt, color: 'from-purple-400 to-pink-500' },
          { title: 'Add/Remove Students', path: '/caretaker/add-remove-mess', icon: FaUsers, color: 'from-blue-400 to-indigo-500' }
        ];
      case 'warden':
        return [
          { title: 'View Menu', path: '/warden/menu', icon: FaUtensils, color: 'from-orange-400 to-red-500' },
          { title: 'View Bills', path: '/warden/bills', icon: FaMoneyBillWave, color: 'from-green-400 to-blue-500' },
          { title: 'View Feedback', path: '/warden/feedback', icon: FaRegCommentDots, color: 'from-purple-400 to-pink-500' },
          { title: 'Student Applications', path: '/warden/applications', icon: FaFileAlt, color: 'from-blue-400 to-indigo-500' }
        ];
      case 'unregistered':
        return [
          { title: 'View Menu', path: '/student/menu', icon: FaUtensils, color: 'from-orange-400 to-red-500' },
          { title: 'View Bill', path: '/student/view-bill', icon: FaMoneyBillWave, color: 'from-green-400 to-blue-500' },
          { title: 'Register', path: '/student/registration', icon: FaUserPlus, color: 'from-purple-400 to-pink-500' }
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
      {/* Hero Section with animated background */}
      <div className="relative mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10 rounded-3xl"></div>
        <div className="relative p-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight drop-shadow-lg font-sans animate-pulse">
            {getWelcomeTitle()}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Welcome to your personalized mess management dashboard. Everything you need, right at your fingertips.
          </p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 tracking-wide font-sans flex items-center">
          <FaChartLine className="mr-3 text-purple-600" />
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
      <div>
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
    </div>
  );
};

export default CommonDashboard; 