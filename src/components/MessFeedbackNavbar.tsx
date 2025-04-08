import React from 'react';
import { NavLink } from 'react-router-dom';

const MessFeedbackNavbar: React.FC = () => {
  return (
    <div className="border-b mb-6">
      <div className="container mx-auto flex items-center">
        <button className="p-3 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="flex justify-center flex-1">
          <div className="flex">
            <NavLink
              to="/mess/feedback"
              end
              className={({ isActive }) => 
                `px-6 py-3 text-center border-b-2 ${
                  isActive 
                    ? 'border-blue-500 text-blue-600 font-medium' 
                    : 'border-transparent text-gray-600 hover:text-blue-500'
                }`
              }
            >
              Submit Feedback
            </NavLink>
            
            <NavLink
              to="/mess/feedback/applications"
              className={({ isActive }) => 
                `px-6 py-3 text-center border-b-2 ${
                  isActive 
                    ? 'border-blue-500 text-blue-600 font-medium' 
                    : 'border-transparent text-gray-600 hover:text-blue-500'
                }`
              }
            >
              Applications
            </NavLink>
          </div>
        </div>

        <button className="p-3 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MessFeedbackNavbar; 