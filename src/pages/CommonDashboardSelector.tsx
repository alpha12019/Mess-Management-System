import React from 'react';
import { Link } from 'react-router-dom';

const CommonDashboardSelector: React.FC = () => {
  const userTypes = [
    { 
      title: 'Registered Student', 
      path: '/student/dashboard', 
      icon: '👨‍🎓', 
      description: 'Access menu, bills, feedback, and applications',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    { 
      title: 'Unregistered Student', 
      path: '/student', 
      icon: '🧑‍🎓', 
      description: 'View menu, bills, and register for a mess',
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    { 
      title: 'Mess Caretaker', 
      path: '/caretaker/dashboard', 
      icon: '👨‍🍳', 
      description: 'Manage menu, rebates, and special requests',
      color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100'
    },
    { 
      title: 'Mess Warden', 
      path: '/mess/warden/dashboard', 
      icon: '👨‍💼', 
      description: 'View feedback, approvals, and registrations',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Mess Management System</h1>
      
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Select your user type to access the appropriate dashboard and features.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {userTypes.map((type, index) => (
          <Link 
            key={index} 
            to={type.path}
            className={`${type.color} border rounded-lg p-6 transition-all transform hover:scale-105 hover:shadow-md flex flex-col items-center text-center`}
          >
            <span className="text-4xl mb-3">{type.icon}</span>
            <h2 className="text-xl font-semibold mb-2">{type.title}</h2>
            <p className="text-sm text-gray-600">{type.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CommonDashboardSelector; 