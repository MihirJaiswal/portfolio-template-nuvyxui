'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';
import Education from './Education';
import {ScatteredLine, ScatteredLine2} from './ScatteredGrid';

const AboutMe: React.FC = () => {
  const images = [
    "/mihir.jpg",
    "/pfp.webp",
    "https://images.pexels.com/photos/3640930/pexels-photo-3640930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://www.simlej.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdrone-1.d532eea8.jpg&w=1080&q=75",
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center min-h-screen space-y-12 px-6 py-8"
    >
      <div className="max-w-4xl mx-auto md:text-center space-y-6">
        <Header underlineColor="#ff9400" emoji='🙋🏻‍♂️' className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-center">About Me</Header>
        <p className="md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          <span className="block md:inline mb-2">Since I was young, I've loved computers.</span> 
          <span className="block md:inline mb-2">I've also been pretty creative, spending my free time drawing and painting.</span> 
          <span className="block md:inline">This creativity comes in handy when I'm working on web applications. ✨</span>
        </p> 
      </div>
      <div className="hidden md:block">
      <ScatteredLine images={images}  />
    </div>
    <div className="md:hidden">
      <ScatteredLine2 images={images} />
    </div>

      <div className="max-w-4xl mx-auto md:text-center space-y-6">
        <Header underlineColor="#ff9400" className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-center">My Hobbies</Header>
        <p className="md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          <span className="block md:inline mb-2">Beyond software development, I enjoy playing video games, drawing and cooking.</span>
          <span className="block md:inline mb-2">I also love to read books and write stories in my spare time.</span>
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
