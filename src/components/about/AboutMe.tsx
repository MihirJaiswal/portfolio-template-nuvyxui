'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';

const AboutMe: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center min-h-screen space-y-12 px-6 py-8"
    >
      <div className="max-w-4xl mx-auto md:text-center space-y-6">
        <Header underlineColor="#ff9400" className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-center">About Me</Header>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          <span className="block md:inline mb-2">Since I was young, I've loved computers.</span> 
          <span className="block md:inline mb-2">I've also been pretty creative, spending my free time drawing and painting.</span> 
          <span className="block md:inline">This creativity comes in handy when I'm working on web applications and software, letting me express myself in cool and unique ways.</span>
        </p>
      </div>

      <div className="max-w-4xl mx-auto md:text-center space-y-6">
        <Header underlineColor="#ff9400" className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-center">My Hobbies</Header>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          <span className="block md:inline mb-2">Beyond software development, I enjoy playing video games, drawing, cooking, and listening to music.</span>
          <span className="block md:inline mb-2">I also love to read books and write stories in my spare time.</span>
          <span className="block md:inline">I love meeting new people and am a passionate public speaker, usually hosting events for my club in college.</span>
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
