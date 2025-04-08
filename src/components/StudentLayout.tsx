import React from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';

export type UserType = 'registered' | 'unregistered';

interface StudentLayoutProps {
  userType: UserType;
}

const StudentLayout: React.FC<StudentLayoutProps> = ({ userType }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const baseClasses = "px-4 py-2 text-sm font-medium";
    return `${baseClasses} ${
      location.pathname === path
        ? "text-blue-600 border-b-2 border-blue-500"
        : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
    }`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Student Portal</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Welcome, Student</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex space-x-8">
                {userType === 'registered' ? (
                  <>
                    <Link to="/student/menu" className={getLinkClass('/student/menu')}>
                      View Menu
                    </Link>
                    <Link to="/student/bill" className={getLinkClass('/student/bill')}>
                      View Bill and Payments
                    </Link>
                    <Link to="/student/registration" className={getLinkClass('/student/registration')}>
                      Registration
                    </Link>
                    <Link to="/student/feedback" className={getLinkClass('/student/feedback')}>
                      Feedback
                    </Link>
                    <Link to="/student/applications" className={getLinkClass('/student/applications')}>
                      Applications
                    </Link>
                    <Link to="/student/update-payment" className={getLinkClass('/student/update-payment')}>
                      Update Payment
                    </Link>
                    <Link to="/student/deregistration" className={getLinkClass('/student/deregistration')}>
                      Deregistration
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/student/menu" className={getLinkClass('/student/menu')}>
                      View Menu
                    </Link>
                    <Link to="/student/bill" className={getLinkClass('/student/bill')}>
                      View Bill and Payments
                    </Link>
                    <Link to="/student/registration" className={getLinkClass('/student/registration')}>
                      Registration
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-6 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default StudentLayout; 