import React, { useState, useEffect, CSSProperties, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FloatingNotification, 
  DarkModeToggle, 
  InteractiveBanner,
  StatCounters,
  MessQuiz,
  NewsTicker
} from './InteractiveDashboardElements';

const CommonDashboardSelector: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'login' | 'signup'>('dashboard');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [signupRole, setSignupRole] = useState('student');
  const [signupName, setSignupName] = useState('');
  const [signupRollNo, setSignupRollNo] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
  // Interactive elements state
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [showTooltip, setShowTooltip] = useState(-1);
  const tooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Promotional content for the carousel
  const promotions = [
    {
      title: "Special Meal This Friday!",
      description: "Join us for a special South Indian feast this Friday. Pre-register to secure your spot!",
      image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      buttonText: "Register Now",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800"
    },
    {
      title: "New Digital Payment System",
      description: "Now pay your mess bill online with our new digital payment system. Fast, secure, and convenient!",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      buttonText: "Learn More",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800"
    },
    {
      title: "Feedback Rewards",
      description: "Submit your feedback about mess food and get a chance to win meal coupons!",
      image: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      buttonText: "Submit Feedback",
      bgColor: "bg-green-100",
      textColor: "text-green-800"
    }
  ];

  // Functions for interactive elements
  const displayNotification = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleTooltipEnter = (index: number) => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }
    setShowTooltip(index);
  };

  const handleTooltipLeave = () => {
    tooltipTimeoutRef.current = setTimeout(() => {
      setShowTooltip(-1);
    }, 300);
  };

  const handleStatClick = (label: string, value: number | string) => {
    displayNotification(`${label}: ${value}`);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Rotate through promotions every 5 seconds
    const promoInterval = setInterval(() => {
      setCurrentPromoIndex((prevIndex) => (prevIndex + 1) % promotions.length);
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(promoInterval);
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
    };
  }, [promotions.length]);

  const userTypes = [
    { 
      title: 'Registered Student', 
      path: '/student/dashboard', 
      icon: '👨‍🎓', 
      description: 'Access menu, bills, feedback, and applications',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    { 
      title: 'Unregistered Student', 
      path: '/student', 
      icon: '🧑‍🎓', 
      description: 'View menu, bills, and register for a mess',
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    { 
      title: 'Mess Caretaker', 
      path: '/caretaker/dashboard', 
      icon: '👨‍🍳', 
      description: 'Manage menu, rebates, and special requests',
      color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100'
    },
    { 
      title: 'Mess Warden', 
      path: '/mess/warden/dashboard', 
      icon: '👨‍💼', 
      description: 'View feedback, approvals, and registrations',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would add actual authentication logic
    console.log('Login attempt with:', { loginEmail, loginPassword });
    alert('Login functionality would be implemented here.');
    // Clear form
    setLoginEmail('');
    setLoginPassword('');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would add actual registration logic
    if (signupPassword !== signupConfirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup attempt with:', { 
      signupEmail, 
      signupPassword, 
      signupRole,
      signupName,
      signupRollNo
    });
    alert('Signup functionality would be implemented here.');
    // Clear form
    setSignupEmail('');
    setSignupPassword('');
    setSignupConfirmPassword('');
    setSignupRole('student');
    setSignupName('');
    setSignupRollNo('');
  };

  const getBackgroundStyles = (): CSSProperties => {
    if (activeTab === 'login') {
      return {
        backgroundImage: 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    } else if (activeTab === 'signup') {
      return {
        backgroundImage: 'url("https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    } else {
      // Interactive background for dashboard
      return {
        position: 'relative' as const,
        overflow: 'hidden' as const,
        backgroundColor: darkMode ? '#121212' : '#f0f4f8',
      };
    }
  };

  // Calculate the parallax effect for the dashboard particles
  const getParallaxStyle = (index: number) => {
    if (activeTab !== 'dashboard') return {};
    
    const speed = index % 3 === 0 ? 0.02 : index % 3 === 1 ? 0.03 : 0.015;
    const xOffset = (mousePosition.x - windowDimensions.width / 2) * speed;
    const yOffset = (mousePosition.y - windowDimensions.height / 2) * speed;
    
    return {
      transform: `translate(${xOffset}px, ${yOffset}px)`,
    };
  };

  // Add the following after useState declarations at the top
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState({ score: 0, total: 0 });

  // Add the following function to handle quiz completion
  const handleQuizComplete = (score: number, total: number) => {
    setQuizScore({ score, total });
    setQuizCompleted(true);
    displayNotification(`Quiz completed! Score: ${score}/${total}`);
  };

  // Add news items for the ticker
  const newsItems = [
    "New vegetarian options available in Mess 1 starting next week",
    "Mess timings extended during exam period",
    "Special holiday menu announced for Independence Day",
    "Feedback survey now open - share your thoughts for a chance to win prizes",
    "Maintenance scheduled for Mess 2 kitchen this weekend"
  ];

  return (
    <div 
      className={`min-h-screen p-4 sm:p-6 lg:p-8 relative ${darkMode ? 'bg-gray-900 text-white' : ''}`}
      style={getBackgroundStyles()}
    >
      {/* Interactive Elements */}
      <FloatingNotification message={notificationMessage} isVisible={showNotification} />
      <DarkModeToggle isDarkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />

      {activeTab === 'dashboard' && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Interactive background elements */}
          {Array.from({ length: 15 }).map((_, index) => (
            <div 
              key={index}
              className="absolute rounded-full opacity-70 transition-transform duration-200 ease-out"
              style={{
                width: Math.random() * 80 + 30 + 'px',
                height: Math.random() * 80 + 30 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                backgroundColor: index % 4 === 0 ? '#4299e1' : 
                                index % 4 === 1 ? '#48bb78' : 
                                index % 4 === 2 ? '#ecc94b' : '#9f7aea',
                zIndex: -1,
                ...getParallaxStyle(index)
              }}
            />
          ))}
        </div>
      )}

      <div className={`${activeTab !== 'dashboard' ? 'bg-white/90 backdrop-blur-sm py-8 px-4 sm:px-6 rounded-xl shadow-xl max-w-4xl mx-auto' : ''} relative z-10`}>
        <h1 className={`text-2xl sm:text-3xl font-semibold mb-6 text-center ${darkMode && activeTab === 'dashboard' ? 'text-white' : ''}`}>
          Mess Management System
        </h1>
        
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'dashboard' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'login' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'signup' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setActiveTab('signup')}
            >
              Signup
            </button>
          </div>
        </div>
        
        {/* Dashboard View */}
        {activeTab === 'dashboard' && (
          <>
            {/* Promotional Carousel Banner */}
            <div className="mb-10 max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg">
              <div className="relative">
                {promotions.map((promo, index) => (
                  <div 
                    key={index}
                    className={`${promo.bgColor} p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between transition-opacity duration-500 ease-in-out ${index === currentPromoIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
                    style={{ zIndex: index === currentPromoIndex ? 1 : 0 }}
                  >
                    <div className="md:w-2/3 mb-4 md:mb-0 md:pr-6">
                      <h3 className={`text-xl font-bold mb-2 ${promo.textColor}`}>{promo.title}</h3>
                      <p className="text-gray-700">{promo.description}</p>
                      <button 
                        className={`mt-3 px-4 py-2 rounded-md bg-white ${promo.textColor} font-medium border hover:shadow-md transition-shadow`}
                        onClick={() => displayNotification(`Action triggered: ${promo.buttonText}`)}
                      >
                        {promo.buttonText}
                      </button>
                    </div>
                    <div className="md:w-1/3 h-32 md:h-40 relative overflow-hidden rounded-lg">
                      <img
                        src={promo.image}
                        alt={promo.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}

                {/* Indicator Dots */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {promotions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPromoIndex(index)}
                      className={`w-2 h-2 rounded-full ${index === currentPromoIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Promotional Banner */}
            <InteractiveBanner 
              onInteract={() => displayNotification("Promo code FIRSTMEAL applied for 10% discount!")} 
            />

            {/* Interactive Stats Counter */}
            <StatCounters onStatClick={handleStatClick} />

            {/* News Ticker */}
            <NewsTicker news={newsItems} />

            {/* Interactive Quiz */}
            {!quizCompleted && (
              <MessQuiz onComplete={handleQuizComplete} />
            )}

            {quizCompleted && (
              <div className="my-8 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-2">Thanks for taking the quiz!</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    You scored {quizScore.score} out of {quizScore.total}.
                  </p>
                  <button
                    onClick={() => setQuizCompleted(false)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Take Another Quiz
                  </button>
                </div>
              </div>
            )}

            <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto`}>
              Select your user type to access the appropriate dashboard and features.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {userTypes.map((type, index) => (
                <Link 
                  key={index} 
                  to={type.path}
                  className={`${darkMode ? 'bg-gray-800 border-gray-700 text-white' : type.color} border rounded-lg p-6 transition-all transform hover:scale-105 hover:shadow-md flex flex-col items-center text-center backdrop-blur-sm bg-opacity-90 relative group`}
                  style={{
                    ...getParallaxStyle(index + 5),
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                  onMouseEnter={() => handleTooltipEnter(index)}
                  onMouseLeave={handleTooltipLeave}
                  onClick={() => displayNotification(`Navigating to ${type.title} dashboard`)}
                >
                  <span className="text-4xl mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-transform">{type.icon}</span>
                  <h2 className="text-xl font-semibold mb-2">{type.title}</h2>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{type.description}</p>
                  {showTooltip === index && (
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 w-48 text-center">
                      Click to access the {type.title.toLowerCase()} dashboard
                      <div className="absolute w-3 h-3 bg-black transform rotate-45 left-1/2 -translate-x-1/2 bottom-[-6px]"></div>
                    </div>
                  )}
                </Link>
              ))}
            </div>

            {/* Featured Announcement */}
            <div className={`mt-12 max-w-6xl mx-auto ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-blue-100'} rounded-lg shadow-md overflow-hidden border`}>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-blue-500 text-white p-6 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-center">Featured Announcement</h3>
                </div>
                <div className="md:w-3/4 p-6">
                  <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : ''}`}>New Mess Management App Coming Soon!</h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    We're excited to announce that we're developing a mobile app for our mess management system. 
                    Stay tuned for updates on the release date and features.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Mobile App</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Coming Soon</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">New Features</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Ads */}
            <div className="mt-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Download Our App", desc: "Get mess updates on-the-go", icon: "📱", color: "purple" },
                { title: "Weekly Menu Updates", desc: "Never miss your favorite meal", icon: "🍲", color: "green" },
                { title: "Suggest a Meal", desc: "Share your meal ideas with us", icon: "💡", color: "yellow" }
              ].map((ad, index) => (
                <div 
                  key={index}
                  className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 rounded-lg shadow-sm border flex items-center cursor-pointer transform hover:scale-102 transition-transform`}
                  onClick={() => displayNotification(`${ad.title} clicked!`)}
                >
                  <div className={`w-12 h-12 rounded-full bg-${ad.color}-100 flex items-center justify-center mr-4`}>
                    <span className="text-xl">{ad.icon}</span>
                  </div>
                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-white' : ''}`}>{ad.title}</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{ad.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        
        {/* Login Form */}
        {activeTab === 'login' && (
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-center">Login to Your Account</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                Login
              </button>
            </form>
            <div className="mt-4 text-center text-sm">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <button 
                  className="text-blue-500 hover:underline" 
                  onClick={() => setActiveTab('signup')}
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        )}
        
        {/* Signup Form */}
        {activeTab === 'signup' && (
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-center">Create a New Account</h2>
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="signup-email">
                  Email Address
                </label>
                <input
                  id="signup-email"
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="signup-name">
                  Full Name
                </label>
                <input
                  id="signup-name"
                  type="text"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="signup-role">
                  Role
                </label>
                <select
                  id="signup-role"
                  value={signupRole}
                  onChange={(e) => setSignupRole(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="student">Student</option>
                  <option value="caretaker">Mess Caretaker</option>
                  <option value="warden">Mess Warden</option>
                </select>
              </div>
              {signupRole === 'student' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="signup-rollno">
                    Roll Number
                  </label>
                  <input
                    id="signup-rollno"
                    type="text"
                    value={signupRollNo}
                    onChange={(e) => setSignupRollNo(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              )}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="signup-password">
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="signup-confirm-password">
                  Confirm Password
                </label>
                <input
                  id="signup-confirm-password"
                  type="password"
                  value={signupConfirmPassword}
                  onChange={(e) => setSignupConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
              >
                Create Account
              </button>
            </form>
            <div className="mt-4 text-center text-sm">
              <p className="text-gray-600">
                Already have an account?{' '}
                <button 
                  className="text-blue-500 hover:underline" 
                  onClick={() => setActiveTab('login')}
                >
                  Log in
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonDashboardSelector; 