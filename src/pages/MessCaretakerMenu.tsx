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
      { day: 'Monday', breakfast: 'potato', lunch: 'tomato', dinner: 'peas' },
      { day: 'Tuesday', breakfast: 'Sprouts, Idli Sambhar, Nariyal Chutney', lunch: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa (one time)', dinner: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa' },
      { day: 'Wednesday', breakfast: 'Sprouts, Poha jalebi, Namkeen, Chopped Onion, Lemon', lunch: 'Choole-Puri, Arhar Dal, Green-Salad, Plain Rice, Boondi Raita, Chutney', dinner: 'Shimla mirch, Chana Dal, Jeera Rice, Chapati, tamater-chutney' },
      { day: 'Thursday', breakfast: 'N/A', lunch: 'N/A', dinner: 'N/A' },
      { day: 'Friday', breakfast: 'Sprouts, Uttapam, Sambhar, Nariyal Chutney', lunch: 'Kala Channa Sabji, Kadhi-Pakoda, Jeera Rice, Chapati', dinner: 'Aaloo beans sabji, Dal makhani, Chapati, Plain Rice' },
      { day: 'Saturday', breakfast: 'N/A', lunch: 'N/A', dinner: 'N/A' },
      { day: 'Sunday', breakfast: 'N/A', lunch: 'N/A', dinner: 'N/A' }
    ]
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-8">Weekly Mess Menu</h1>
      <div className="flex justify-center mb-6 space-x-4">
        <button
          className={`px-6 py-2 rounded-md ${
            selectedMess === 'mess1' ? 'bg-blue-500 text-white' : 'border border-gray-300'
          }`}
          onClick={() => setSelectedMess('mess1')}
        >
          Mess 1
        </button>
        <button
          className={`px-6 py-2 rounded-md ${
            selectedMess === 'mess2' ? 'bg-blue-500 text-white' : 'border border-gray-300'
          }`}
          onClick={() => setSelectedMess('mess2')}
        >
          Mess 2
        </button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Breakfast</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lunch</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dinner</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {menuData[selectedMess].map((item) => (
              <tr key={item.day}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.day}</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">{item.breakfast}</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">{item.lunch}</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">{item.dinner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessCaretakerMenu; 