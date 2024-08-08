import React from 'react';
import { FaDownload } from 'react-icons/fa'; 
import Header from '../Header';
import { ScatteredLine, ScatteredLine2 } from './ScatteredGrid';
import GitHubContributionGraph from './GitHubContributionGraph';
import { Favourite } from './Favorite';
import { aboutImages } from '../../../constant';
import { MotionDiv } from '../MotiionDiv';

const AboutMe: React.FC = () => {
  return (
    <MotionDiv
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
          <ScatteredLine images={aboutImages} />
        </div>
        <div className="md:hidden">
          <ScatteredLine2 images={aboutImages} />
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
          className="bg-pink-500 dark:bg-cyan-500 text-white py-2 px-4 rounded-lg text-center hover:bg-pink-600 dark:hover:bg-cyan-600 flex items-center justify-center space-x-2"
        >
          <FaDownload size={16} />
          <span>Download My Resume</span>
        </a>
      </div>
      
        <div className='w-full max-w-4xl'>
        <Header underlineColor="#ff9400" className="text-3xl font-bold text-gray-900 dark:text-gray-100 pb-3">Hobbies</Header>
        <Favourite/>
        </div>
    </MotionDiv>
  );
};

export default AboutMe;
