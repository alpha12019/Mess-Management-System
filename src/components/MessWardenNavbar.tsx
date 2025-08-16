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

  const navIcons: Record<string, JSX.Element> = {
    'View Feedback | Statistics': <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
    </svg>,
    'View Menu': <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    'View Announcements': <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L5.5 15H3a1 1 0 01-1-1V6a1 1 0 011-1h2.5l3.883-2.793zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>,
    'View Registrations': <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>,
    'View Bill And Payments': <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>,
  };

  return (
    <nav className="relative z-10">
      {/* Animated Gradient Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x rounded-t-2xl" style={{backgroundSize:'200% 100%'}}></div>
      <div className="bg-white/70 backdrop-blur-md shadow-2xl rounded-b-2xl border border-white/40">
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
                      `relative inline-flex items-center px-2 pt-1 border-b-4 text-lg font-sans font-semibold transition-all duration-200 group ${
                        isActive
                          ? 'border-blue-500 text-blue-700 font-bold scale-105 bg-white/60 rounded-t-lg shadow-sm'
                          : 'border-transparent text-gray-500 hover:border-purple-300 hover:text-purple-700 hover:scale-105'
                      }`
                    }
                  >
                    {navIcons[item.name]}
                    <span>{item.name}</span>
                    {/* Animated underline */}
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
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
                  <button className="bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 rounded-full flex text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md border-4 border-pink-200 hover:scale-110 transition-transform duration-200 animate-glow">
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
                `relative block pl-3 pr-4 py-2 border-l-4 text-lg font-sans font-semibold transition-all duration-200 group ${
                  isActive
                    ? 'bg-blue-50 border-blue-500 text-blue-700 font-bold scale-105'
                    : 'border-transparent text-gray-500 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 hover:scale-105'
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {navIcons[item.name]}
              <span>{item.name}</span>
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MessWardenNavbar; 