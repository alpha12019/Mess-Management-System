import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MessNavbar from '../components/MessNavbar';
import { NavLink } from 'react-router-dom';

interface MessLayoutProps {
  isRegistered?: boolean;
}

const MessLayout: React.FC<MessLayoutProps> = ({ isRegistered = false }) => {
  const location = useLocation();
  
  // Determine the current page based on the URL path
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path.includes('/bill')) return 'View Bill and Payments';
    if (path.includes('/registration')) return 'Registration';
    return 'View Menu';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">FUSION - IIIT Jabalpur's ERP Portal</h1>
          
          <div className="flex items-center space-x-4">
            {/* Search box */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="student" 
                className="bg-blue-50 border border-blue-100 text-gray-800 px-3 py-1.5 rounded"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            {/* Notification bell */}
            <button className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center text-xs text-white">1</span>
            </button>
            
            {/* User avatar */}
            <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
              {/* User image or initials would go here */}
            </div>
          </div>
        </div>
      </header>
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-sm">
            <span className="text-gray-700">Mess Management</span>
            <span className="mx-2 text-gray-500">›</span>
            <span className="text-gray-700 font-medium">{getCurrentPage()}</span>
          </div>
        </div>
      </div>
      
      {/* Main content area with sidebar */}
      <div className="flex min-h-screen">
        {/* Sidebar - fixed position with z-index to ensure it's above other content */}
        <aside className="hidden md:block w-16 bg-white border-r h-screen fixed left-0 top-0 pt-20 z-10">
          <div className="flex flex-col items-center space-y-4 mt-4">
            {/* Home icon */}
            <NavLink to="/" className="p-2 text-gray-500 hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </NavLink>
            
            {/* Simplified sidebar icons */}
            {Array.from({ length: 8 }).map((_, i) => (
              <button key={i} className="p-2 text-gray-400 hover:text-blue-500 border-none bg-transparent">
                <div className="h-6 w-6 rounded-sm bg-gray-200"></div>
              </button>
            ))}
          </div>
        </aside>
        
        {/* Main content with left margin to accommodate sidebar */}
        <main className="flex-1 md:ml-16">
          {/* Add MessNavbar here at the layout level */}
          <MessNavbar isRegistered={isRegistered} />
          
          <div className="container mx-auto p-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MessLayout; 