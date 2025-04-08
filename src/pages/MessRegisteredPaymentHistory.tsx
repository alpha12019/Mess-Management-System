import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MessRegisteredPaymentHistory: React.FC = () => {
  // Mock data for payment history
  const paymentHistory = [
    { id: 'TXN123456789', date: '2023-10-15', method: 'UPI', amount: 3750, month: 'October', year: 2023, status: 'Success' },
    { id: 'TXN987654321', date: '2023-09-10', method: 'Net Banking', amount: 4000, month: 'September', year: 2023, status: 'Success' },
    { id: 'TXN567891234', date: '2023-08-05', method: 'Cash', amount: 3500, month: 'August', year: 2023, status: 'Success' },
    { id: 'TXN456123789', date: '2023-07-12', method: 'UPI', amount: 3800, month: 'July', year: 2023, status: 'Success' },
    { id: 'TXN789123456', date: '2023-06-08', method: 'Net Banking', amount: 3600, month: 'June', year: 2023, status: 'Success' },
    { id: 'TXN345678912', date: '2023-05-05', method: 'Cash', amount: 3500, month: 'May', year: 2023, status: 'Success' },
  ];

  // State for filters
  const [yearFilter, setYearFilter] = useState<number | ''>('');
  const [monthFilter, setMonthFilter] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Calculate total payments
  const totalPayments = paymentHistory.reduce((sum, payment) => sum + payment.amount, 0);

  // Filter the payment history based on filters
  const filteredPayments = paymentHistory.filter(payment => {
    const matchesYear = yearFilter === '' || payment.year === yearFilter;
    const matchesMonth = monthFilter === '' || payment.month.toLowerCase().includes(monthFilter.toLowerCase());
    const matchesSearch = searchQuery === '' || 
                         payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payment.method.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesYear && matchesMonth && matchesSearch;
  });

  // Get available years for filter
  const years = Array.from(new Set(paymentHistory.map(payment => payment.year)));
  
  // Get available months for filter
  const months = Array.from(new Set(paymentHistory.map(payment => payment.month)));

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Payment History</h1>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                id="search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by Transaction ID or Payment Method"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
              Year
            </label>
            <select
              id="year"
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value === '' ? '' : Number(e.target.value))}
            >
              <option value="">All Years</option>
              {years.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="month" className="block text-sm font-medium text-gray-700 mb-1">
              Month
            </label>
            <select
              id="month"
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={monthFilter}
              onChange={(e) => setMonthFilter(e.target.value)}
            >
              <option value="">All Months</option>
              {months.map(month => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Summary */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <span className="text-gray-600">Total Records: </span>
            <span className="font-semibold">{filteredPayments.length}</span>
          </div>
          <div>
            <span className="text-gray-600">Total Payments: </span>
            <span className="font-semibold text-blue-600">₹{totalPayments.toLocaleString()}</span>
          </div>
        </div>
        
        {/* Payment History Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Month/Year
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPayments.length > 0 ? (
                filteredPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 hover:text-blue-800">
                      <Link to={`/mess/receipt/${payment.id}`}>
                        {payment.id}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(payment.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.month} {payment.year}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.method}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        payment.status === 'Success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      ₹{payment.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link 
                        to={`/mess/receipt/${payment.id}`}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                        title="View Receipt"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </Link>
                      <button 
                        className="text-blue-600 hover:text-blue-900"
                        title="Download Receipt"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
                    No payment records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-center space-x-1 mt-6">
          <button className="px-2 py-1 bg-white border rounded text-gray-500 hover:text-blue-600">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
          <button className="px-3 py-1 bg-white border rounded text-gray-700 hover:bg-blue-50">2</button>
          <button className="px-3 py-1 bg-white border rounded text-gray-700 hover:bg-blue-50">3</button>
          <button className="px-3 py-1 bg-white border rounded text-gray-700 hover:bg-blue-50">...</button>
          <button className="px-3 py-1 bg-white border rounded text-gray-700 hover:bg-blue-50">10</button>
          <button className="px-2 py-1 bg-white border rounded text-gray-500 hover:text-blue-600">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Export Button */}
        <div className="mt-4 flex justify-end">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Export to CSV
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessRegisteredPaymentHistory; 