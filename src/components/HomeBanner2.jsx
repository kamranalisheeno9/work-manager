"use client"
import { useState, useEffect } from 'react';

const texts = ['Task Organizer', 'Work Manager', 'Productivity Booster'];

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setShowText(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1
        className={`text-4xl font-bold mb-4 transition-opacity duration-500 ${
          showText ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Welcome to our {texts[currentTextIndex]}
      </h1>
      <p className="text-lg text-gray-400">
        This is a powerful tool to manage your work tasks efficiently.
      </p>
    </div>
  );
};

export default Home;
