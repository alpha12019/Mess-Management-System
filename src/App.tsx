import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import MessWardenLayout from './pages/MessWardenLayout';
import MessWardenFeedback from './pages/MessWardenFeedback';
import MessWardenMenu from './pages/MessWardenMenu';
import MessWardenAnnouncements from './pages/MessWardenAnnouncements';
import MessWardenRegistrations from './pages/MessWardenRegistrations';
import MessWardenPayments from './pages/MessWardenPayments';

// Caretaker Components
import MessCaretakerLayout from './components/MessCaretakerLayout';
import MessCaretakerFeedback from './pages/MessCaretakerFeedback';
import MessCaretakerMenu from './pages/MessCaretakerMenu';
import MessCaretakerSpecialFood from './pages/MessCaretakerSpecialFood';
import MessCaretakerRebate from './pages/MessCaretakerRebate';
import MessCaretakerRequests from './pages/MessCaretakerRequests';
import MessCaretakerActivities from './pages/MessCaretakerActivities';
import UpdateBill from './pages/UpdateBill';
import ViewBill from './pages/ViewBill';
import MessRegistrations from './pages/MessRegistrations';
import AddOrRemoveFromMess from './pages/AddOrRemoveFromMess';
import UpdateMessMenu from './pages/UpdateMessMenu';
import UpdateSemesterDates from './pages/UpdateSemesterDates';

// Student Components
import StudentLayout from './components/StudentLayout';
import StudentRegistration from './pages/StudentRegistration';
import StudentMenu from './pages/StudentMenu';
import StudentBill from './pages/StudentBill';
import StudentDashboard from './pages/StudentDashboard';
import StudentFeedback from './pages/StudentFeedback';
import StudentApplications from './pages/StudentApplications';
import StudentUpdatePayment from './pages/StudentUpdatePayment';
import StudentDeregistration from './pages/StudentDeregistration';

import CommonDashboard from './pages/CommonDashboard';
import CommonDashboardSelector from './pages/CommonDashboardSelector';

type ActorType = 'common_dashboard' | 'registered_student' | 'unregistered_student' | 'warden' | 'caretaker';

function App() {
  const [selectedActor, setSelectedActor] = useState<ActorType>('unregistered_student');
  const navigate = useNavigate();

  // Hardcoded authentication states for development
  const isWardenAuthenticated = true;
  const isCaretakerAuthenticated = true;
  const isStudentAuthenticated = true;

  const handleActorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const actor = event.target.value as ActorType;
    setSelectedActor(actor);
    
    switch(actor) {
      case 'warden':
        navigate('/mess/warden/feedback');
        break;
      case 'registered_student':
        navigate('/student/dashboard');
        break;
      case 'unregistered_student':
        navigate('/student/menu');
        break;
      case 'caretaker':
        navigate('/caretaker/view-feedback');
        break;
      case 'common_dashboard':
        navigate('/dashboard');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="max-w-xs">
            <label htmlFor="actor-select" className="block text-sm font-medium text-gray-700 mb-1">
              Select User Type
            </label>
            <select
              id="actor-select"
              value={selectedActor}
              onChange={handleActorChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="common_dashboard">Common Dashboard</option>
              <option value="registered_student">Registered Student</option>
              <option value="unregistered_student">Unregistered Student</option>
              <option value="warden">Mess Warden</option>
              <option value="caretaker">Mess Caretaker</option>
            </select>
          </div>
        </div>

        <Routes>
          {/* Common Dashboard Selector */}
          <Route path="/dashboard" element={<CommonDashboardSelector />} />

          {/* Unregistered Student Routes */}
          <Route path="/student" element={<StudentLayout userType="unregistered" />}>
            <Route path="menu" element={<StudentMenu />} />
            <Route path="bill" element={<StudentBill />} />
            <Route path="registration" element={<StudentRegistration />} />
            <Route path="dashboard" element={<CommonDashboard userType="student" />} />
            <Route index element={<Navigate to="/student/dashboard" replace />} />
          </Route>

          {/* Registered Student Routes */}
          <Route
            path="/student/*"
            element={
              isStudentAuthenticated ? (
                <StudentLayout userType="registered" />
              ) : (
                <div>Unauthorized</div>
              )
            }
          >
            <Route path="menu" element={<div className="p-4">Menu Page (To be implemented)</div>} />
            <Route path="bill" element={<div className="p-4">Bill and Payments Page (To be implemented)</div>} />
            <Route path="registration" element={<div className="p-4">Registration Page (To be implemented)</div>} />
            <Route path="feedback" element={<StudentFeedback />} />
            <Route path="applications" element={<StudentApplications />} />
            <Route path="update-payment" element={<StudentUpdatePayment />} />
            <Route path="deregistration" element={<StudentDeregistration />} />
            <Route path="dashboard" element={<CommonDashboard userType="student" />} />
            <Route index element={<Navigate to="/student/dashboard" replace />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Route>

          {/* Warden Routes */}
          <Route
            path="/mess/warden/*"
            element={
              isWardenAuthenticated ? (
                <MessWardenLayout />
              ) : (
                <div>Unauthorized</div>
              )
            }
          >
            <Route index element={<Navigate to="/warden/dashboard" replace />} />
            <Route path="feedback" element={<MessWardenFeedback />} />
            <Route path="menu" element={<MessWardenMenu />} />
            <Route path="announcements" element={<MessWardenAnnouncements />} />
            <Route path="registrations" element={<MessWardenRegistrations />} />
            <Route path="payments" element={<MessWardenPayments />} />
            <Route path="dashboard" element={<CommonDashboard userType="warden" />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Route>

          {/* Caretaker Routes */}
          <Route
            path="/caretaker/*"
            element={
              isCaretakerAuthenticated ? (
                <MessCaretakerLayout />
              ) : (
                <div>Unauthorized</div>
              )
            }
          >
            <Route path="view-feedback" element={<MessCaretakerFeedback />} />
            <Route path="respond-rebate" element={<MessCaretakerRebate />} />
            <Route path="requests" element={<MessCaretakerRequests />} />
            <Route path="special-food" element={<MessCaretakerSpecialFood />} />
            <Route path="menu" element={<MessCaretakerMenu />} />
            <Route path="activities" element={<MessCaretakerActivities />} />
            <Route path="update-bill" element={<UpdateBill />} />
            <Route path="view-bill" element={<ViewBill />} />
            <Route path="registrations" element={<MessRegistrations />} />
            <Route path="update-menu" element={<UpdateMessMenu />} />
            <Route path="update-dates" element={<UpdateSemesterDates />} />
            <Route path="add-remove-mess" element={<AddOrRemoveFromMess />} />
            <Route path="dashboard" element={<CommonDashboard userType="caretaker" />} />
            <Route index element={<Navigate to="/caretaker/dashboard" replace />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Route>

          {/* Default Route */}
          <Route path="/" element={<StudentMenu />} />
        </Routes>
      </div>
    </div>
  );
}

export default App; 