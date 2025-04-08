import React, { useState } from 'react';

type TabType = 'update' | 'status';
type MessType = 'Mess 1' | 'Mess 2';

const StudentUpdatePayment: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('update');
  const [selectedMess, setSelectedMess] = useState<MessType | ''>('');
  const [transactionNo, setTransactionNo] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement update balance request submission logic
    console.log({
      mess: selectedMess,
      transactionNo,
      amount,
      paymentDate,
      rollNo,
      image
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
        Update Balance Request
      </h2>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 mt-6">
        <nav className="flex justify-center space-x-8">
          <button
            onClick={() => setActiveTab('update')}
            className={getTabClass('update')}
          >
            Update Balance Request
          </button>
          <button
            onClick={() => setActiveTab('status')}
            className={getTabClass('status')}
          >
            Request Status
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'update' ? (
          <div className="max-w-2xl mx-auto">
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

              {/* Transaction Number */}
              <div>
                <label htmlFor="transactionNo" className="block text-sm font-medium text-gray-700 mb-1">
                  Transaction No. <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="transactionNo"
                  value={transactionNo}
                  onChange={(e) => setTransactionNo(e.target.value)}
                  placeholder="Transaction No."
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Amount and Image Upload */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Amount <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Balance Amount"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                    Image <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={(e) => setImage(e.target.files?.[0] || null)}
                    accept="image/*"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>

              {/* Payment Date */}
              <div>
                <label htmlFor="paymentDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Payment Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="paymentDate"
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
                  placeholder="MM/DD/YYYY"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Roll Number */}
              <div>
                <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700 mb-1">
                  Roll No. <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="rollNo"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  placeholder="Roll Number"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Update
              </button>
            </form>
          </div>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction Number
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
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
                    <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                      No payment requests found
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

export default StudentUpdatePayment; 