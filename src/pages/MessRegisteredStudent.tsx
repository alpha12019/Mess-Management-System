import React from 'react';
import { useLocation } from 'react-router-dom';
import MessApplicationsNav from '../components/MessApplicationsNav';

const MessRegisteredStudent: React.FC = () => {
  const location = useLocation();
  const isApplyTab = location.pathname === '/mess/registered-student' || location.pathname === '/mess/registered-student/apply';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isStatusTab = location.pathname === '/mess/registered-student/status';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Secondary Navigation */}
      <MessApplicationsNav 
        applyPath="/mess/registered-student/apply"
        statusPath="/mess/registered-student/status"
        applyLabel="Student Registration"
        statusLabel="Registration Status"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Registration</h2>
            
            {/* Registration Form */}
            <form className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700">
                      Roll Number
                    </label>
                    <input
                      type="text"
                      name="rollNumber"
                      id="rollNumber"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Mess Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Mess Information</h3>
                
                <div>
                  <label htmlFor="mess" className="block text-sm font-medium text-gray-700">
                    Select Mess
                  </label>
                  <select
                    id="mess"
                    name="mess"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">Select a mess</option>
                    <option value="mess1">Mess 1</option>
                    <option value="mess2">Mess 2</option>
                    <option value="mess3">Mess 3</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mealPlan" className="block text-sm font-medium text-gray-700">
                    Meal Plan
                  </label>
                  <select
                    id="mealPlan"
                    name="mealPlan"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">Select a meal plan</option>
                    <option value="full">Full Plan</option>
                    <option value="partial">Partial Plan</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessRegisteredStudent; 