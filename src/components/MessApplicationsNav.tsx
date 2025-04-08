import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface MessApplicationsNavProps {
  applyPath: string;
  statusPath: string;
  applyLabel: string;
  statusLabel: string;
}

const MessApplicationsNav: React.FC<MessApplicationsNavProps> = ({ 
  applyPath, 
  statusPath, 
  applyLabel, 
  statusLabel 
}) => {
  const location = useLocation();
  const isApplyTab = location.pathname === applyPath || location.pathname === `${applyPath}/apply`;
  const isStatusTab = location.pathname === statusPath;

  return (
    <div className="mb-6">
      <div className="flex border-b">
        <NavLink
          to={applyPath}
          className={({ isActive }) => 
            `px-4 py-3 text-center border-b-2 ${
              isApplyTab 
                ? 'border-blue-500 text-blue-600 font-medium' 
                : 'border-transparent text-gray-600 hover:text-blue-500'
            }`
          }
        >
          {applyLabel}
        </NavLink>
        
        <NavLink
          to={statusPath}
          className={({ isActive }) => 
            `px-4 py-3 text-center border-b-2 ${
              isStatusTab 
                ? 'border-blue-500 text-blue-600 font-medium' 
                : 'border-transparent text-gray-600 hover:text-blue-500'
            }`
          }
        >
          {statusLabel}
        </NavLink>
      </div>
    </div>
  );
};

export default MessApplicationsNav; 