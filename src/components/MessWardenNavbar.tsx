import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MessWardenNavbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'View Feedback | Statistics', path: '/mess/warden/feedback' },
    { name: 'View Menu', path: '/mess/warden/menu' },
    { name: 'View Announcements', path: '/mess/warden/announcements' },
    { name: 'View Registrations', path: '/mess/warden/registrations' },
    { name: 'View Bill And Payments', path: '/mess/warden/payments' }
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 shadow-lg rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo/Home */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/mess/warden" className="text-2xl font-extrabold text-blue-700 tracking-wider font-sans drop-shadow-sm">
                Mess Management
              </NavLink>
            </div>

            {/* Navigation Items */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `inline-flex items-center px-2 pt-1 border-b-4 text-lg font-sans font-semibold transition-all duration-200 ${
                      isActive
                        ? 'border-blue-500 text-blue-700 font-bold scale-105 bg-white/60 rounded-t-lg shadow-sm'
                        : 'border-transparent text-gray-500 hover:border-purple-300 hover:text-purple-700 hover:scale-105'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right side - Notifications & Profile */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {/* Notifications */}
            <button className="p-1 rounded-full text-gray-400 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            {/* Profile dropdown */}
            <div className="ml-3 relative">
              <div>
                <button className="bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 rounded-full flex text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md">
                  <span className="sr-only">Open user menu</span>
                  <div className="h-9 w-9 rounded-full flex items-center justify-center text-white font-bold text-lg font-sans">
                    <span className="text-base font-bold">MW</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}
        id="mobile-menu"
      >
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block pl-3 pr-4 py-2 border-l-4 text-lg font-sans font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-50 border-blue-500 text-blue-700 font-bold scale-105'
                    : 'border-transparent text-gray-500 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 hover:scale-105'
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MessWardenNavbar; 