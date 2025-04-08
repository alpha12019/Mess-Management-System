import React from 'react';
import { Link } from 'react-router-dom';

const MessRegisteredDashboard: React.FC = () => {
  // Mock data for registered student
  const studentInfo = {
    name: 'Ankit Jaiswal',
    rollNumber: '2020BCS-004',
    registeredMess: 'Mess 1',
    registrationDate: '2023-03-15',
    validUntil: '2023-06-15',
    messStatus: 'Active',
    currentBalance: 0,
    mealPlan: 'Regular (Breakfast, Lunch, Dinner)'
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-xl font-bold text-blue-600 mb-6">Your Mess Registration</h1>
        
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{studentInfo.name}</h2>
                  <p className="text-gray-600 text-sm">{studentInfo.rollNumber}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Registered Mess</h3>
                <p className="font-medium">{studentInfo.registeredMess}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Meal Plan</h3>
                <p className="font-medium">{studentInfo.mealPlan}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Registration Date</h3>
                <p className="font-medium">{new Date(studentInfo.registrationDate).toLocaleDateString()}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Valid Until</h3>
                <p className="font-medium">{new Date(studentInfo.validUntil).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 bg-gray-50 p-4 rounded-lg">
            <div className="mb-4">
              <h3 className="text-sm text-gray-500 mb-1">Status</h3>
              <div className="flex items-center">
                <span className="inline-block h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                <span className="font-medium">{studentInfo.messStatus}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm text-gray-500 mb-1">Current Balance</h3>
              <p className="text-xl font-bold">₹{studentInfo.currentBalance}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <Link 
                to="/mess/recharge"
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 text-center"
              >
                Recharge
              </Link>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded text-sm hover:bg-gray-300">
                Change Mess
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <Link to="/mess/payment-history" className="text-blue-600 text-sm hover:underline">View All</Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-600">15 Mar 2023</td>
                <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-600">Mess Registration Fee</td>
                <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-600">₹10,500</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Paid
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Meal Schedule */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-6">Today's Meals</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Breakfast</h3>
                <p className="text-sm text-gray-500">7:30 AM - 9:30 AM</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Poha Jalebi, Namkeen, Chopped Onion, Lemon, Sprouts</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Lunch</h3>
                <p className="text-sm text-gray-500">12:30 PM - 2:30 PM</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Choole-Puri, Arhar Dal, Green-Salad, Plain Rice, Boondi Raita, Chutney</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Dinner</h3>
                <p className="text-sm text-gray-500">7:30 PM - 9:30 PM</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Shimla mirch, Chana Dal, Jeera Rice, Chapati, tamater-chutney</p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link to="/mess/menu" className="text-blue-600 text-sm hover:underline">View Full Menu</Link>
        </div>
      </div>
    </div>
  );
};

export default MessRegisteredDashboard; 