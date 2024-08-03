'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa'; // Import the download icon
import Header from '../Header';
import { ScatteredLine, ScatteredLine2 } from './ScatteredGrid';
import GitHubContributionGraph from './GitHubContributionGraph';

const AboutMe: React.FC = () => {
  const images = [
    "https://thepaperkind.com/wp-content/uploads/2023/10/8219b-sketchbook-handwriting.webp",
    "/pfp.webp",
    "https://images.pexels.com/photos/3640930/pexels-photo-3640930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://wallpapers.com/images/hd/aesthetic-food-pictures-907-x-900-fv9mjo37wrkjzjda.jpg",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center space-y-12 px-6 pb-6"
    >
      <div className="max-w-4xl mx-auto md:text-center space-y-6">
        <Header underlineColor="#ff9400" emoji='❤️' className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-center">About Me</Header>
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
        Beyond software development, I enjoy anime, drawing, cooking reading books and writing stories. ✨
      </span>
   {/*    <div className='max-w-4xl mx-auto md:text-center'>
      <Header underlineColor="#ff9400" className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-center" emoji='💻'>Days I code</Header>
       <div className='md:w-full w-80'>
       <GitHubContributionGraph/>
       </div>
      </div> */}
      
      {/* Resume Download Button */}
      <div className="mt-8">
        <a
          href="/resume.pdf" // Path to your resume file
          download
          className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center inline-block hover:bg-blue-600 flex items-center justify-center space-x-2"
        >
          <FaDownload size={16} /> {/* Add the download icon */}
          <span>Download My Resume</span>
        </a>
      </div>
    </motion.div>
  );
};

export default AboutMe;
