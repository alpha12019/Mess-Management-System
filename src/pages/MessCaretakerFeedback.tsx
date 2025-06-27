import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* Animated floating circle */}
      <motion.div
        initial={{ y: -100, x: 100, opacity: 0.5 }}
        animate={{ y: [0, 30, 0], x: [0, -30, 0], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-48 h-48 bg-pink-200 rounded-full blur-2xl z-0"
        style={{ pointerEvents: 'none' }}
      />
      <h1 className="text-2xl font-semibold text-center text-blue-700 mb-6 drop-shadow-lg">
        View Feedback
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        {['Food', 'Cleanliness', 'Maintenance', 'Others'].map((filter) => (
          <motion.button
            key={filter}
            onClick={() => handleFilterClick(filter as FeedbackFilter['type'])}
            className={
              getFilterButtonClass(filter as FeedbackFilter['type']) +
              ' shadow-md transition-colors duration-200 border-2 border-transparent hover:border-pink-400'
            }
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
              background:
                activeFilter.includes(filter as FeedbackFilter['type'])
                  ? 'linear-gradient(90deg, #6366f1 0%, #ec4899 100%)'
                  : undefined,
              color: activeFilter.includes(filter as FeedbackFilter['type']) ? '#fff' : undefined,
            }}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      {/* Feedback Table */}
      <div className="bg-white/80 rounded-lg shadow-2xl overflow-hidden border border-purple-100">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-pink-200">
            <thead className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-purple-700 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-purple-700 uppercase tracking-wider">
                  Student ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-purple-700 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-purple-700 uppercase tracking-wider">
                  Mess
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-purple-700 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-purple-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white/70 divide-y divide-pink-100">
              <AnimatePresence>
                {filteredFeedbacks.length === 0 && (
                  <motion.tr
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <td colSpan={6} className="py-10 text-center text-pink-400">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg width="60" height="60" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto mb-2 text-pink-300 animate-bounce">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        No feedbacks found for selected filter.
                      </motion.div>
                    </td>
                  </motion.tr>
                )}
                {filteredFeedbacks.map((feedback) => (
                  <motion.tr
                    key={`${feedback.studentId}-${feedback.date}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.01, backgroundColor: '#fdf2f8' }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-900 font-semibold">
                      {feedback.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-900 font-semibold">
                      {feedback.studentId}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {feedback.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-pink-700 font-semibold">
                      {feedback.mess}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <motion.span
                        key={feedback.status}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className={`inline-flex rounded-full px-2 text-xs font-semibold shadow-md ${
                          feedback.status === 'resolved'
                            ? 'bg-gradient-to-r from-green-200 via-green-300 to-green-400 text-green-900'
                            : 'bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-yellow-900'
                        }`}
                      >
                        {feedback.status}
                      </motion.span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.1, backgroundColor: '#f472b6', color: '#fff' }}
                        onClick={() => handleStatusChange(feedback.studentId)}
                        className="text-pink-600 hover:text-pink-800 font-bold transition-colors duration-200"
                      >
                        {feedback.status === 'pending' ? 'Mark as Resolved' : 'Mark as Pending'}
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MessCaretakerFeedback; 