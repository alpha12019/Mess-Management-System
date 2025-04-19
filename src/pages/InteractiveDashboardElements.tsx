import React, { useState } from 'react';

interface NotificationProps {
  message: string;
  isVisible: boolean;
}

export const FloatingNotification: React.FC<NotificationProps> = ({ message, isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-bounce">
      {message}
    </div>
  );
};

interface DarkModeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <button 
      onClick={onToggle} 
      className="fixed top-4 left-4 bg-white p-2 rounded-full shadow-md z-20 border border-gray-200 hover:bg-gray-100 transition-colors"
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDarkMode ? "🌞" : "🌙"}
    </button>
  );
};

interface InteractiveBannerProps {
  onInteract: () => void;
}

export const InteractiveBanner: React.FC<InteractiveBannerProps> = ({ onInteract }) => {
  return (
    <div 
      className="my-8 max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 transition-all hover:shadow-xl cursor-pointer"
      onClick={onInteract}
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">First-Time User? Get 10% Off!</h3>
          <p className="opacity-90">Use code FIRSTMEAL for a discount on your first meal plan subscription.</p>
        </div>
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors">
          Get Discount
        </button>
      </div>
    </div>
  );
};

interface StatCounterProps {
  onStatClick: (label: string, value: number | string) => void;
}

export const StatCounters: React.FC<StatCounterProps> = ({ onStatClick }) => {
  const stats = [
    { label: "Registered Students", value: 1250, icon: "👨‍🎓", color: "blue" },
    { label: "Active Mess Plans", value: 890, icon: "🍽️", color: "green" },
    { label: "Meals Served", value: 12500, icon: "🍛", color: "yellow" },
    { label: "Feedback Score", value: 4.8, icon: "⭐", color: "purple" }
  ];
  
  return (
    <div className="my-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={`bg-${stat.color}-50 border border-${stat.color}-100 rounded-lg p-4 flex flex-col items-center text-center transform transition-transform hover:scale-105 cursor-pointer`}
            onClick={() => onStatClick(stat.label, stat.value)}
          >
            <span className="text-3xl mb-2">{stat.icon}</span>
            <span className="text-2xl font-bold mb-1">{stat.value}</span>
            <span className="text-sm text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface MessQuizProps {
  onComplete: (score: number, total: number) => void;
}

export const MessQuiz: React.FC<MessQuizProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const questions: QuizQuestion[] = [
    {
      question: "What's the best way to provide feedback about mess food?",
      options: [
        "Complain to friends",
        "Use the feedback form in the student portal",
        "Skip meals",
        "Social media"
      ],
      correctAnswer: 1
    },
    {
      question: "How many days in advance should you apply for a rebate?",
      options: ["1 day", "3 days", "5 days", "7 days"],
      correctAnswer: 2
    },
    {
      question: "Which of these is NOT a valid mess option?",
      options: ["Mess 1", "Mess 2", "Mess 3", "Mess 4"],
      correctAnswer: 3
    }
  ];

  const handleOptionClick = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    setIsAnimating(true);
    
    setTimeout(() => {
      if (optionIndex === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      
      setTimeout(() => {
        setIsAnimating(false);
        setSelectedOption(null);
        
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowResult(true);
          onComplete(score + (optionIndex === questions[currentQuestion].correctAnswer ? 1 : 0), questions.length);
        }
      }, 1000);
    }, 500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  return (
    <div className="my-8 max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white py-4 px-6">
        <h3 className="text-xl font-bold">Mess Quiz Challenge</h3>
        <p className="text-sm opacity-90">Test your knowledge about the mess rules!</p>
      </div>
      
      {!showResult ? (
        <div className="p-6">
          <div className="flex justify-between mb-4 text-sm text-gray-600">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>Score: {score}</span>
          </div>
          
          <h4 className="text-lg font-medium mb-4">{questions[currentQuestion].question}</h4>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`w-full p-3 text-left rounded-md border transition-all ${
                  selectedOption === index
                    ? index === questions[currentQuestion].correctAnswer
                      ? 'bg-green-100 border-green-300'
                      : 'bg-red-100 border-red-300'
                    : 'border-gray-300 hover:bg-gray-50'
                } ${isAnimating ? 'transform scale-105' : ''}`}
                onClick={() => selectedOption === null && handleOptionClick(index)}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-6 text-center">
          <h4 className="text-xl font-bold mb-2">Your Score: {score}/{questions.length}</h4>
          <p className="text-gray-600 mb-4">
            {score === questions.length
              ? 'Perfect! You know your mess rules!'
              : score >= questions.length / 2
              ? 'Good job! You know most of the mess rules.'
              : 'You should review the mess rules!'}
          </p>
          <button
            onClick={resetQuiz}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

interface NewsTickerProps {
  news: string[];
}

export const NewsTicker: React.FC<NewsTickerProps> = ({ news }) => {
  return (
    <div className="bg-gray-800 text-white py-2 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap">
        {news.map((item, index) => (
          <span key={index} className="mx-4">• {item}</span>
        ))}
        {news.map((item, index) => (
          <span key={`repeat-${index}`} className="mx-4">• {item}</span>
        ))}
      </div>
    </div>
  );
}; 