import React, { useState, useEffect, useRef } from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconBg: string;
  iconColor: string;
  delay?: number;
}

const AnimatedStatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  isPositive,
  icon: Icon,
  iconBg,
  iconColor,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [displayValue, setDisplayValue] = useState('0');
  const valueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isVisible && valueRef.current) {
      // Animate the value counting up
      const numericValue = parseInt(value.replace(/[^\d]/g, ''));
      if (!isNaN(numericValue)) {
        let current = 0;
        const increment = numericValue / 30; // 30 steps
        const timer = setInterval(() => {
          current += increment;
          if (current >= numericValue) {
            current = numericValue;
            clearInterval(timer);
          }
          setDisplayValue(Math.floor(current).toLocaleString());
        }, 50);
        return () => clearInterval(timer);
      } else {
        setDisplayValue(value);
      }
    }
  }, [isVisible, value]);

  return (
    <div
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
      }`}
    >
      <div
        className={`card relative flex items-start p-3 sm:p-4 md:p-6 w-full transition-all duration-300 cursor-pointer ${
          isHovered ? 'shadow-lg scale-105 bg-gradient-to-br from-white to-gray-50' : 'hover:shadow-md'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated icon container */}
        <div 
          className={`p-2 sm:p-3 rounded-lg ${iconBg} ${iconColor} mr-3 sm:mr-4 transition-all duration-300 ${
            isHovered ? 'scale-110 rotate-3 shadow-lg' : 'hover:scale-105'
          }`}
        >
          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`} />
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-gray-500 text-xs sm:text-sm mb-1">{title}</p>
          
          {/* Animated value */}
          <div 
            ref={valueRef}
            className={`text-lg sm:text-2xl font-bold transition-all duration-300 ${
              isHovered ? 'text-blue-600 scale-105' : 'text-gray-900'
            }`}
          >
            {displayValue}
          </div>
          
          {/* Animated change indicator */}
          <div className={`flex items-center mt-1 transition-all duration-300 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}>
            <div className={`transition-all duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}>
              {isPositive ? (
                <div className="w-4 h-4 text-green-500 animate-pulse">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414-1.414L15.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
              ) : (
                <div className="w-4 h-4 text-red-500 animate-pulse">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 1.414L15.586 13H12z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <span className={`text-xs sm:text-sm ml-1 font-medium transition-all duration-300 ${
              isPositive ? 'text-green-500' : 'text-red-500'
            } ${isHovered ? 'scale-105' : 'scale-100'}`}>
              {change}
            </span>
          </div>
        </div>

        {/* Hover effect overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl pointer-events-none transition-opacity duration-300"></div>
        )}
      </div>
    </div>
  );
};

export default AnimatedStatsCard;
