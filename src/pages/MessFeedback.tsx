import React, { useState } from 'react';
import MessFeedbackNavbar from '../components/MessFeedbackNavbar';

const MessFeedback: React.FC = () => {
  // State for form fields
  const [selectedMess, setSelectedMess] = useState<string>('Mess 1');
  const [feedbackType, setFeedbackType] = useState<string>('Cleanliness');
  const [description, setDescription] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Available messes
  const messOptions = ['Mess 1', 'Mess 2'];

  // Feedback types
  const feedbackTypes = [
    'Cleanliness',
    'Food Quality',
    'Staff Behavior',
    'Menu Variety',
    'Service Speed',
    'Other'
  ];

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!description.trim()) {
      setSubmitError('Please provide a description for your feedback');
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
        setSelectedMess('Mess 1');
        setFeedbackType('Cleanliness');
        setDescription('');
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div>
      <MessFeedbackNavbar />
      
      <div className="max-w-3xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">Submit Feedback</h1>
          
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
                    Your feedback has been submitted successfully. Thank you!
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
            {/* Select Mess */}
            <div className="mb-6">
              <label htmlFor="mess" className="block text-sm font-medium text-gray-700 mb-2">
                Select Mess
              </label>
              <div className="relative">
                <select
                  id="mess"
                  value={selectedMess}
                  onChange={(e) => setSelectedMess(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                >
                  {messOptions.map((mess) => (
                    <option key={mess} value={mess}>
                      {mess}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Feedback Type */}
            <div className="mb-6">
              <label htmlFor="feedbackType" className="block text-sm font-medium text-gray-700 mb-2">
                Feedback Type
              </label>
              <div className="relative">
                <select
                  id="feedbackType"
                  value={feedbackType}
                  onChange={(e) => setFeedbackType(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                >
                  {feedbackTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter your description"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                  isSubmitting
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessFeedback; 