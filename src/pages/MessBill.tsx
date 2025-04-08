import React from 'react';
import MessBillNavbar from '../components/MessBillNavbar';

const MessBill: React.FC = () => {
  // Mock data for demonstration
  const bills = [
    {
      id: 1,
      month: 'January',
      year: 2023,
      amount: 3500,
      dueDate: '2023-01-15',
      status: 'Paid',
      paidOn: '2023-01-12'
    },
    {
      id: 2,
      month: 'February',
      year: 2023,
      amount: 3500,
      dueDate: '2023-02-15',
      status: 'Pending',
      paidOn: null
    }
  ];

  const currentBill = bills.find(bill => bill.status === 'Pending');
  
  // Function to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <MessBillNavbar />
      
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-xl font-semibold text-gray-800 mb-6">Your Mess Bills</h1>
            
            {/* Payment Summary */}
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h2 className="text-lg font-medium text-blue-800 mb-3">Payment Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Total Bills</p>
                  <p className="text-lg font-bold">₹{bills.reduce((total, bill) => total + bill.amount, 0)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Paid Amount</p>
                  <p className="text-lg font-bold">₹{bills.filter(bill => bill.status === 'Paid').reduce((total, bill) => total + bill.amount, 0)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pending Amount</p>
                  <p className="text-lg font-bold">₹{bills.filter(bill => bill.status === 'Pending').reduce((total, bill) => total + bill.amount, 0)}</p>
                </div>
              </div>
            </div>
            
            {/* Current Bill Action */}
            {currentBill && (
              <div className="border rounded-lg p-6 mb-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Current Bill: {currentBill.month} {currentBill.year}</h3>
                    <p className="text-gray-600 mt-1">Due Date: {formatDate(currentBill.dueDate)}</p>
                    <p className="text-gray-600">Amount: ₹{currentBill.amount}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center">
                    <a href="/mess/registration" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            )}
            
            {/* Payment History Table */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Payment History</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill Period</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bills.map(bill => (
                      <tr key={bill.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {bill.month} {bill.year}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          ₹{bill.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {formatDate(bill.dueDate)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span 
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              bill.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {bill.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {bill.paidOn ? formatDate(bill.paidOn) : '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessBill; 