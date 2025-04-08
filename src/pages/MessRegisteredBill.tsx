import React from 'react';
import { Link } from 'react-router-dom';

const MessRegisteredBill: React.FC = () => {
  // Mock data
  const currentMonthBill = {
    month: 'November',
    year: 2023,
    status: 'Unpaid',
    dueDate: '2023-11-25',
    billDetails: [
      { item: 'Basic Mess Fee', amount: 3500 },
      { item: 'Extra Items', amount: 750 },
      { item: 'Fine', amount: 0 },
    ],
    totalAmount: 4250,
    paidAmount: 0,
    balance: 4250
  };
  
  const remainingDays = () => {
    const due = new Date(currentMonthBill.dueDate);
    const today = new Date();
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 p-4 text-white">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Mess Bill - {currentMonthBill.month} {currentMonthBill.year}</h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              currentMonthBill.status === 'Paid' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {currentMonthBill.status}
            </span>
          </div>
        </div>
        
        {/* Bill Info */}
        <div className="p-6">
          {/* Due Date Alert */}
          {currentMonthBill.status === 'Unpaid' && (
            <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Payment due in <span className="font-semibold">{remainingDays()} days</span> (Due date: {new Date(currentMonthBill.dueDate).toLocaleDateString()})
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Bill Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Total Amount</p>
              <p className="text-2xl font-bold text-blue-600">₹{currentMonthBill.totalAmount.toLocaleString()}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Paid Amount</p>
              <p className="text-2xl font-bold text-green-600">₹{currentMonthBill.paidAmount.toLocaleString()}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Balance Due</p>
              <p className="text-2xl font-bold text-red-600">₹{currentMonthBill.balance.toLocaleString()}</p>
            </div>
          </div>
          
          {/* Bill Details */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Bill Details</h2>
            
            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Item
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentMonthBill.billDetails.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {item.item}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right">
                        ₹{item.amount.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Total
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                      ₹{currentMonthBill.totalAmount.toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
            <Link 
              to="/mess/recharge"
              className="w-full md:w-auto px-6 py-3 bg-blue-600 rounded-lg text-white font-medium text-center hover:bg-blue-700 transition duration-150 ease-in-out"
            >
              Pay Now
            </Link>
            
            <div className="flex space-x-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition duration-150 ease-in-out">
                Download PDF
              </button>
              <button className="flex-1 md:flex-none px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition duration-150 ease-in-out">
                Print Bill
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Payment History Table */}
      <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Recent Payments</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Oct 15, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Link to="/mess/receipt/TXN123456789" className="text-blue-600 hover:text-blue-800">
                    TXN123456789
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  UPI
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                  ₹3,750
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Sep 10, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Link to="/mess/receipt/TXN987654321" className="text-blue-600 hover:text-blue-800">
                    TXN987654321
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Net Banking
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                  ₹4,000
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Aug 5, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Link to="/mess/receipt/TXN567891234" className="text-blue-600 hover:text-blue-800">
                    TXN567891234
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Cash
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                  ₹3,500
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 border-t border-gray-200 text-right">
          <Link to="/mess/payment-history" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View Full Payment History →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MessRegisteredBill; 