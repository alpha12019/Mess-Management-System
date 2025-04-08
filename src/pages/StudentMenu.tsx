import React, { useState } from 'react';

interface MenuItem {
  breakfast: string;
  lunch: string;
  dinner: string;
}

interface MessMenu {
  [key: string]: MenuItem;
}

const StudentMenu: React.FC = () => {
  const [selectedMess, setSelectedMess] = useState<'Mess 1' | 'Mess 2'>('Mess 1');

  // Menu data exactly as shown in the image
  const messMenus: Record<'Mess 1' | 'Mess 2', MessMenu> = {
    'Mess 1': {
      Monday: {
        breakfast: 'Namkeen Sevaiyan, Black Channa, Banana (2 -Piece)',
        lunch: 'Razma Sabji, chana Dal, Plain Rice, Boondi Raita',
        dinner: 'Mix-veg Arhar Dal, Chapati, Veg-Pulao,'
      },
      Tuesday: {
        breakfast: 'Idli Sambhar, Nariyal Chutney, Sprouts',
        lunch: 'Sev-tamatar Sabji, Arhar Dal Tadka, Jeera-Rice, Chapati, Dahi Fryms',
        dinner: 'Aaloo Jeera Sabji, Dal Makhini, jeera Rice, Chapati, Suji halwa (one time)'
      },
      Wednesday: {
        breakfast: 'Poha jalebi, Namkeen, Chopped Onion, Lemon, Sprouts',
        lunch: 'Choole-Puri, Arhar Dal, Green-Salad, Plain Rice, Boondi Raita, Chutney',
        dinner: 'Shimla mirch, Chana Dal, Jeera Rice, Chapati, tamater-chutney'
      },
      Thursday: {
        breakfast: 'Sprouts, Namkeen Sevaiyan, Black Channa',
        lunch: 'Soyabin Sabji, Masoor Dal, Plain Rice, Chapati, Dahi',
        dinner: 'Safed matar Sabji, Chana dal, Jeera Rice, Chapati, Fruit custurd(one time)'
      },
      Friday: {
        breakfast: 'Uttapam, Sambhar, Nariyal Chutney, Sprouts',
        lunch: 'Kala Channa Sabji, Kadhi-Pakoda, Jeera Rice, Chapati',
        dinner: 'Aaloo beans sabji, Dal makhani, Plain Rice, Chapati'
      },
      Saturday: {
        breakfast: 'Aloo sabji, Puri, Sprouts',
        lunch: 'Kofta-Sabji, Masoor Dal, Plain Rice, Chapati, Dahi',
        dinner: 'Aaloo Dum sabji, Moong Dal fry, Plain Rice, Chapati, Papad'
      },
      Sunday: {
        breakfast: 'Aloo Paratha, Dahi, Sprouts',
        lunch: 'Aloo tamator mater, Moong Dal chilka Fry, Jeera Rice, Chapati, Fryms, boondi raita',
        dinner: 'Sabji/Matar paneer, arhar dal, Tawa Veg, Veg-Biryani, Gulab-Jamun (2-pieces)'
      }
    },
    'Mess 2': {
      Monday: {
        breakfast: 'Namkeen Sevaiyan, Black Channa, Banana (2 -Piece)',
        lunch: 'Razma Sabji, chana Dal, Plain Rice, Boondi Raita',
        dinner: 'Mix-veg Arhar Dal, Chapati, Veg-Pulao,'
      },
      Tuesday: {
        breakfast: 'Idli Sambhar, Nariyal Chutney, Sprouts',
        lunch: 'Sev-tamatar Sabji, Arhar Dal Tadka, Jeera-Rice, Chapati, Dahi Fryms',
        dinner: 'Aaloo Jeera Sabji, Dal Makhini, jeera Rice, Chapati, Suji halwa (one time)'
      },
      Wednesday: {
        breakfast: 'Poha jalebi, Namkeen, Chopped Onion, Lemon, Sprouts',
        lunch: 'Choole-Puri, Arhar Dal, Green-Salad, Plain Rice, Boondi Raita, Chutney',
        dinner: 'Shimla mirch, Chana Dal, Jeera Rice, Chapati, tamater-chutney'
      },
      Thursday: {
        breakfast: 'Sprouts, Namkeen Sevaiyan, Black Channa',
        lunch: 'Soyabin Sabji, Masoor Dal, Plain Rice, Chapati, Dahi',
        dinner: 'Safed matar Sabji, Chana dal, Jeera Rice, Chapati, Fruit custurd(one time)'
      },
      Friday: {
        breakfast: 'Uttapam, Sambhar, Nariyal Chutney, Sprouts',
        lunch: 'Kala Channa Sabji, Kadhi-Pakoda, Jeera Rice, Chapati',
        dinner: 'Aaloo beans sabji, Dal makhani, Plain Rice, Chapati'
      },
      Saturday: {
        breakfast: 'Aloo sabji, Puri, Sprouts',
        lunch: 'Kofta-Sabji, Masoor Dal, Plain Rice, Chapati, Dahi',
        dinner: 'Aaloo Dum sabji, Moong Dal fry, Plain Rice, Chapati, Papad'
      },
      Sunday: {
        breakfast: 'Aloo Paratha, Dahi, Sprouts',
        lunch: 'Aloo tamator mater, Moong Dal chilka Fry, Jeera Rice, Chapati, Fryms, boondi raita',
        dinner: 'Sabji/Matar paneer, arhar dal, Tawa Veg, Veg-Biryani, Gulab-Jamun (2-pieces)'
      }
    }
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-900">Weekly Mess Menu</h1>
      <div className="bg-white rounded-lg">
        {/* Mess Selection Tabs */}
        <div className="grid grid-cols-2 gap-0">
          <button
            onClick={() => setSelectedMess('Mess 1')}
            className={`py-2 text-center ${
              selectedMess === 'Mess 1'
                ? 'bg-white text-gray-900'
                : 'bg-blue-500 text-white'
            }`}
          >
            Mess 1
          </button>
          <button
            onClick={() => setSelectedMess('Mess 2')}
            className={`py-2 text-center ${
              selectedMess === 'Mess 2'
                ? 'bg-white text-gray-900'
                : 'bg-blue-500 text-white'
            }`}
          >
            Mess 2
          </button>
        </div>

        {/* Menu Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-t border-b border-gray-200">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Day</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Breakfast</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Lunch</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Dinner</th>
              </tr>
            </thead>
            <tbody>
              {days.map((day) => (
                <tr key={day} className="border-b border-gray-200">
                  <td className="px-4 py-2 text-sm text-gray-900">{day}</td>
                  <td className="px-4 py-2 text-sm text-gray-600">{messMenus[selectedMess][day].breakfast}</td>
                  <td className="px-4 py-2 text-sm text-gray-600">{messMenus[selectedMess][day].lunch}</td>
                  <td className="px-4 py-2 text-sm text-gray-600">{messMenus[selectedMess][day].dinner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentMenu; 