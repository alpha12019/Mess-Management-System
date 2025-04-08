import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface BillData {
  month: string;
  monthlyBaseAmount: number;
  rebateCount: number;
  rebateAmount: number;
  monthlyBill: number;
}

interface PaymentHistory {
  paymentDate: string;
  amount: number;
  month: string;
  year: string;
}

const StudentBill: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'view-bill' | 'payment-history'>('payment-history');

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {/* Tabs */}
      <div className="border-b mb-6">
        <div className="flex space-x-8">
          <button
            className={`pb-4 ${
              activeTab === 'view-bill'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('view-bill')}
          >
            View Bill
          </button>
          <button
            className={`pb-4 ${
              activeTab === 'payment-history'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('payment-history')}
          >
            Payment History
          </button>
        </div>
      </div>

      {activeTab === 'view-bill' && (
        <div>
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
            View Bill
          </h2>

          {/* Bill Table */}
          <div className="overflow-x-auto">
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
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                    No bill data available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Summary Information */}
          <div className="mt-6 space-y-2">
            <p className="text-sm text-gray-600">Total Remaining Balance: ₹0</p>
            <p className="text-sm text-gray-600">Current Mess Status: Deregistered</p>
          </div>

          {/* Download Button */}
          <button
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Download
          </button>
        </div>
      )}

      {activeTab === 'payment-history' && (
        <div>
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
            Payment History
          </h2>
          
          {/* Payment History Table */}
          <div className="overflow-x-auto">
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
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                    No payment history available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Total Payments */}
          <div className="mt-6 text-right text-sm text-gray-600">
            Total Payments: ₹0
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentBill; 