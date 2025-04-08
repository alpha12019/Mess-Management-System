import React, { useState } from 'react';

type TabType = 'apply' | 'status';
type MessType = 'Mess 1' | 'Mess 2';

interface RebateRequest {
  date: string;
  type: string;
  from: string;
  to: string;
  remark: string;
  status: string;
}

const StudentRebate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('status'); // Default to status view as shown in image
  const [selectedMess, setSelectedMess] = useState<MessType>('Mess 1');
  const [rebateFrom, setRebateFrom] = useState('');
  const [rebateTo, setRebateTo] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement rebate submission logic
    console.log({
      mess: selectedMess,
      from: rebateFrom,
      to: rebateTo,
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
        Rebate Request
      </h2>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 mt-6">
        <nav className="flex justify-center space-x-8">
          <button
            onClick={() => setActiveTab('apply')}
            className={getTabClass('apply')}
          >
            Apply for Rebate
          </button>
          <button
            onClick={() => setActiveTab('status')}
            className={getTabClass('status')}
          >
            Rebate Status
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'apply' ? (
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-center text-blue-600 mb-6">
              Rebate Application Form
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

              {/* Date Range */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="rebateFrom" className="block text-sm font-medium text-gray-700 mb-1">
                    Rebate From <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="rebateFrom"
                    placeholder="MM/DD/YYYY"
                    value={rebateFrom}
                    onChange={(e) => setRebateFrom(e.target.value)}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="rebateTo" className="block text-sm font-medium text-gray-700 mb-1">
                    Rebate To <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="rebateTo"
                    placeholder="MM/DD/YYYY"
                    value={rebateTo}
                    onChange={(e) => setRebateTo(e.target.value)}
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
                  placeholder="Enter the purpose of the rebate"
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
              Rebate Status
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      From
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      To
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Remark
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                      No rebate requests found
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

export default StudentRebate; 