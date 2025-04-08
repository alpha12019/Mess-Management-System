import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MessNavbar from '../components/MessNavbar';

interface MessRegistrationProps {
  onRegister?: () => void;
}

const MessRegistration: React.FC<MessRegistrationProps> = ({ onRegister }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    email: '',
    phone: '',
    messPreference: '',
    mealPreference: '',
    startDate: '',
    duration: '',
    agreement: false
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checkbox.checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Call the onRegister prop if provided
      if (onRegister) {
        onRegister();
      }
      
      // Navigate to dashboard after 2 seconds
      setTimeout(() => {
        navigate('/mess/dashboard');
      }, 2000);
    }, 1500);
  };

  if (submitted) {
    return (
      <div>
        <MessNavbar />
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-full bg-green-100 p-2">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            </div>
            <h2 className="mt-4 text-lg font-medium text-gray-900">Registration Successful!</h2>
            <p className="mt-2 text-sm text-gray-500">
              Your mess registration has been submitted successfully. You will be redirected to your dashboard shortly.
            </p>
            <div className="mt-6">
              <button
                onClick={() => navigate('/mess/dashboard')}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <MessNavbar />
      <div className="max-w-3xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-xl font-bold text-blue-600 mb-6">Mess Registration</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Personal Information */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Roll Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="rollNumber"
                      name="rollNumber"
                      value={formData.rollNumber}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Mess Preferences */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Mess Preferences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="messPreference" className="block text-sm font-medium text-gray-700 mb-1">
                      Mess Preference <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="messPreference"
                      name="messPreference"
                      value={formData.messPreference}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Mess</option>
                      <option value="Mess 1">Mess 1</option>
                      <option value="Mess 2">Mess 2</option>
                      <option value="Mess 3">Mess 3</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="mealPreference" className="block text-sm font-medium text-gray-700 mb-1">
                      Meal Preference <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="mealPreference"
                      name="mealPreference"
                      value={formData.mealPreference}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Meal Plan</option>
                      <option value="All Meals">All Meals (Breakfast, Lunch, Dinner)</option>
                      <option value="Lunch and Dinner">Lunch and Dinner Only</option>
                      <option value="Dinner Only">Dinner Only</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Start Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                      Duration <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Duration</option>
                      <option value="1 Month">1 Month</option>
                      <option value="3 Months">3 Months</option>
                      <option value="6 Months">6 Months</option>
                      <option value="1 Year">1 Year</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Terms and Conditions */}
              <div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agreement"
                      name="agreement"
                      type="checkbox"
                      checked={formData.agreement}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="agreement" className="font-medium text-gray-700">
                      I agree to the terms and conditions <span className="text-red-500">*</span>
                    </label>
                    <p className="text-xs text-gray-500 mt-1">
                      By submitting this form, I agree to abide by the mess rules and regulations. I understand that mess fees are non-refundable.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3 px-4 text-white font-medium rounded-md shadow-sm focus:outline-none ${
                    submitting
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  }`}
                >
                  {submitting ? (
                    <span className="flex justify-center items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Submit Registration'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessRegistration; 