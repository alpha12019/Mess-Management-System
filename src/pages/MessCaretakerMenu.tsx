import React from 'react';

const MessCaretakerMenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-8">Weekly Mess Menu</h1>
      <div className="flex justify-center mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Mess 1</button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md ml-2">Mess 2</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Day</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Breakfast</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Lunch</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Dinner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border-b border-gray-200">Monday</td>
              <td className="px-6 py-4 border-b border-gray-200">potato</td>
              <td className="px-6 py-4 border-b border-gray-200">tomato</td>
              <td className="px-6 py-4 border-b border-gray-200">peas</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b border-gray-200">Tuesday</td>
              <td className="px-6 py-4 border-b border-gray-200">Sprouts, Idli Sambhar, Nariyal Chutney</td>
              <td className="px-6 py-4 border-b border-gray-200">Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa (one time)</td>
              <td className="px-6 py-4 border-b border-gray-200">Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b border-gray-200">Wednesday</td>
              <td className="px-6 py-4 border-b border-gray-200">Sprouts, Poha jalebi, Namkeen, Chopped Onion, Lemon</td>
              <td className="px-6 py-4 border-b border-gray-200">Choole-Puri, Arhar Dal, Green-Salad, Plain Rice, Boondi Raita, Chutney</td>
              <td className="px-6 py-4 border-b border-gray-200">Shimla mirch, Chana Dal, Jeera Rice, Chapati, tamater-chutney</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b border-gray-200">Thursday</td>
              <td className="px-6 py-4 border-b border-gray-200">N/A</td>
              <td className="px-6 py-4 border-b border-gray-200">N/A</td>
              <td className="px-6 py-4 border-b border-gray-200">N/A</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b border-gray-200">Friday</td>
              <td className="px-6 py-4 border-b border-gray-200">Sprouts, Uttapam, Sambhar, Nariyal Chutney</td>
              <td className="px-6 py-4 border-b border-gray-200">Kala Channa Sabji, Kadhi-Pakoda, Jeera Rice, Chapati</td>
              <td className="px-6 py-4 border-b border-gray-200">Aaloo beans sabji, Dal makhani, Chapati, Plain Rice</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b border-gray-200">Saturday</td>
              <td className="px-6 py-4 border-b border-gray-200">Sprouts, Aloo sabji, Puri</td>
              <td className="px-6 py-4 border-b border-gray-200">Kofta-Sabji, Masoor Dal, Plain Rice, Chapati, Dahi</td>
              <td className="px-6 py-4 border-b border-gray-200">Aaloo Dum sabji, Moong Dal fry, Papad, Plain Rice, Chapati</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b border-gray-200">Sunday</td>
              <td className="px-6 py-4 border-b border-gray-200">N/A</td>
              <td className="px-6 py-4 border-b border-gray-200">N/A</td>
              <td className="px-6 py-4 border-b border-gray-200">N/A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessCaretakerMenu; 