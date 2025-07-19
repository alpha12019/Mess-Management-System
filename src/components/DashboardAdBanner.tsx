import React, { useState } from 'react';
import { FaBullhorn } from 'react-icons/fa';

const DashboardAdBanner: React.FC = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 mt-2">
      <div className="relative flex items-center justify-between bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white rounded-xl shadow-lg p-4 animate-fade-in">
        <div className="flex items-center space-x-4">
          <FaBullhorn className="text-3xl drop-shadow-md" />
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