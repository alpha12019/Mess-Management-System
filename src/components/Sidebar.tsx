import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

const Sidebar: React.FC = () => {
  const navItems = [
    { name: 'Dashboard', icon: HomeIcon, path: '/' },
    { name: 'Analytics', icon: ChartBarIcon, path: '/analytics' },
    { name: 'Customers', icon: UsersIcon, path: '/customers' },
    { name: 'Maintenance', icon: WrenchScrewdriverIcon, path: '/maintenance' },
    { name: 'Documentation', icon: DocumentTextIcon, path: '/documentation' },
    { name: 'Settings', icon: Cog6ToothIcon, path: '/settings' },
    { name: 'Help', icon: QuestionMarkCircleIcon, path: '/help' },
  ];

  return (
    <aside className="w-64 h-full bg-dark text-white flex flex-col">
      <div className="px-6 py-8">
        <h1 className="text-2xl font-bold flex items-center">
          <svg className="w-8 h-8 mr-2 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          Fusion
        </h1>
      </div>
      
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => 
              `sidebar-item ${isActive ? 'active' : ''}`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="px-3 pb-6 pt-4 border-t border-white/10 mt-4">
        <button className="sidebar-item w-full text-left text-red-400 hover:bg-white/5">
          <ArrowLeftOnRectangleIcon className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar; 