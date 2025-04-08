import React, { useState } from 'react';

interface MenuItem {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
}

const initialMenuData: MenuItem[] = [
  {
    day: 'Monday',
    breakfast: 'Namkeen Sevaiyan, Black Channa, Banana (2 - Piece)',
    lunch: 'Rajma Sabji, chana Dal, Boondi Raita, Plain Rice',
    dinner: 'Mix-veg Arhar Dal, Chapati, Veg Pulao'
  },
  {
    day: 'Tuesday',
    breakfast: 'Sprouts, Idli Sambhar, Nariyal Chutney',
    lunch: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa ( one time )',
    dinner: 'Aaloo Jeera Sabji, Dal Makhni, jeera Rice, Chapati, Suji halwa'
  },
  {
    day: 'Wednesday',
    breakfast: 'Sprouts, Poha jalebI, Namkeen, Chopped Onion, Lemon',
    lunch: 'Choole-Puri, Arhar Dal, Green-Salad, Plain Rice, Boondi Raita, Chutney',
    dinner: 'Shimla mirch, Chana Dal, Jeera Rice, Chapati, tamatar-chutney'
  },
  {
    day: 'Thursday',
    breakfast: 'Sprouts, Namkeen Sevaiyan, Black Channa',
    lunch: 'Soyabin Sabji, Masoor Dal, Plain Rice, Dahi, Chapati',
    dinner: 'Safed matar Sabji, Chana dal, Jeera Rice, Chapati, Fruit custard(One time)'
  },
  {
    day: 'Friday',
    breakfast: 'Sprouts, Uttapam, Sambhar, Nariyal Chutney',
    lunch: 'Kala Channa Sabji, Kadhi-Pakoda, Jeera Rice, Chapati',
    dinner: 'Aaloo beans sabji, Dal makhani, Chapati, Plain Rice'
  },
  {
    day: 'Saturday',
    breakfast: 'Sprouts, Aloo sabji, Puri',
    lunch: 'Kofta-Sabji, Masoor Dal, Plain Rice, Chapati, Dahi',
    dinner: 'Aaloo Dam sabji , Moong Dal fry, Papad, Plain Rice, Chapati'
  }
];

const MessWardenMenu: React.FC = () => {
  const [selectedMess, setSelectedMess] = useState<'Mess 1' | 'Mess 2'>('Mess 1');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-center text-gray-900 mb-8">
          Weekly Mess Menu
        </h1>

        {/* Mess Selection Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setSelectedMess('Mess 1')}
            className={`px-6 py-2 rounded-md text-sm font-medium ${
              selectedMess === 'Mess 1'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } transition-colors duration-200`}
          >
            Mess 1
          </button>
          <button
            onClick={() => setSelectedMess('Mess 2')}
            className={`px-6 py-2 rounded-md text-sm font-medium ${
              selectedMess === 'Mess 2'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } transition-colors duration-200`}
          >
            Mess 2
          </button>
        </div>

        {/* Menu Table */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Day
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Breakfast
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lunch
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dinner
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {initialMenuData.map((item, index) => (
                <tr key={item.day} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.day}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {item.breakfast}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {item.lunch}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {item.dinner}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit Menu Button */}
        <div className="mt-6 flex justify-end">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Edit Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessWardenMenu; 