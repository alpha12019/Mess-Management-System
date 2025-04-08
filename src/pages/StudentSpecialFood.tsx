import React, { useState } from 'react';

type TabType = 'apply' | 'status';
type MessType = 'Mess 1' | 'Mess 2';
type FoodTiming = 'Breakfast' | 'Lunch' | 'Dinner';

interface SpecialFoodRequest {
  applicationDate: string;
  purpose: string;
  from: string;
  to: string;
  status: string;
}

const StudentSpecialFood: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('status'); // Default to status view as shown in image
  const [selectedMess, setSelectedMess] = useState<MessType | ''>('');
  const [selectedFood, setSelectedFood] = useState('');
  const [selectedTiming, setSelectedTiming] = useState<FoodTiming | ''>('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement special food request submission logic
    console.log({
      mess: selectedMess,
      food: selectedFood,
      timing: selectedTiming,
      from: fromDate,
      to: toDate,
      purpose
    });
  };

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
      <h2 className="text-2xl font-semibold text-center text-blue-600 pt-6">
        Special Food Requests
      </h2>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 mt-6">
        <nav className="flex justify-center space-x-8">
          <button
            onClick={() => setActiveTab('apply')}
            className={getTabClass('apply')}
          >
            Apply for Special Food
          </button>
          <button
            onClick={() => setActiveTab('status')}
            className={getTabClass('status')}
          >
            Special Food Status
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'apply' ? (
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-center text-blue-600 mb-6">
              Apply for Special Food
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mess Selection */}
              <div>
                <label htmlFor="mess" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Mess
                </label>
                <select
                  id="mess"
                  value={selectedMess}
                  onChange={(e) => setSelectedMess(e.target.value as MessType)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Choose Mess</option>
                  <option value="Mess 1">Mess 1</option>
                  <option value="Mess 2">Mess 2</option>
                </select>
              </div>

              {/* Food Selection */}
              <div>
                <label htmlFor="food" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Food
                </label>
                <select
                  id="food"
                  value={selectedFood}
                  onChange={(e) => setSelectedFood(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Choose Food</option>
                  <option value="Jain">Jain</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Diet">Diet</option>
                </select>
              </div>

              {/* Food Timing */}
              <div>
                <label htmlFor="timing" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Food Timing
                </label>
                <select
                  id="timing"
                  value={selectedTiming}
                  onChange={(e) => setSelectedTiming(e.target.value as FoodTiming)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Choose timing</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                </select>
              </div>

              {/* Date Range */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700 mb-1">
                    From <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fromDate"
                    placeholder="Select start date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="toDate" className="block text-sm font-medium text-gray-700 mb-1">
                    To <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="toDate"
                    placeholder="Select end date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Purpose */}
              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
                  Purpose <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="purpose"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  placeholder="Enter purpose"
                  rows={4}
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-medium text-center text-blue-600 mb-6">
              Special Food Status
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Application Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Purpose
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      From
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      To
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                      No special food requests found
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentSpecialFood; 