import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';


interface MessNavbarProps {
  isRegistered?: boolean;
  userName?: string;
}

const MessNavbar: React.FC<MessNavbarProps> = ({ isRegistered = false, userName = 'John Doe' }) => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
    { name: 'Deregistration', path: '/mess/deregistration' },
  ];

  const navItems = isRegistered ? registeredNavItems : unregisteredNavItems;

  
  // Check if the current location is within the applications section
  const isApplicationsActive = location.pathname.includes('/mess/rebate') || 
                              location.pathname.includes('/mess/special-food') ||
                              location.pathname.includes('/mess/deregistration');
  
  // Check if current location is in the update balance section                            
  const isUpdateBalanceActive = location.pathname.includes('/mess/update-balance');

  const navIcons: Record<string, JSX.Element> = {
    'Home': <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>,
    'Feedback': <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
    </svg>,
    'Payment History': <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>,
    'Recharge': <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>,
    'Rebate': <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
    </svg>,
    'Special Food': <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    'Update Balance': <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    </svg>,
    'Deregistration': <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c.836 1.372 2.942.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.372-.836 1.372-2.942-.734-2.106a1.532 1.532 0 01-.947-2.287c.38-1.561-2.6-1.561-2.978 0zm-6.176 1.176a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm6.176.176a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" clipRule="evenodd" />
    </svg>,
    'View Menu': <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    'View Bill': <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>,
    'Registration': <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0 1 1 0 102 0zM16 11a1 1 0 10-2 0 1 1 0 102 0z" />
    </svg>,
  };

  return (
    <div className="relative z-10 animate-fade-in">
      {/* Animated Gradient Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x rounded-t-2xl" style={{backgroundSize:'200% 100%'}}></div>
      <div className="backdrop-blur-md bg-white/70 shadow-2xl rounded-b-2xl mb-6 border border-white/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo and Main Title */}
            <div className="flex-shrink-0">
              <span className="font-extrabold text-2xl text-blue-700 tracking-wider font-sans drop-shadow-sm">Mess Module</span>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button
                type="button"
                aria-controls="mobile-menu"
                aria-expanded={isMobileOpen}
                onClick={() => setIsMobileOpen((v) => !v)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-700 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex md:space-x-8">
              {navItems.map((item) => (
                <NavLink 
                  key={item.name}
                  to={item.path}
                  title={item.name}
                  className={({ isActive }) => 
                    (isActive || (item.name === 'Applications' && isApplicationsActive) || (item.name === 'Update Balance' && isUpdateBalanceActive))
                      ? "relative border-b-4 border-blue-500 text-blue-700 font-bold inline-flex items-center px-2 pt-1 text-base font-sans scale-105 transition-all duration-200 group nav-animated"
                      : "relative border-b-4 border-transparent text-gray-500 hover:border-purple-300 hover:text-purple-700 inline-flex items-center px-2 pt-1 text-base font-sans font-semibold transition-all duration-200 hover:scale-110 group nav-animated"
                  }
                >
                  {navIcons[item.name]}
                  <span>{item.name}</span>
                  {/* Animated underline */}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
                </NavLink>
              ))}
            </div>

            {/* User Menu - Only shown for registered users */}
            {isRegistered && (
              <div className="hidden md:flex items-center">
                <div className="ml-3 relative">
                  <div className="flex items-center space-x-3">
                    <span className="text-base text-gray-700 font-semibold font-sans">{userName}</span>
                    <button className="bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 rounded-full flex text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md border-4 border-pink-200 hover:scale-110 transition-transform duration-200 animate-glow pulse-avatar">
                      <span className="sr-only">Open user menu</span>
                      <div className="h-9 w-9 rounded-full flex items-center justify-center text-white font-bold text-lg font-sans">
                        {userName.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile menu */}
        <div id="mobile-menu" className={`md:hidden ${isMobileOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink 
                key={item.name}
                to={item.path}
                title={item.name}
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) => 
                  (isActive || (item.name === 'Applications' && isApplicationsActive) || (item.name === 'Update Balance' && isUpdateBalanceActive))
                    ? "relative bg-blue-100 text-blue-700 block px-3 py-2 rounded-md text-lg font-bold font-sans shadow-sm scale-105 group nav-animated"
                    : "relative text-gray-600 hover:bg-purple-50 hover:text-purple-700 block px-3 py-2 rounded-md text-lg font-semibold font-sans transition-all duration-200 hover:scale-110 group nav-animated"
                }
              >
                {navIcons[item.name]}
                <span>{item.name}</span>
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
              </NavLink>
            ))}

            {/* User menu for mobile */}
            {isRegistered && (
              <div className="mt-3 border-t border-gray-200 pt-3">
                <div className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-full flex items-center justify-center text-white font-bold text-lg font-sans bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 border-4 border-pink-200">
                    {userName.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </div>
                  <span className="text-base text-gray-700 font-semibold font-sans">{userName}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessNavbar; 