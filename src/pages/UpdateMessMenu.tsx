import React from 'react';

const UpdateMessMenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-8">Update Mess Menu</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-center mb-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2">Mess 1</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2">Mess 2</button>
        </div>
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Day</th>
              <th className="border px-4 py-2">Breakfast</th>
              <th className="border px-4 py-2">Lunch</th>
              <th className="border px-4 py-2">Dinner</th>
            </tr>
          </thead>
          <tbody>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
              <tr key={day}>
                <td className="border px-4 py-2">{day}</td>
                <td className="border px-4 py-2"><input type="text" placeholder="Enter breakfast" className="w-full" /></td>
                <td className="border px-4 py-2"><input type="text" placeholder="Enter lunch" className="w-full" /></td>
                <td className="border px-4 py-2"><input type="text" placeholder="Enter dinner" className="w-full" /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">Save Menu</button>
      </div>
    </div>
  );
};

export default UpdateMessMenu; 
import React from 'react';

const UpdateMessMenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-8">Update Mess Menu</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-center mb-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2">Mess 1</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2">Mess 2</button>
        </div>
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Day</th>
              <th className="border px-4 py-2">Breakfast</th>
              <th className="border px-4 py-2">Lunch</th>
              <th className="border px-4 py-2">Dinner</th>
            </tr>
          </thead>
          <tbody>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
              <tr key={day}>
                <td className="border px-4 py-2">{day}</td>
                <td className="border px-4 py-2"><input type="text" placeholder="Enter breakfast" className="w-full" /></td>
                <td className="border px-4 py-2"><input type="text" placeholder="Enter lunch" className="w-full" /></td>
                <td className="border px-4 py-2"><input type="text" placeholder="Enter dinner" className="w-full" /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">Save Menu</button>
      </div>
    </div>
  );
};

export default UpdateMessMenu; 