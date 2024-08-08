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
      className="flex flex-col items-center space-y-7 px-6 pb-6 overflow-x-hidden"
    >
      <MotionDiv
        initial={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1, transition: { duration: ANIMATION_DURATION } }}
        className="max-w-4xl space-y-6"
      >
        <Header underlineColor="#ff9400" emoji='❤️' className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          About Me
        </Header>
        <p className="md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          <span className="block md:inline mb-2">Since I was young, I've loved computers.</span> 
          <span className="block md:inline mb-2">I've also been pretty creative, spending my free time drawing and painting.</span> 
          <span className="block md:inline">This creativity helps me express myself more in web applications.</span>
        </p> 
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
        className="mt-8 md:hidden"
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
          className="block md:inline md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto"
        >
          <Header underlineColor="#ff9400" className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Hobbies
          </Header>
          <p className="mb-10 tracking-wide md:tracking-normal">
            Beyond software development, I enjoy anime, drawing, cooking, reading books, and writing stories. ✨
          </p>
        </MotionDiv>
        <Favourite />
      </MotionDiv>
    </MotionDiv>
  );
};

export default AboutMe;
