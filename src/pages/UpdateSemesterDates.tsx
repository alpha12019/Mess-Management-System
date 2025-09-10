import React from 'react';

const UpdateSemesterDates: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-8">Update Semester Dates</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-center mb-4">
          <input type="text" placeholder="MM/DD/YYYY" className="border px-4 py-2 mx-2" />
          <input type="text" placeholder="MM/DD/YYYY" className="border px-4 py-2 mx-2" />
        </div>
        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">Update</button>
      </div>
    </div>
  );
};

export default UpdateSemesterDates; 
export default UpdateSemesterDates; 