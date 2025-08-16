import React from 'react';
import { NavLink } from 'react-router-dom';


const MessFeedbackNavbar: React.FC = () => {
  const navIcons: Record<string, JSX.Element> = {
    'Submit Feedback': <FaRegCommentDots className="mr-2" />,
    'Applications': <FaClipboardList className="mr-2" />,
  };

  return (
    <div className="relative z-10">
      {/* Animated Gradient Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x rounded-t-2xl" style={{backgroundSize:'200% 100%'}}></div>
      <div className="bg-white/70 backdrop-blur-md border-b mb-6 shadow-2xl rounded-b-2xl border border-white/40 relative overflow-hidden">
        <div className="container mx-auto flex items-center">
          <button className="p-3 text-gray-500 hover:text-blue-600 transition-colors">
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
                  `relative px-6 py-3 text-center border-b-4 ${
                    isActive
                      ? 'border-blue-500 text-blue-700 font-bold scale-105 bg-white/60 rounded-t-lg shadow-sm'
                      : 'border-transparent text-gray-600 hover:text-purple-700 hover:border-purple-300 font-semibold transition-all duration-200 hover:scale-105'
                  } text-lg font-sans group`
                }
              >
                {navIcons['Submit Feedback']}
                <span>Submit Feedback</span>
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
              </NavLink>
              <NavLink
                to="/mess/feedback/applications"
                className={({ isActive }) =>
                  `relative px-6 py-3 text-center border-b-4 ${
                    isActive
                      ? 'border-blue-500 text-blue-700 font-bold scale-105 bg-white/60 rounded-t-lg shadow-sm'
                      : 'border-transparent text-gray-600 hover:text-purple-700 hover:border-purple-300 font-semibold transition-all duration-200 hover:scale-105'
                  } text-lg font-sans group`
                }
              >
                {navIcons['Applications']}
                <span>Applications</span>
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
              </NavLink>
            </div>
          </div>
          <button className="p-3 text-gray-500 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessFeedbackNavbar; 