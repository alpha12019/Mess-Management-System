import React from 'react';
import MessBillNavbar from '../components/MessBillNavbar';

const MessPaymentHistory: React.FC = () => {
  // Empty payment history for unregistered users
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const paymentHistory: any[] = [];
  
  return (
    <div>
      <MessBillNavbar />
      
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">Payment History</h1>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
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
                {/* No payment history for unregistered users */}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="text-center">
              <p className="text-xl font-bold">Total Payments: ₹0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessPaymentHistory; 