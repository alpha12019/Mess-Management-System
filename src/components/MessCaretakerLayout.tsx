import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

const MessCaretakerLayout: React.FC = () => {
  const location = useLocation();

  const isActiveLink = (path: string) => {
    return location.pathname.includes(path) ? 'text-blue-400' : '';
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center space-x-6 overflow-x-auto whitespace-nowrap">
            <Link
              to="/caretaker/view-feedback"
              className={`hover:text-gray-300 ${isActiveLink('/view-feedback')}`}
            >
              View Feedback
            </Link>
            <Link
              to="/caretaker/respond-rebate"
              className={`hover:text-gray-300 ${isActiveLink('/respond-rebate')}`}
            >
              Respond to Rebate
            </Link>
            <Link
              to="/caretaker/requests"
              className={`hover:text-gray-300 ${isActiveLink('/requests')}`}
            >
              Requests
            </Link>
            <Link
              to="/caretaker/special-food"
              className={`hover:text-gray-300 ${isActiveLink('/special-food')}`}
            >
              View Special Food Requests
            </Link>
            <Link
              to="/caretaker/menu"
              className={`hover:text-gray-300 ${isActiveLink('/menu')}`}
            >
              View Menu
            </Link>
            <Link
              to="/caretaker/activities"
              className={`hover:text-gray-300 ${isActiveLink('/activities')}`}
            >
              Mess Activities
            </Link>
            <Link
              to="/caretaker/registrations"
              className={`hover:text-gray-300 ${isActiveLink('/registrations')}`}
            >
              Mess Registrations
            </Link>
            <Link
              to="/caretaker/update-menu"
              className={`hover:text-gray-300 ${isActiveLink('/update-menu')}`}
            >
              Update Menu
            </Link>
            <Link
              to="/caretaker/update-dates"
              className={`hover:text-gray-300 ${isActiveLink('/update-dates')}`}
            >
              Update Semester Dates
            </Link>
          </div>
        </div>
      </nav>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default MessCaretakerLayout; 