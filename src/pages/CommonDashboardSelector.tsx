import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CommonDashboardSelector: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'login' | 'signup'>('dashboard');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [signupRole, setSignupRole] = useState('student');
  const [signupName, setSignupName] = useState('');
  const [signupRollNo, setSignupRollNo] = useState('');

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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would add actual authentication logic
    console.log('Login attempt with:', { loginEmail, loginPassword });
    alert('Login functionality would be implemented here.');
    // Clear form
    setLoginEmail('');
    setLoginPassword('');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would add actual registration logic
    if (signupPassword !== signupConfirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup attempt with:', { 
      signupEmail, 
      signupPassword, 
      signupRole,
      signupName,
      signupRollNo
    });
    alert('Signup functionality would be implemented here.');
    // Clear form
    setSignupEmail('');
    setSignupPassword('');
    setSignupConfirmPassword('');
    setSignupRole('student');
    setSignupName('');
    setSignupRollNo('');
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Mess Management System</h1>
      
      {/* Navigation Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'dashboard' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'login' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'signup' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Signup
          </button>
        </div>
      </div>
      
      {/* Dashboard View */}
      {activeTab === 'dashboard' && (
        <>
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
        </>
      )}
      
      {/* Login Form */}
      {activeTab === 'login' && (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-center">Login to Your Account</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center text-sm">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button 
                className="text-blue-500 hover:underline" 
                onClick={() => setActiveTab('signup')}
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      )}
      
      {/* Signup Form */}
      {activeTab === 'signup' && (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-center">Create a New Account</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="signup-email">
                Email Address
              </label>
              <input
                id="signup-email"
                type="email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="signup-name">
                Full Name
              </label>
              <input
                id="signup-name"
                type="text"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="signup-role">
                Role
              </label>
              <select
                id="signup-role"
                value={signupRole}
                onChange={(e) => setSignupRole(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="student">Student</option>
                <option value="caretaker">Mess Caretaker</option>
                <option value="warden">Mess Warden</option>
              </select>
            </div>
            {signupRole === 'student' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="signup-rollno">
                  Roll Number
                </label>
                <input
                  id="signup-rollno"
                  type="text"
                  value={signupRollNo}
                  onChange={(e) => setSignupRollNo(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="signup-password">
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="signup-confirm-password">
                Confirm Password
              </label>
              <input
                id="signup-confirm-password"
                type="password"
                value={signupConfirmPassword}
                onChange={(e) => setSignupConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
            >
              Create Account
            </button>
          </form>
          <div className="mt-4 text-center text-sm">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button 
                className="text-blue-500 hover:underline" 
                onClick={() => setActiveTab('login')}
              >
                Log in
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommonDashboardSelector; 