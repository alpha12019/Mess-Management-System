import React, { useState } from 'react';

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  time: string;
  type: 'breakfast' | 'lunch' | 'dinner';
  author: string;
}

const initialAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'Breakfast Updates',
    content: 'Due to power cut issue in our college, updated breakfast timing is mentioned below: Breakfast will be served from 7:30 to 9:30. Special Announcement: "Today\'s Special: Masala Dosa available until 9:00 AM".',
    date: 'Sept 13, 2024',
    time: '10:30 AM',
    type: 'breakfast',
    author: 'Mess Warden'
  },
  {
    id: '2',
    title: 'Lunch Updates',
    content: 'Special Announcements: "Today\'s special: Jeera Rice available until 1:30 PM." Note: "Mess will be closed for cleaning after 2:45 PM."',
    date: 'Sept 13, 2024',
    time: '10:30 AM',
    type: 'lunch',
    author: 'Mess Warden'
  },
  {
    id: '3',
    title: 'Dinner Updates',
    content: 'Today\'s Special Dinner on the occasion of Ram Navmi: Kheer, Puri, Pulao, Dal Makhani, Green Salad, Raita. Special Announcement: "Today\'s Special: Veg Biryani available until 8:00 PM".',
    date: 'Sept 13, 2024',
    time: '10:30 AM',
    type: 'dinner',
    author: 'Mess Warden'
  }
];

const MessWardenAnnouncements: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setAnnouncements(initialAnnouncements);
      return;
    }

    const filtered = initialAnnouncements.filter(announcement =>
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setAnnouncements(filtered);
  };

  const getAnnouncementColor = (type: string) => {
    switch (type) {
      case 'breakfast':
        return 'bg-blue-50';
      case 'lunch':
        return 'bg-green-50';
      case 'dinner':
        return 'bg-orange-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4 sm:mb-0">
            Mess Announcements
          </h1>
          <div className="flex w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search Announcements"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 sm:w-80 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Search
            </button>
          </div>
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className={`${getAnnouncementColor(announcement.type)} rounded-lg shadow-sm p-6`}
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-medium text-gray-900">{announcement.title}</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{announcement.author}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{announcement.content}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{announcement.date}</span>
                <span>{announcement.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Add Announcement Button */}
        <div className="mt-6 flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Add Announcement
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessWardenAnnouncements; 