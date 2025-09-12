import React from 'react';
import { Link } from 'react-router-dom';

const MessHero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Welcome to IIIT Jabalpur Mess Management
          </h1>
          <p className="text-gray-600 mb-6">
            Simplify your mess experience with our digital platform. Register for a mess, view menus, 
            pay bills, and track your meal history - all in one place.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/mess/registration"
              className="bg-blue-601 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Register Now
            </Link>
            <Link
              to="/mess/menu"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-6 py-3 rounded-md transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/assets/mess-hero.jpg"
            alt="IIIT Jabalpur Mess"
            className="rounded-lg shadow-lg w-full"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/600x400.png?text=IIIT+Jabalpur+Mess+Management";
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-5 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Registration</h3>
          <p className="text-gray-600">
            Register for your preferred mess with a simple form. Choose your meal plan and complete payment in minutes.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Digital Menu</h3>
          <p className="text-gray-600">
            View daily, weekly and monthly menus for all available messes. Plan your meals in advance.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Online Payments</h3>
          <p className="text-gray-600">
            Pay your mess bills online. View payment history and download receipts for all transactions.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">How do I register for a mess?</h3>
            <p className="text-gray-600 mt-1">
              Click on the "Register Now" button and fill out the registration form. Select your preferred mess and meal plan, then complete the payment.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">Can I change my mess after registration?</h3>
            <p className="text-gray-600 mt-1">
              Yes, registered students can change their mess allocation at the beginning of each month through their dashboard.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">How do I check my current mess bill?</h3>
            <p className="text-gray-600 mt-1">
              After registration, you can view your current bill in the "Bills" section of your dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessHero; 