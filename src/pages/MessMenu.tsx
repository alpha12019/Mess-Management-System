import React, { useState } from 'react';

const MessMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number>(1);
  
  // Mess Menu data - structured based on the screenshot
  const messMenus = {
    1: [
      {
        day: 'Monday',
        breakfast: 'Namkeen Sevaiyan, Black Channa, Banana (2 -Piece)',
        lunch: 'Razma Sabji, chana Dal, Plain Rice, Boondi Raita',
        dinner: 'Mix-veg Arhar Dal, Chapati, Veg-Pulao,'
      },
      {
        day: 'Tuesday',
        breakfast: 'Idli Sambhar, Nariyal Chutney, Sprouts',
        lunch: 'Sev-tamatar Sabji, Arhar Dal Tadka, Jeera-Rice, Chapati, Dahi Fryms',
        dinner: 'Aaloo Jeera Sabji, Dal Makhni, jeera Rice, Chapati, Suji halwa (one time)'
      },
      {
        day: 'Wednesday',
        breakfast: 'Poha Jalebi, Namkeen, Chopped Onion, Lemon, Sprouts',
        lunch: 'Choole-Puri, Arhar Dal, Green-Salad, Plain Rice, Boondi Raita, Chutney',
        dinner: 'Shimla mirch, Chana Dal, Jeera Rice, Chapati, tamater-chutney'
      },
      {
        day: 'Thursday',
        breakfast: 'Sprouts, Namkeen Sevaiyan, Black Channa',
        lunch: 'Soyabin Sabji, Masoor Dal, Plain Rice, Chapati, Dahi',
        dinner: 'Safed matar Sabji, Chana dal, Jeera Rice, Chapati, Fruit custurd(One time)'
      },
      {
        day: 'Friday',
        breakfast: 'Uttapam, Sambhar, Nariyal Chutney, Sprouts',
        lunch: 'Kala Channa Sabji, Kadhi-Pakoda, Jeera Rice, Chapati,',
        dinner: 'Aaloo beans sabji, Dal makhani, Plain Rice, Chapati'
      },
      {
        day: 'Saturday',
        breakfast: 'Aloo sabji, Puri, Sprouts',
        lunch: 'Kofta-Sabji, Masoor Dal, Plain Rice, Chapati, Dahi,',
        dinner: 'Aaloo Dum sabji , Moong Dal fry, Plain Rice, Chapati, Papad'
      },
      {
        day: 'Sunday',
        breakfast: 'Aloo Paratha, Dahi, Sprouts',
        lunch: 'Aloo tamator mater, Moong Dal chhilka Fry, Jeera Rice, Chapati, Fryms, boondi raita',
        dinner: 'Sahi/Matar paneer, arhar dal, Tawa Veg, Veg-Biryani, Gulab-Jamun (2-pieces)'
      }
    ],
    2: [
      // Menu for Mess 2 - Would be populated with actual data
      {
        day: 'Monday',
        breakfast: 'Aloo Paratha, Curd, Fruit',
        lunch: 'Paneer Butter Masala, Dal Tadka, Jeera Rice, Roti, Raita',
        dinner: 'Veg Korma, Masoor Dal, Pulao, Chapati, Custard'
      },
      // Add more days for Mess 2
      {
        day: 'Tuesday',
        breakfast: 'Pav Bhaji, Sprouts Salad',
        lunch: 'Rajma Chawal, Aloo Gobi, Roti, Boondi Raita',
        dinner: 'Palak Paneer, Dal Fry, Jeera Rice, Chapati, Kheer'
      },
      {
        day: 'Wednesday',
        breakfast: 'Chole Bhature, Pickle',
        lunch: 'Kadhi Pakora, Plain Rice, Aloo Matar, Roti',
        dinner: 'Mix Veg, Chana Dal, Pulao, Chapati, Fruit Salad'
      },
      {
        day: 'Thursday',
        breakfast: 'Bread Upma, Boiled Egg/Banana',
        lunch: 'Malai Kofta, Dal Makhani, Jeera Rice, Roti, Raita',
        dinner: 'Aloo Capsicum, Moong Dal, Plain Rice, Chapati, Ice Cream'
      },
      {
        day: 'Friday',
        breakfast: 'Masala Dosa, Sambhar, Chutney',
        lunch: 'Dal Makhani, Mix Veg, Pulao, Roti, Papad',
        dinner: 'Matar Mushroom, Arhar Dal, Jeera Rice, Chapati, Sewai'
      },
      {
        day: 'Saturday',
        breakfast: 'Misal Pav, Sprouts',
        lunch: 'Paneer Bhurji, Moong Dal, Plain Rice, Roti, Raita',
        dinner: 'Veg Biryani, Raita, Soya Chunk Curry, Chapati, Jalebi'
      },
      {
        day: 'Sunday',
        breakfast: 'Onion Utthapam, Sambhar, Coconut Chutney',
        lunch: 'Chole, Puri, Pulao, Raita, Gulab Jamun',
        dinner: 'Paneer Tikka Masala, Dal Tadka, Pulao, Chapati, Fruit Cream'
      }
    ]
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-blue-600">Weekly Mess Menu</h1>
      </div>

      {/* Mess Selection Tabs */}
      <div className="flex mb-6">
        <button
          className={`flex-1 py-3 text-center ${activeMenu === 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'} rounded-l-md transition-colors`}
          onClick={() => setActiveMenu(1)}
        >
          Mess 1
        </button>
        <button
          className={`flex-1 py-3 text-center ${activeMenu === 2 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'} rounded-r-md transition-colors`}
          onClick={() => setActiveMenu(2)}
        >
          Mess 2
        </button>
      </div>

      {/* Menu Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 border text-left w-1/6">Day</th>
              <th className="py-3 px-4 border text-left w-2/6">Breakfast</th>
              <th className="py-3 px-4 border text-left w-2/6">Lunch</th>
              <th className="py-3 px-4 border text-left w-2/6">Dinner</th>
            </tr>
          </thead>
          <tbody>
            {messMenus[activeMenu as keyof typeof messMenus].map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-3 px-4 border font-medium">{item.day}</td>
                <td className="py-3 px-4 border">{item.breakfast}</td>
                <td className="py-3 px-4 border">{item.lunch}</td>
                <td className="py-3 px-4 border">{item.dinner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessMenu; 