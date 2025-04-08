import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MessSpecialFoodRequest: React.FC = () => {
  // State for form fields
  const [selectedMess, setSelectedMess] = useState<string>('');
  const [requestDate, setRequestDate] = useState<string>('');
  const [mealType, setMealType] = useState<string>('Lunch');
  const [foodType, setFoodType] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [additionalInfo, setAdditionalInfo] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const location = useLocation();
  const isRebateTab = location.pathname.includes('/rebate');
  const isSpecialFoodTab = location.pathname.includes('/special-food');
  const isApplyTab = location.pathname === '/mess/special-food';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isStatusTab = location.pathname === '/mess/special-food/status';

  // Meal types
  const mealTypes = ['Breakfast', 'Lunch', 'Dinner'];

  // Food types for special requests
  const foodTypes = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'Nut-Free',
    'Low Sodium',
    'Diabetic-Friendly',
    'Other'
  ];
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!selectedMess) {
      setSubmitError('Please select a mess');
      return;
    }
    
    if (!requestDate) {
      setSubmitError('Please select a date for the request');
      return;
    }
    
    if (!foodType) {
      setSubmitError('Please select a food type');
      return;
    }
    
    if (!reason.trim()) {
      setSubmitError('Please provide a reason for your special food request');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    // Simulate API call
    setTimeout(() => {
      // Mock successful submission
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setSelectedMess('');
        setRequestDate('');
        setMealType('Lunch');
        setFoodType('');
        setReason('');
        setAdditionalInfo('');
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Top-level Navigation between Rebate and Special Food */}
      <div className="mb-6">
        <div className="flex border-b">
          <NavLink
            to="/mess/rebate"
            className={({ isActive }) => 
              `px-4 py-3 text-center border-b-2 ${
                isRebateTab 
                  ? 'border-blue-500 text-blue-600 font-medium' 
                  : 'border-transparent text-gray-600 hover:text-blue-500'
              }`
            }
          >
            Rebate Requests
          </NavLink>
          
          <NavLink
            to="/mess/special-food"
            className={({ isActive }) => 
              `px-4 py-3 text-center border-b-2 ${
                isSpecialFoodTab 
                  ? 'border-blue-500 text-blue-600 font-medium' 
                  : 'border-transparent text-gray-600 hover:text-blue-500'
              }`
            }
          >
            Special Food Requests
          </NavLink>
        </div>
      </div>
      
      {/* Secondary Navigation for Special Food */}
      <div className="mb-6">
        <div className="flex border-b">
          <NavLink
            to="/mess/special-food"
            end
            className={({ isActive }) => 
              `px-4 py-3 text-center border-b-2 ${
                (isActive || isApplyTab) 
                  ? 'border-blue-500 text-blue-600 font-medium' 
                  : 'border-transparent text-gray-600 hover:text-blue-500'
              }`
            }
          >
            Apply for Special Food
          </NavLink>
          
          <NavLink
            to="/mess/special-food/status"
            className={({ isActive }) => 
              `px-4 py-3 text-center border-b-2 ${
                isActive 
                  ? 'border-blue-500 text-blue-600 font-medium' 
                  : 'border-transparent text-gray-600 hover:text-blue-500'
              }`
            }
          >
            Request Status
          </NavLink>
        </div>
      </div>
      
      {/* Page Title */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Special Food Request</h1>
        </div>
      </div>
      
      {/* Main Content - Request Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">Special Food Request Form</h2>
        
        {submitSuccess && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">
                  Your special food request has been submitted successfully. The mess administration will review your request.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {submitError && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  {submitError}
                </p>
              </div>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          {/* Mess Selection */}
          <div className="mb-6">
            <label htmlFor="mess" className="block text-sm font-medium text-gray-700 mb-2">
              Select Mess <span className="text-red-500">*</span>
            </label>
            <select
              id="mess"
              value={selectedMess}
              onChange={(e) => setSelectedMess(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Choose Mess</option>
              <option value="Mess 1">Mess 1</option>
              <option value="Mess 2">Mess 2</option>
            </select>
          </div>
          
          {/* Request Date */}
          <div className="mb-6">
            <label htmlFor="requestDate" className="block text-sm font-medium text-gray-700 mb-2">
              Request Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="requestDate"
              value={requestDate}
              onChange={(e) => setRequestDate(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              Please submit your request at least 24 hours in advance.
            </p>
          </div>
          
          {/* Meal Type */}
          <div className="mb-6">
            <label htmlFor="mealType" className="block text-sm font-medium text-gray-700 mb-2">
              Meal Type <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              {mealTypes.map((type) => (
                <div key={type} className="flex items-center">
                  <input
                    id={`meal-${type}`}
                    name="mealType"
                    type="radio"
                    value={type}
                    checked={mealType === type}
                    onChange={() => setMealType(type)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor={`meal-${type}`} className="ml-2 block text-sm text-gray-700">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Food Type */}
          <div className="mb-6">
            <label htmlFor="foodType" className="block text-sm font-medium text-gray-700 mb-2">
              Food Type <span className="text-red-500">*</span>
            </label>
            <select
              id="foodType"
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Food Type</option>
              {foodTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          
          {/* Reason */}
          <div className="mb-6">
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
              Reason <span className="text-red-500">*</span>
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Explain the reason for your special food request (e.g., medical condition, religious reasons, etc.)"
              required
            ></textarea>
          </div>
          
          {/* Additional Information */}
          <div className="mb-6">
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              rows={3}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Any additional information about your request"
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isSubmitting
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessSpecialFoodRequest; 