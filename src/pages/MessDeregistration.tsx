import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MessApplicationsNav from '../components/MessApplicationsNav';

const MessDeregistration: React.FC = () => {
  // Form state
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [batch, setBatch] = useState('');
  const [semester, setSemester] = useState('');
  const [deregistrationRemark, setDeregistrationRemark] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const location = useLocation();
  const isApplyTab = location.pathname === '/mess/deregistration' || location.pathname === '/mess/deregistration/apply';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isStatusTab = location.pathname === '/mess/deregistration/status';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name || !rollNo || !batch || !semester || !deregistrationRemark) {
      setSubmitError('Please fill in all required fields');
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);
    setSubmitError(null);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setName('');
      setRollNo('');
      setBatch('');
      setSemester('');
      setDeregistrationRemark('');
      
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
        applyPath="/mess/deregistration"
        statusPath="/mess/deregistration/status"
        applyLabel="Apply for Deregistration"
        statusLabel="Request Status"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Deregistration Form</h2>

            {/* Success Message */}
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-700">Your deregistration request has been submitted successfully! </p>
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-700">{submitError}</p>
              </div>
            )}

            {/* Deregistration Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 required">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your Name"
                  required
                />
              </div>

              {/* Roll Number */}
              <div>
                <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700 required">
                  Roll No.
                </label>
                <input
                  type="text"
                  id="rollNo"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your Roll Number"
                  required
                />
              </div>

              {/* Batch */}
              <div>
                <label htmlFor="batch" className="block text-sm font-medium text-gray-700 required">
                  Batch
                </label>
                <input
                  type="text"
                  id="batch"
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your batch"
                  required
                />
              </div>

              {/* Semester */}
              <div>
                <label htmlFor="semester" className="block text-sm font-medium text-gray-700 required">
                  Semester
                </label>
                <input
                  type="text"
                  id="semester"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your semester"
                  required
                />
              </div>

              {/* Deregistration Remark */}
              <div>
                <label htmlFor="deregistrationRemark" className="block text-sm font-medium text-gray-700 required">
                  Deregistration Remark
                </label>
                <textarea
                  id="deregistrationRemark"
                  rows={3}
                  value={deregistrationRemark}
                  onChange={(e) => setDeregistrationRemark(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter a remark for deregistration"
                  required
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

export default MessDeregistration; 