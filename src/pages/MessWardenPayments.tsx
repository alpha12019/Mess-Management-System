import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface Payment {
  paymentDate: string;
  amount: number;
  month: string;
  year: string;
}

interface BillRecord {
  month: string;
  monthlyBaseAmount: number;
  rebateCount: number;
  rebateAmount: number;
  monthlyBill: number;
}

const initialBillRecords: BillRecord[] = [
  {
    month: 'January 2024',
    monthlyBaseAmount: 4500,
    rebateCount: 2,
    rebateAmount: 300,
    monthlyBill: 4200
  },
  {
    month: 'February 2024',
    monthlyBaseAmount: 4500,
    rebateCount: 0,
    rebateAmount: 0,
    monthlyBill: 4500
  }
];

const initialPayments: Payment[] = [
  {
    paymentDate: '2024-03-01',
    amount: 4500,
    month: 'February',
    year: '2024'
  },
  {
    paymentDate: '2024-02-01',
    amount: 4200,
    month: 'January',
    year: '2024'
  }
];

const MessWardenPayments: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'bill' | 'history'>('bill');
  const [totalRemainingBalance, setTotalRemainingBalance] = useState(0);
  const [currentMessStatus, setCurrentMessStatus] = useState('Active');
  const [payments, setPayments] = useState<Payment[]>(initialPayments);

  // Calculate total payments
  const totalPayments = payments.reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('bill')}
              className={`${
                activeTab === 'bill'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              View Bill
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`${
                activeTab === 'history'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Payment History
            </button>
          </nav>
        </div>

        {activeTab === 'bill' && (
          <>
            <h1 className="text-2xl font-semibold text-center text-gray-900 mb-8">
              View Bill
            </h1>

            {/* Bill Table */}
            <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Month
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Monthly Base Amount (₹)
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rebate Count
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rebate Amount (₹)
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Your Monthly Bill (₹)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {initialBillRecords.map((record) => (
                    <tr key={record.month}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {record.month}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {record.monthlyBaseAmount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {record.rebateCount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {record.rebateAmount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {record.monthlyBill}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-500">Total Remaining Balance:</span>
                <span className="text-sm text-gray-900">₹{totalRemainingBalance}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-500">Current Mess Status:</span>
                <span className="text-sm text-gray-900">{currentMessStatus}</span>
              </div>
            </div>

            {/* Download Button */}
            <div className="mt-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Download
              </button>
            </div>
          </>
        )}

        {activeTab === 'history' && (
          <>
            <h1 className="text-2xl font-semibold text-center text-gray-900 mb-8">
              Payment History
            </h1>

            {/* Payment History Table */}
            <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount (₹)
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Month
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Year
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {payments.map((payment, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {payment.paymentDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {payment.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {payment.month}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {payment.year}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total Payments */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-500">Total Payments:</span>
              <span className="text-sm text-gray-900">₹{totalPayments}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MessWardenPayments; 