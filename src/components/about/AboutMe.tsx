import React from 'react'; 
import Header from '../Header';
import { Favourite } from './Favorite';
import { MotionDiv } from '../MotiionDiv'; 
import { Grid } from './Grid';
import Resume from './Resume';

const ANIMATION_DURATION = 0.5;

const AboutMe: React.FC = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center space-y-8 px-7 pb-6 overflow-x-hidden"
    >
      <MotionDiv
        initial={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1, transition: { duration: ANIMATION_DURATION } }}
        className="max-w-4xl space-y-6"
      >
        <Header underlineColor="#ff9400" emoji='' className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-8">
          About Me
        </Header>
        <h2 className="md:text-xl font-sans leading-relaxed tracking-wide ">
          <span className="block md:inline">Since I was young, I've loved computers.</span> 
          <span>I've also been pretty <strong className='font-semibold'>creative</strong>, </span> 
          <span>spending my free time drawing and painting.</span> 
          <span className="hidden md:inline">This creativity helps me express myself more in web applications. 🎨</span>
        </h2> 
      </MotionDiv>
      <MotionDiv
        initial={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1, transition: { duration: ANIMATION_DURATION, delay: 0.1 } }}
      >
        <Grid />
      </MotionDiv>
      <MotionDiv
        initial={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1, transition: { duration: ANIMATION_DURATION, delay: 0.4 } }}
        className=""
      >
        <Resume />
      </MotionDiv>
      <MotionDiv
        initial={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1, transition: { duration: ANIMATION_DURATION, delay: 0.5 } }}
        className="w-full max-w-4xl"
      >
        <MotionDiv
          initial={{ translateY: 20, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1, transition: { duration: ANIMATION_DURATION, delay: 0.2 } }}
          className="block md:inline font-sans md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto"
        >
          <Header underlineColor="#ff9400" className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-3 mb-6">
            Hobbies
          </Header>
          <p className="mb-10 tracking-wide">
            Beyond software development, I enjoy drawing, cooking, reading books, and writing stories. ✨
          </p>
        </MotionDiv>
        <Favourite />
      </MotionDiv>
    </MotionDiv>
  );
};

export default AboutMe;
