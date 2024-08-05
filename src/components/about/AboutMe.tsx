'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa'; 
import Header from '../Header';
import { ScatteredLine, ScatteredLine2 } from './ScatteredGrid';
import GitHubContributionGraph from './GitHubContributionGraph';
import { Favourite } from './Favorite';

const AboutMe: React.FC = () => {
  const images = [
    "https://thepaperkind.com/wp-content/uploads/2023/10/8219b-sketchbook-handwriting.webp",
    "/assests/pfp.webp",
    "https://images.pexels.com/photos/3640930/pexels-photo-3640930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://wallpapers.com/images/hd/aesthetic-food-pictures-907-x-900-fv9mjo37wrkjzjda.jpg",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center space-y-12 px-6 pb-6 overflow-x-hidden"
    >
      <div className="max-w-4xl space-y-6">
        <Header underlineColor="#ff9400" emoji='❤️' className="text-3xl font-bold text-gray-900 dark:text-gray-100">About Me</Header>
        <p className="md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          <span className="block md:inline mb-2">Since I was young, I've loved computers.</span> 
          <span className="block md:inline mb-2">I've also been pretty creative, spending my free time drawing and painting.</span> 
          <span className="block md:inline">This creativity helps me express myself more in web applications.</span>
        </p> 
      </div>
      <div className=''>
        <div className="hidden md:block">
          <ScatteredLine images={images} />
        </div>
        <div className="md:hidden">
          <ScatteredLine2 images={images} />
        </div>
      </div>
      <span className="block md:inline md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto ">
        Beyond software development, I enjoy anime, drawing, cooking, reading books and writing stories. ✨
      </span>
      <div className='max-w-4xl mx-auto'>
      <Header underlineColor="#ff9400" className="text-3xl font-bold text-gray-900 dark:text-gray-100 pb-6" >Days I code</Header>
       <div className='md:w-full w-80'>
       <GitHubContributionGraph/>
       </div>
      </div>
      <div className="mt-8">
        <a
          href="/assests/resume.pdf" 
          download
          className="bg-pink-500 dark:bg-green-500 text-white py-2 px-4 rounded-lg text-center hover:bg-pink-600 dark:hover:bg-teal-700 flex items-center justify-center space-x-2"
        >
          <FaDownload size={16} />
          <span>Download My Resume</span>
        </a>
      </div>
      
        <div className='w-full max-w-4xl'>
        <Header underlineColor="#ff9400" className="text-3xl font-bold text-gray-900 dark:text-gray-100 pb-3">My Best Projects</Header>
        <Favourite/>
        </div>
    </motion.div>
  );
};

export default AboutMe;
