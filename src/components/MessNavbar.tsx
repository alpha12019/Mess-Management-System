import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface MessNavbarProps {
  isRegistered?: boolean;
}

const MessNavbar: React.FC<MessNavbarProps> = ({ isRegistered = false }) => {
  const location = useLocation();

  const unregisteredNavItems = [
    { name: 'View Menu', path: '/mess/menu' },
    { name: 'View Bill', path: '/mess/bill' },
    { name: 'Registration', path: '/mess/registration' },
    { name: 'Payment History', path: '/mess/payment-history' },
  ];

  const registeredNavItems = [
    { name: 'Home', path: '/' },
    { name: 'Feedback', path: '/mess/feedback' },
    { name: 'Payment History', path: '/mess/payment-history' },
    { name: 'Recharge', path: '/mess/recharge' },
    { name: 'Rebate', path: '/mess/rebate' },
    { name: 'Special Food', path: '/mess/special-food' },
    { name: 'Update Balance', path: '/mess/update-balance' },
    { name: 'Deregistration', path: '/mess/deregistration' }
  ];

  const navItems = isRegistered ? registeredNavItems : unregisteredNavItems;

  // Check if the current location is within the applications section
  const isApplicationsActive = location.pathname.includes('/mess/rebate') || 
                              location.pathname.includes('/mess/special-food') ||
                              location.pathname.includes('/mess/deregistration');
  
  // Check if current location is in the update balance section                            
  const isUpdateBalanceActive = location.pathname.includes('/mess/update-balance');

  return (
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 shadow-lg rounded-b-2xl mb-6">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Main Title */}
          <div className="flex-shrink-0">
            <span className="font-extrabold text-2xl text-blue-700 tracking-wider font-sans drop-shadow-sm">Mess Module</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex md:space-x-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  (isActive || (item.name === 'Applications' && isApplicationsActive) || (item.name === 'Update Balance' && isUpdateBalanceActive))
                    ? "border-b-4 border-blue-500 text-blue-700 font-bold inline-flex items-center px-2 pt-1 text-base font-sans scale-105 transition-all duration-200"
                    : "border-b-4 border-transparent text-gray-500 hover:border-purple-300 hover:text-purple-700 inline-flex items-center px-2 pt-1 text-base font-sans font-semibold transition-all duration-200 hover:scale-105"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* User Menu - Only shown for registered users */}
          {isRegistered && (
            <div className="flex items-center">
              <div className="ml-3 relative">
                <div className="flex items-center space-x-3">
                  <span className="text-base text-gray-700 font-semibold font-sans">John Doe</span>
                  <button className="bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 rounded-full flex text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-9 w-9 rounded-full flex items-center justify-center text-white font-bold text-lg font-sans">
                      JD
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                (isActive || (item.name === 'Applications' && isApplicationsActive) || (item.name === 'Update Balance' && isUpdateBalanceActive))
                  ? "bg-blue-100 text-blue-700 block px-3 py-2 rounded-md text-lg font-bold font-sans shadow-sm scale-105"
                  : "text-gray-600 hover:bg-purple-50 hover:text-purple-700 block px-3 py-2 rounded-md text-lg font-semibold font-sans transition-all duration-200 hover:scale-105"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessNavbar; 