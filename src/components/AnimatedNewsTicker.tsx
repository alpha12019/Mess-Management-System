import React, { useState, useEffect } from 'react';

interface NewsItem {
  id: number;
  text: string;
  type: 'info' | 'success' | 'warning' | 'announcement';
  link?: string;
}

const AnimatedNewsTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      text: "🎉 New healthy breakfast menu available from tomorrow!",
      type: 'success',
      link: '/mess/menu'
    },
    {
      id: 2,
      text: "⚠️ Mess timings changed: Breakfast 7:30-9:30 AM, Lunch 12:30-2:30 PM",
      type: 'warning'
    },
    {
      id: 3,
      text: "📢 Special weekend menu with continental dishes this Saturday!",
      type: 'announcement',
      link: '/mess/menu'
    },
    {
      id: 4,
      text: "💡 Feedback survey open - Share your thoughts and win rewards!",
      type: 'info',
      link: '/mess/feedback'
    },
    {
      id: 5,
      text: "💰 Early bird discount: 15% off on monthly packages booked before 25th!",
      type: 'success',
      link: '/mess/recharge'
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, newsItems.length]);

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'warning':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'announcement':
        return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'info':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'success':
        return '✅';
      case 'warning':
        return '⚠️';
      case 'announcement':
        return '📢';
      case 'info':
        return 'ℹ️';
      default:
        return '📰';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-4">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="font-semibold text-sm">Latest Updates</span>
          </div>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="text-white/80 hover:text-white transition-colors duration-200"
            aria-label={isPaused ? 'Resume ticker' : 'Pause ticker'}
          >
            {isPaused ? '▶️' : '⏸️'}
          </button>
        </div>

        {/* News ticker content */}
        <div className="p-4">
          <div className="flex items-center space-x-3">
            <div className="text-2xl animate-pulse">
              {getTypeIcon(newsItems[currentIndex].type)}
            </div>
            
            <div className="flex-1 overflow-hidden">
              <div
                className={`inline-block whitespace-nowrap transition-all duration-500 transform ${
                  isPaused ? 'translate-x-0' : 'animate-marquee'
                }`}
                style={{ animationDuration: '20s' }}
              >
                <span className={`inline-block px-3 py-2 rounded-lg border text-sm font-medium ${getTypeStyles(newsItems[currentIndex].type)}`}>
                  {newsItems[currentIndex].text}
                </span>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex space-x-1">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to news item ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-linear"
            style={{ 
              width: `${((currentIndex + 1) / newsItems.length) * 100}%`,
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedNewsTicker;
