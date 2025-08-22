import React, { useState, useEffect } from 'react';

const DashboardAdBanner: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [currentAd, setCurrentAd] = useState(0);

  const advertisements = [
    {
      title: "Special Offer!",
      subtitle: "Get 10% off on your next mess recharge. Limited time only!",
      action: "Recharge Now",
      link: "/mess/recharge",
      gradient: "from-pink-400 via-purple-400 to-blue-400",
      icon: "🎉"
    },
    {
      title: "New Menu Alert!",
      subtitle: "Try our new healthy breakfast options starting this week!",
      action: "View Menu",
      link: "/mess/menu",
      gradient: "from-green-400 via-blue-400 to-purple-400",
      icon: "🍽️"
    },
    {
      title: "Feedback Rewards!",
      subtitle: "Share your feedback and get ₹50 credit on your next bill!",
      action: "Give Feedback",
      link: "/mess/feedback",
      gradient: "from-orange-400 via-red-400 to-pink-400",
      icon: "💬"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 8000); // Change ad every 8 seconds

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  const currentAdData = advertisements[currentAd];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-2">
      <div 
        className={`relative flex items-center justify-between bg-gradient-to-r ${currentAdData.gradient} text-white rounded-xl shadow-lg p-4 animate-fade-in overflow-hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-4 -left-4 w-8 h-8 bg-white/20 rounded-full animate-bounce ${isHovered ? 'scale-150' : 'scale-100'} transition-transform duration-500`}></div>
          <div className={`absolute -bottom-4 -right-4 w-6 h-6 bg-white/20 rounded-full animate-pulse ${isHovered ? 'scale-200' : 'scale-100'} transition-transform duration-700`}></div>
          <div className={`absolute top-1/2 left-1/4 w-4 h-4 bg-white/15 rounded-full animate-ping ${isHovered ? 'scale-300' : 'scale-100'} transition-transform duration-1000`}></div>
        </div>

        {/* Floating icon */}
        <div className={`text-4xl drop-shadow-md mr-4 transition-all duration-500 ${isHovered ? 'animate-bounce scale-110' : 'animate-pulse'}`}>
          {currentAdData.icon}
        </div>

        {/* Content */}
        <div className="flex-1 relative z-10">
          <div className="font-bold text-lg mb-1">{currentAdData.title}</div>
          <div className="text-base opacity-90">{currentAdData.subtitle}</div>
          
          {/* Progress bar for ad rotation */}
          <div className="mt-2 w-full bg-white/20 rounded-full h-1">
            <div 
              className="bg-white/80 h-1 rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${((currentAd + 1) / advertisements.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Action button */}
        <a
          href={currentAdData.link}
          className={`ml-6 bg-white/90 text-gray-800 font-bold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 relative overflow-hidden group ${isHovered ? 'scale-105 shadow-xl' : 'hover:scale-105'}`}
        >
          <span className="relative z-10">{currentAdData.action}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>

        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-white hover:text-gray-200 text-xl font-bold focus:outline-none transition-colors duration-200 hover:scale-110"
          aria-label="Dismiss advertisement"
        >
          ×
        </button>

        {/* Ad indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {advertisements.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentAd ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardAdBanner; 