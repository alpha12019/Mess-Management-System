import React, { useState, useEffect } from 'react';

interface PromoCardProps {
  title: string;
  description: string;
  actionText: string;
  actionLink: string;
  icon: string;
  gradient: string;
  delay?: number;
}

const AnimatedPromoCard: React.FC<PromoCardProps> = ({
  title,
  description,
  actionText,
  actionLink,
  icon,
  gradient,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
      }`}
    >
      <div
        className={`relative bg-gradient-to-br ${gradient} rounded-xl p-6 text-white shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 ${
          isHovered ? 'scale-105 shadow-xl' : 'hover:scale-105'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-8 -right-8 w-16 h-16 bg-white/10 rounded-full transition-all duration-1000 ${
            isHovered ? 'scale-150 rotate-180' : 'scale-100 rotate-0'
          }`}></div>
          <div className={`absolute -bottom-6 -left-6 w-12 h-12 bg-white/10 rounded-full transition-all duration-700 ${
            isHovered ? 'scale-200 -rotate-90' : 'scale-100 rotate-0'
          }`}></div>
        </div>

        {/* Floating icon */}
        <div className={`text-5xl mb-4 transition-all duration-500 ${
          isHovered ? 'animate-bounce scale-110' : 'animate-pulse'
        }`}>
          {icon}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-white/90 mb-4 text-sm leading-relaxed">{description}</p>
          
          {/* Action button */}
          <a
            href={actionLink}
            className={`inline-block bg-white/20 backdrop-blur-sm text-white font-semibold px-4 py-2 rounded-lg border border-white/30 transition-all duration-300 ${
              isHovered ? 'bg-white/30 scale-105 shadow-lg' : 'hover:bg-white/30'
            }`}
          >
            {actionText}
          </a>
        </div>

        {/* Shimmer effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-all duration-1000 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`}></div>
      </div>
    </div>
  );
};

export default AnimatedPromoCard;
