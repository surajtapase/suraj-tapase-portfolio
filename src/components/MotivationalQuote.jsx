import React from 'react';

const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "Act as if what you do makes a difference. It does. – William James",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "The way to get started is to quit talking and begin doing. – Walt Disney",
  "You have to dream before your dreams can come true. – A.P.J. Abdul Kalam",
];

const MotivationalQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  return (
    <div className="p-6 bg-gray-200  text-center">
      <p className="text-lg font-semibold text-gray-800 italic">{quote}</p>
    </div>
  );
};

export default MotivationalQuote;
