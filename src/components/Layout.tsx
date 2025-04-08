import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import useSidebar from '../hooks/useSidebar';

const Layout: React.FC = () => {
  const { isOpen, close } = useSidebar();
  
  return (
    <div className="flex h-screen overflow-hidden bg-secondary">
      {/* Sidebar - hidden on mobile by default */}
      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative inset-y-0 left-0 z-50 transition-transform duration-300 ease-in-out`}>
        <Sidebar />
      </div>
      
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden w-full">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
      
      {/* Overlay for sidebar on mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={close}
        />
      )}
    </div>
  );
};

export default Layout; 