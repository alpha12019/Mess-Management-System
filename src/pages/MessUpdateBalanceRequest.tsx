import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MessUpdateBalanceRequest: React.FC = () => {
  // Form state
  const [selectedMess, setSelectedMess] = useState<string>('');
  const [transactionNo, setTransactionNo] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [paymentDate, setPaymentDate] = useState<string>('');
  const [rollNo, setRollNo] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const location = useLocation();
  const isUpdateBalanceTab = location.pathname === '/mess/update-payment' || location.pathname === '/mess/update-balance';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isStatusTab = location.pathname === '/mess/update-payment/status' || location.pathname === '/mess/update-balance/status';

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!selectedMess) {
      setSubmitError('Please select a mess');
      return;
    }
    
    if (!transactionNo.trim()) {
      setSubmitError('Please enter transaction number');
      return;
    }
    
    if (!amount.trim()) {
      setSubmitError('Please enter amount');
      return;
    }
    
    if (!paymentDate) {
      setSubmitError('Please select payment date');
      return;
    }
    
    if (!rollNo.trim()) {
      setSubmitError('Please enter your roll number');
      return;
    }
    
    if (!image) {
      setSubmitError('Please upload payment proof image');
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
        setTransactionNo('');
        setAmount('');
        setPaymentDate('');
        setRollNo('');
        setImage(null);
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Secondary Navigation */}
      <div className="mb-6">
        <div className="flex border-b">
          <NavLink
            to="/mess/update-balance"
            end
            className={({ isActive }) => 
              `px-4 py-3 text-center border-b-2 ${
                (isActive || isUpdateBalanceTab) 
                  ? 'border-blue-500 text-blue-600 font-medium' 
                  : 'border-transparent text-gray-600 hover:text-blue-500'
              }`
            }
          >
            Update Balance Request
          </NavLink>
          
          <NavLink
            to="/mess/update-balance/status"
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
          <h1 className="text-2xl font-bold text-blue-600">Update Balance Request</h1>
        </div>
      </div>
      
      {/* Main Content - Request Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">Balance Update Form</h2>
        
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
                  Your balance update request has been submitted successfully. The mess administration will review your request.
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
          
          {/* Transaction Number */}
          <div className="mb-6">
            <label htmlFor="transactionNo" className="block text-sm font-medium text-gray-700 mb-2">
              Transaction No. <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="transactionNo"
              value={transactionNo}
              onChange={(e) => setTransactionNo(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Transaction No."
              required
            />
          </div>
          
          {/* Amount and Image Upload in 2 columns for larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                Amount <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Balance Amount"
                required
              />
            </div>
            
            <div>
              <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700 mb-2">
                Image <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                id="imageUpload"
                onChange={handleFileChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                accept="image/*"
                required
              />
            </div>
          </div>
          
          {/* Payment Date */}
          <div className="mb-6">
            <label htmlFor="paymentDate" className="block text-sm font-medium text-gray-700 mb-2">
              Payment Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="paymentDate"
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          {/* Roll Number */}
          <div className="mb-6">
            <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700 mb-2">
              Roll No. <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="rollNo"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Roll Number"
              required
            />
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
              {isSubmitting ? 'Updating...' : 'Update'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessUpdateBalanceRequest; 