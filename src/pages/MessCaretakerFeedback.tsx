import React, { useState } from 'react';

interface Feedback {
  date: string;
  studentId: string;
  description: string;
  mess: string;
  status: 'pending' | 'resolved';
  category: 'food' | 'cleanliness' | 'maintenance' | 'others';
}

interface FeedbackFilter {
  type: 'Food' | 'Cleanliness' | 'Maintenance' | 'Others';
}

const initialFeedbacks: Feedback[] = [
  {
    date: '2024-03-15',
    studentId: 'CS21B001',
    description: 'Food quality needs improvement',
    mess: 'Mess 1',
    status: 'pending',
    category: 'food'
  },
  {
    date: '2024-03-14',
    studentId: 'CS21B002',
    description: 'Cleanliness issue in dining area',
    mess: 'Mess 1',
    status: 'pending',
    category: 'cleanliness'
  }
];

const MessCaretakerFeedback: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FeedbackFilter['type'][]>(['Food']);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(initialFeedbacks);

  const handleFilterClick = (filter: FeedbackFilter['type']) => {
    if (activeFilter.includes(filter)) {
      setActiveFilter(activeFilter.filter(f => f !== filter));
    } else {
      setActiveFilter([...activeFilter, filter]);
    }
  };

  const getFilterButtonClass = (filter: FeedbackFilter['type']) => {
    const baseClass = "px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
    return activeFilter.includes(filter)
      ? `${baseClass} bg-blue-500 text-white`
      : `${baseClass} bg-white text-gray-700 border border-gray-300 hover:bg-gray-50`;
  };

  const handleStatusChange = (studentId: string) => {
    setFeedbacks(prev =>
      prev.map(feedback =>
        feedback.studentId === studentId
          ? { ...feedback, status: feedback.status === 'pending' ? 'resolved' : 'pending' }
          : feedback
      )
    );
  };

  const filteredFeedbacks = feedbacks.filter(feedback => activeFilter.includes(feedback.category as FeedbackFilter['type']));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-center text-blue-600 mb-6">
        View Feedback
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => handleFilterClick('Food')}
          className={getFilterButtonClass('Food')}
        >
          Food
        </button>
        <button
          onClick={() => handleFilterClick('Cleanliness')}
          className={getFilterButtonClass('Cleanliness')}
        >
          Cleanliness
        </button>
        <button
          onClick={() => handleFilterClick('Maintenance')}
          className={getFilterButtonClass('Maintenance')}
        >
          Maintenance
        </button>
        <button
          onClick={() => handleFilterClick('Others')}
          className={getFilterButtonClass('Others')}
        >
          Others
        </button>
      </div>

      {/* Feedback Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mess
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredFeedbacks.map((feedback) => (
                <tr key={`${feedback.studentId}-${feedback.date}`}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {feedback.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {feedback.studentId}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {feedback.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {feedback.mess}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`inline-flex rounded-full px-2 text-xs font-semibold ${
                      feedback.status === 'resolved'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {feedback.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => handleStatusChange(feedback.studentId)}
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
  );
};

export default MessCaretakerFeedback; 