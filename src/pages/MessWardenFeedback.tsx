import React, { useState } from 'react';

interface Feedback {
  id: string;
  date: string;
  studentId: string;
  description: string;
  mess: string;
  status: 'pending' | 'resolved';
  category: 'food' | 'cleanliness' | 'maintenance' | 'others';
}

const MessWardenFeedback: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'food' | 'cleanliness' | 'maintenance' | 'others'>('food');
  
  const [feedbacks] = useState<Feedback[]>([
    {
      id: '1',
      date: '2024-03-15',
      studentId: 'CS21B001',
      description: 'Food quality needs improvement',
      mess: 'Mess A',
      status: 'pending',
      category: 'food'
    },
    {
      id: '2',
      date: '2024-03-14',
      studentId: 'CS21B002',
      description: 'Cleanliness issues in dining area',
      mess: 'Mess B',
      status: 'resolved',
      category: 'cleanliness'
    },
    // Add more mock data as needed
  ]);

  const filteredFeedbacks = feedbacks.filter(feedback => feedback.category === activeCategory);

  const handleStatusChange = (feedbackId: string) => {
    // Implementation for status change
    console.log('Status changed for feedback:', feedbackId);
  };

  return (
    <div className="space-y-6">
      {/* Header with navigation path */}
      <div className="bg-white shadow-sm">
        <div className="px-4 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <span>Mess Management</span>
            <span className="mx-2">/</span>
            <span>Notifications</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">View Feedback</h2>

            {/* Category tabs */}
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setActiveCategory('food')}
                className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
                  activeCategory === 'food'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Food</span>
              </button>
              <button
                onClick={() => setActiveCategory('cleanliness')}
                className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
                  activeCategory === 'cleanliness'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cleanliness</span>
              </button>
              <button
                onClick={() => setActiveCategory('maintenance')}
                className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
                  activeCategory === 'maintenance'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Maintenance</span>
              </button>
              <button
                onClick={() => setActiveCategory('others')}
                className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
                  activeCategory === 'others'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Others</span>
              </button>
            </div>

            {/* Feedback table */}
            <div className="mt-4">
              <div className="flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Student ID</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Mess</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {filteredFeedbacks.map((feedback) => (
                            <tr key={feedback.id}>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{feedback.date}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{feedback.studentId}</td>
                              <td className="px-3 py-4 text-sm text-gray-500">{feedback.description}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{feedback.mess}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm">
                                <span
                                  className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                                    feedback.status === 'resolved'
                                      ? 'bg-green-100 text-green-800'
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}
                                >
                                  {feedback.status}
                                </span>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <button
                                  onClick={() => handleStatusChange(feedback.id)}
                                  className="text-blue-600 hover:text-blue-900"
                                >
                                  {feedback.status === 'pending' ? 'Mark as Resolved' : 'Mark as Pending'}
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessWardenFeedback; 