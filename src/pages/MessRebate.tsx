import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import MessApplicationsNav from '../components/MessApplicationsNav';

const MessRebate: React.FC = () => {
  // State for form fields
  const [selectedMess, setSelectedMess] = useState<string>('');
  const [rebateFrom, setRebateFrom] = useState<string>('');
  const [rebateTo, setRebateTo] = useState<string>('');
  const [purpose, setPurpose] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const location = useLocation();
  const isApplyTab = location.pathname === '/mess/rebate' || location.pathname === '/mess/rebate/apply';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isStatusTab = location.pathname === '/mess/rebate/status';
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!selectedMess) {
      setSubmitError('Please select a mess');
      return;
    }
    
    if (!rebateFrom || !rebateTo) {
      setSubmitError('Please select both start and end dates');
      return;
    }
    
    if (!purpose) {
      setSubmitError('Please provide a purpose for the rebate');
      return;
    }
    
    // Simulate form submission
    setIsSubmitting(true);
    setSubmitError(null);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setSelectedMess('');
      setRebateFrom('');
      setRebateTo('');
      setPurpose('');
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Secondary Navigation */}
      <MessApplicationsNav 
        applyPath="/mess/rebate"
        statusPath="/mess/rebate/status"
        applyLabel="Apply for Rebate"
        statusLabel="Request Status"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply for Mess Rebate</h2>
            
            {/* Success Message */}
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-700">Your rebate request has been submitted successfully!</p>
              </div>
            )}
            
            {/* Error Message */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-700">{submitError}</p>
              </div>
            )}
            
            {/* Rebate Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mess Selection */}
              <div>
                <label htmlFor="mess" className="block text-sm font-medium text-gray-700">
                  Select Mess
                </label>
                <select
                  id="mess"
                  value={selectedMess}
                  onChange={(e) => setSelectedMess(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Select a mess</option>
                  <option value="mess1">Mess 1</option>
                  <option value="mess2">Mess 2</option>
                  <option value="mess3">Mess 3</option>
                </select>
              </div>
              
              {/* Date Range */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="rebateFrom" className="block text-sm font-medium text-gray-700">
                    From Date
                  </label>
                  <input
                    type="date"
                    id="rebateFrom"
                    value={rebateFrom}
                    onChange={(e) => setRebateFrom(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="rebateTo" className="block text-sm font-medium text-gray-700">
                    To Date
                  </label>
                  <input
                    type="date"
                    id="rebateTo"
                    value={rebateTo}
                    onChange={(e) => setRebateTo(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              
              {/* Purpose */}
              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
                  Purpose
                </label>
                <textarea
                  id="purpose"
                  rows={3}
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Please provide a reason for the rebate request"
                />
              </div>
              
              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessRebate; 