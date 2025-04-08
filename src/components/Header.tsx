import React from 'react';
import { BellIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <div className="flex items-center w-1/3">
        <button className="lg:hidden mr-4">
          <Bars3Icon className="w-6 h-6 text-gray-500" />
        </button>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="search"
            className="block w-full p-2.5 pl-10 text-sm bg-gray-50 rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="relative">
          <BellIcon className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-accent w-4 h-4 rounded-full text-white text-xs flex items-center justify-center">
            3
          </span>
        </button>
        
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
            AJ
          </div>
          <div>
            <p className="text-sm font-medium">Ankit Jaiswal</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 