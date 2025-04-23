import React, { useState } from 'react';

interface MenuItem {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
}

interface MenuData {
  mess1: MenuItem[];
  mess2: MenuItem[];
}

const MessCaretakerMenu: React.FC = () => {
  const [selectedMess, setSelectedMess] = useState<'mess1' | 'mess2'>('mess1');

  const menuData: MenuData = {
    mess1: [
      { day: 'Monday', breakfast: 'potato', lunch: 'tomato', dinner: 'peas' },
      { day: 'Tuesday', breakfast: 'Sprouts, Idli Sambhar, Nariyal Chutney', lunch: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa (one time)', dinner: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa' },
      { day: 'Wednesday', breakfast: 'Sprouts, Poha jalebi, Namkeen, Chopped Onion, Lemon', lunch: 'Choole-Puri, Arhar Dal, Green-Salad, Plain Rice, Boondi Raita, Chutney', dinner: 'Shimla mirch, Chana Dal, Jeera Rice, Chapati, tamater-chutney' },
      { day: 'Thursday', breakfast: 'N/A', lunch: 'N/A', dinner: 'N/A' },
      { day: 'Friday', breakfast: 'Sprouts, Uttapam, Sambhar, Nariyal Chutney', lunch: 'Kala Channa Sabji, Kadhi-Pakoda, Jeera Rice, Chapati', dinner: 'Aaloo beans sabji, Dal makhani, Chapati, Plain Rice' },
      { day: 'Saturday', breakfast: 'N/A', lunch: 'N/A', dinner: 'N/A' },
      { day: 'Sunday', breakfast: 'N/A', lunch: 'N/A', dinner: 'N/A' }
    ],
    mess2: [
      { day: 'Monday', breakfast: 'potato, egg', lunch: 'tomato', dinner: 'peas' },
      { day: 'Tuesday', breakfast: 'Sprouts, Idli Sambhar, Nariyal Chutney', lunch: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa (one time)', dinner: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa' },
      { day: 'Wednesday', breakfast: 'Sprouts, Poha jalebi, Namkeen, Chopped Onion, Lemon', lunch: 'Choole-Puri, Arhar Dal, Green-Salad, Plain Rice, Boondi Raita, Chutney', dinner: 'Shimla mirch, Chana Dal, Jeera Rice, Chapati, tamater-chutney' },
      { day: 'Thursday', breakfast: 'N/A', lunch: 'N/A', dinner: 'N/A' },
      { day: 'Friday', breakfast: 'Sprouts, Uttapam, Sambhar, Nariyal Chutney, egg', lunch: 'Kala Channa Sabji, Kadhi-Pakoda, Jeera Rice, Chapati', dinner: 'Aaloo beans sabji, Dal makhani, Chapati, Plain Rice' },
      { day: 'Saturday', breakfast: 'Sprouts, Poha jalebi, Namkeen, Chopped Onion', lunch: 'N/A', dinner: 'N/A' },
      { day: 'Sunday', breakfast: 'Sprouts, Poha jalebi, Namkeen, Chopped Onion', lunch: 'N/A', dinner: 'N/A' }
    ]
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-8 text-center sm:text-left">Weekly Mess Menu</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base ${
            selectedMess === 'mess1' ? 'bg-blue-500 text-white' : 'border border-gray-300'
          }`}
          onClick={() => setSelectedMess('mess1')}
        >
          Mess 1
        </button>
        <button
          className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base ${
            selectedMess === 'mess2' ? 'bg-blue-500 text-white' : 'border border-gray-300'
          }`}
          onClick={() => setSelectedMess('mess2')}
        >
          Mess 2
        </button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <div className="min-w-full">
          {/* Desktop Table */}
          <table className="hidden sm:table min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Breakfast</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lunch</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dinner</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {menuData[selectedMess].map((item) => (
                <tr key={item.day}>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.day}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-normal text-sm text-gray-500">{item.breakfast}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-normal text-sm text-gray-500">{item.lunch}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-normal text-sm text-gray-500">{item.dinner}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Cards */}
          <div className="sm:hidden space-y-4 p-4">
            {menuData[selectedMess].map((item) => (
              <div key={item.day} className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{item.day}</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Breakfast:</span>
                    <p className="text-sm text-gray-700">{item.breakfast}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Lunch:</span>
                    <p className="text-sm text-gray-700">{item.lunch}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Dinner:</span>
                    <p className="text-sm text-gray-700">{item.dinner}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessCaretakerMenu; 