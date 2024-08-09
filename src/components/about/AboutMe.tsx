import React from 'react'; 
import Header from '../Header';
import { Favourite } from './Favorite';
import { MotionDiv } from '../MotiionDiv'; 
import { Grid } from './Grid';
import { HiDownload } from "react-icons/hi";
import Intro from './Intro';

const ANIMATION_DURATION = 0.5;

const AboutMe: React.FC = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col space-y-8 px-7 pb-6 overflow-x-hidden max-w-4xl mx-auto"
    >
      <MotionDiv
        initial={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1, transition: { duration: ANIMATION_DURATION } }}
        className=" space-y-6"
      >
      </MotionDiv>
      <MotionDiv
        initial={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1, transition: { duration: ANIMATION_DURATION, delay: 0.1 } }}
      >
        <Intro/>
      </MotionDiv>
      
      <MotionDiv
        initial={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1, transition: { duration: ANIMATION_DURATION, delay: 0.4 } }}
        className="flex items-center gap-2 text-lg font-medium"
      >
        <a
          className="group bg-white px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 border border-gray-400 dark:border-gray-600 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/assests/resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </MotionDiv>
      <MotionDiv
        initial={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1, transition: { duration: ANIMATION_DURATION, delay: 0.1 } }}
      >
        <Grid/>
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
        </MotionDiv>
        <Favourite />
      </MotionDiv>
    </MotionDiv>
  );
};

export default AboutMe;
