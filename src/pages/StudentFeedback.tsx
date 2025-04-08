import React, { useState } from 'react';

type MessType = 'Mess 1' | 'Mess 2';
type FeedbackType = 'Cleanliness' | 'Food Quality' | 'Service' | 'Other';

const StudentFeedback: React.FC = () => {
  const [selectedMess, setSelectedMess] = useState<MessType>('Mess 1');
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('Cleanliness');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement feedback submission logic
    console.log({
      mess: selectedMess,
      type: feedbackType,
      description
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-8">
        Submit Feedback
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Mess Selection */}
        <div>
          <label htmlFor="mess" className="block text-sm font-medium text-gray-700 mb-1">
            Select Mess
          </label>
          <select
            id="mess"
            value={selectedMess}
            onChange={(e) => setSelectedMess(e.target.value as MessType)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Mess 1">Mess 1</option>
            <option value="Mess 2">Mess 2</option>
          </select>
        </div>

        {/* Feedback Type */}
        <div>
          <label htmlFor="feedbackType" className="block text-sm font-medium text-gray-700 mb-1">
            Feedback Type
          </label>
          <select
            id="feedbackType"
            value={feedbackType}
            onChange={(e) => setFeedbackType(e.target.value as FeedbackType)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Cleanliness">Cleanliness</option>
            <option value="Food Quality">Food Quality</option>
            <option value="Service">Service</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your description..."
            rows={4}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default StudentFeedback; 