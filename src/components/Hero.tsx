import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header"; 
import Projects from "./Project";
import { HIGHLIGHTS } from '../../constant/index';
import { MotionDiv } from "./MotiionDiv";
import pfp from '../../public/assests/pfp.webp'

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";
const shakeVariants = {
  shake: {
    x: [0, -10, 10, -10, 10, 0, 0],
    transition: {
      x: {
        repeat: Infinity, 
        repeatType: "loop", 
        duration: 1.8, 
        ease: "easeInOut",
      },
    },
  },
};

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-20 max-w-full">
      <div className="flex flex-col md:flex-row items-center md:gap-8 justify-center space-y-8 md:space-y-0 md:space-x-8">
        <MotionDiv
          initial={{ translateX: -150, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1, transition: { duration: ANIMATION_DURATION } }}
          className="flex items-center justify-center mt-12"
        >
          <Image
            src={pfp}
            alt="Mihir's photo"
            width={220}
            height={220}
            loading="lazy"
            placeholder="blur"
            className="rounded-full w-36 h-36 object-cover"
          />
        </MotionDiv>
        <MotionDiv
          initial={{ translateX: 150, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1, transition: { duration: ANIMATION_DURATION } }}
          className="max-w-2xl"
        >
          <MotionDiv animate="shake" variants={shakeVariants}>
            <Header underlineColor={ORANGE} emoji="👋" className="face px-4 md:px-2">
              Hey!
            </Header>
          </MotionDiv>
          <h2 className="md:text-2xl font-normal md:leading-10 font-sans tracking-wide px-4 md:px-2">
            My name is <strong className="font-semibold">Mihir</strong> and I'm a{" "}
            <span className="whitespace-nowrap">Full Stack Developer and</span>{" "}
            <span className="whitespace-nowrap">an UI/UX designer&nbsp;</span>
            from <span className="whitespace-nowrap">India</span>
          </h2>
          <h2 className="md:text-2xl font-normal mt-4 leading-relaxed font-sans tracking-wide px-4 md:px-2">
            <span>This is my portfolio, where I showcase my projects and share the skills I've mastered along the way. 🚀</span>
          </h2>
        </MotionDiv>
      </div>
      <MotionDiv
        initial={{ translateY: 80, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1, transition: { delay: ANIMATION_DURATION - 0.1, duration: ANIMATION_DURATION } }}
        className="w-full mt-8 max-w-4xl"
      >
        <div className="max-w-3xl mx-auto">
          <div className="mt-8 p-3 border-l-4 border-teal-500 dark:border-purple-500 bg-[#e6f6fc] dark:bg-[#1E2533] rounded-sm font-medium">
            <p className="text-teal-600 dark:text-purple-400 font-bold">Highlights</p>
            <ul className="text-left pl-4 list-disc mt-2 font-normal">
              {HIGHLIGHTS.map((highlight, index) => (
                <li key={index} className="mb-1">
                  <Link href={highlight.href}>
                    <div className="text-green-950 dark:text-green-50">
                      {highlight.title}
                      {highlight.isNew && (
                        <span className="ml-1 inline-block bg-green-200 dark:bg-purple-200 text-green-800 dark:text-purple-800 text-xs px-2 py-1 rounded">
                          New
                        </span>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 mb-12">
          <Projects />
        </div>
      </MotionDiv>
    </div>
  );
};

export default Hero;
