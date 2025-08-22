import React, { useState, useEffect } from 'react';

interface Offer {
  id: number;
  title: string;
  description: string;
  discount: string;
  originalPrice: string;
  discountedPrice: string;
  validUntil: string;
  icon: string;
  gradient: string;
  link: string;
}

const AnimatedOffers: React.FC = () => {
  const [currentOffer, setCurrentOffer] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const offers: Offer[] = [
    {
      id: 1,
      title: "Early Bird Special",
      description: "Book your monthly mess package before the 25th and get exclusive benefits",
      discount: "15% OFF",
      originalPrice: "₹2,500",
      discountedPrice: "₹2,125",
      validUntil: "Valid until 25th Dec",
      icon: "🌅",
      gradient: "from-yellow-400 via-orange-400 to-red-400",
      link: "/mess/recharge"
    },
    {
      id: 2,
      title: "Weekend Package",
      description: "Special weekend meals with continental and Indian fusion dishes",
      discount: "20% OFF",
      originalPrice: "₹800",
      discountedPrice: "₹640",
      validUntil: "Weekends only",
      icon: "🎉",
      gradient: "from-purple-400 via-pink-400 to-red-400",
      link: "/mess/menu"
    },
    {
      id: 3,
      title: "Referral Bonus",
      description: "Bring a friend and both get 10% off on your next month",
      discount: "10% OFF",
      originalPrice: "₹2,500",
      discountedPrice: "₹2,250",
      validUntil: "Always available",
      icon: "👥",
      gradient: "from-green-400 via-blue-400 to-purple-400",
      link: "/mess/registration"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [offers.length]);

  const currentOfferData = offers[currentOffer];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-4">
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <span>🎯</span>
            <span>Special Offers & Deals</span>
          </h2>
          <p className="text-white/90 text-sm mt-1">Limited time offers - Don't miss out!</p>
        </div>

        {/* Offers content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Main offer display */}
            <div className="relative">
              <div
                className={`relative bg-gradient-to-br ${currentOfferData.gradient} rounded-xl p-6 text-white overflow-hidden transition-all duration-500 ${
                  isHovered ? 'scale-105 shadow-2xl' : 'scale-100'
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className={`absolute -top-8 -right-8 w-20 h-20 bg-white/10 rounded-full transition-all duration-1000 ${
                    isHovered ? 'scale-200 rotate-180' : 'scale-100 rotate-0'
                  }`}></div>
                  <div className={`absolute -bottom-6 -left-6 w-16 h-16 bg-white/10 rounded-full transition-all duration-700 ${
                    isHovered ? 'scale-300 -rotate-90' : 'scale-100 rotate-0'
                  }`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-3 animate-bounce">{currentOfferData.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{currentOfferData.title}</h3>
                  <p className="text-white/90 mb-4">{currentOfferData.description}</p>
                  
                  {/* Price display */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm text-white/70 line-through">{currentOfferData.originalPrice}</div>
                      <div className="text-3xl font-bold">{currentOfferData.discountedPrice}</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                      {currentOfferData.discount}
                    </div>
                  </div>

                  {/* Validity */}
                  <div className="text-white/80 text-sm mb-4">{currentOfferData.validUntil}</div>

                  {/* Action button */}
                  <a
                    href={currentOfferData.link}
                    className="inline-block bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-105"
                  >
                    Claim Offer
                  </a>
                </div>

                {/* Shimmer effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-all duration-1000 ${
                  isHovered ? 'translate-x-full' : '-translate-x-full'
                }`}></div>
              </div>
            </div>

            {/* Offer list */}
            <div className="space-y-4">
              {offers.map((offer, index) => (
                <div
                  key={offer.id}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                    index === currentOffer
                      ? 'border-blue-500 bg-blue-50 scale-105 shadow-md'
                      : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:scale-102'
                  }`}
                  onClick={() => setCurrentOffer(index)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{offer.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{offer.title}</h4>
                      <p className="text-sm text-gray-600">{offer.description}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-xs text-gray-500 line-through">{offer.originalPrice}</span>
                        <span className="text-sm font-bold text-green-600">{offer.discountedPrice}</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{offer.discount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Offer indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentOffer(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentOffer ? 'bg-blue-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to offer ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedOffers;
