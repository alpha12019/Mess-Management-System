import React, { useState } from 'react';
import StudentRebate from './StudentRebate';
import StudentSpecialFood from './StudentSpecialFood';

type TabType = 'rebate' | 'special-food';

const StudentApplications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('special-food');

  const getTabClass = (tab: TabType) => {
    const baseClasses = "px-4 py-2 text-sm font-medium";
    return `${baseClasses} ${
      activeTab === tab
        ? "text-blue-600 border-b-2 border-blue-500"
        : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
    }`;
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex justify-center space-x-8">
          <button
            onClick={() => setActiveTab('rebate')}
            className={getTabClass('rebate')}
          >
            Rebate Requests
          </button>
          <button
            onClick={() => setActiveTab('special-food')}
            className={getTabClass('special-food')}
          >
            Special Food Requests
          </button>
        </nav>
      </div>

      {/* Content */}
      <div>
        {activeTab === 'rebate' ? (
          <StudentRebate />
        ) : (
          <StudentSpecialFood />
        )}
      </div>
    </div>
  );
};

export default StudentApplications; 