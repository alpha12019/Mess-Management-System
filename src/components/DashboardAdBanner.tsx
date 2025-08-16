import React, { useState } from 'react';

const DashboardAdBanner: React.FC = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 mt-2">
      <div className="relative flex items-center justify-between bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white rounded-xl shadow-lg p-4 animate-fade-in">
        <div className="flex items-center space-x-4">
          <svg className="text-3xl drop-shadow-md w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L5.5 15H3a1 1 0 01-1-1V6a1 1 0 011-1h2.5l3.883-2.793zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <div>
            <div className="font-bold text-lg">Special Offer!</div>
            <div className="text-base">Get <span className="font-semibold">10% off</span> on your next mess recharge. Limited time only!</div>
          </div>
        </div>
        <a
          href="/mess/recharge"
          className="ml-6 bg-white/90 text-purple-700 font-bold px-4 py-2 rounded-lg shadow hover:bg-white transition-colors duration-200"
        >
          Recharge Now
        </a>
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-white hover:text-gray-200 text-xl font-bold focus:outline-none"
          aria-label="Dismiss advertisement"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default DashboardAdBanner; 