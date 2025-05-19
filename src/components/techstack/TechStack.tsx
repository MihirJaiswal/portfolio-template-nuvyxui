'use client'
import React, { useState, useEffect } from 'react';
import { FaBolt, FaCloud, FaDesktop, FaSpider, } from 'react-icons/fa';
import { CiCloudOn, CiCloudOff  } from "react-icons/ci";
import Header from '../Header';
import SkillCard from './SkillCard';
import { skills } from '../../../constant/index';
import { IconClouds } from './IconCloud';
import { MotionDiv } from '../MotiionDiv';

interface Skill {
  name: string;
  description: string;
  image: string;
  link: string;
  type: string;
}

const TechStack: React.FC = () => {
  const [skillsList, setSkillsList] = useState<Skill[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [showSectionOne, setShowSectionOne] = useState<boolean>(true);

  useEffect(() => {
    setSkillsList(skills);
  }, []);

  const filterSkills = (tab: string) => {
    setSelectedCategory(tab);
    if (tab.length) setSkillsList(skills.filter((skill) => skill.type === tab));
    else setSkillsList(skills);
  };

  const toggleSections = () => {
    setShowSectionOne((prev) => !prev);
  };

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center min-h-screen mt-6"
      id='tech-stack'
    >
      <div className="text-center mb-8 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center space-x-4">
          <Header underlineColor="#ff9400" className='mb-0 md:mb-6'>Tech Stack</Header>
          <button onClick={toggleSections} className="text-4xl md:mb-6">
            {showSectionOne ? <CiCloudOff /> : <CiCloudOn />}
          </button>
        </div>
        <p className="text-xl text-gray-500 dark:text-gray-200 max-w-lg mx-auto hidden md:block">
          A list of my favorite tools and technologies that I use.
        </p>
      </div>

      {showSectionOne ? (
        <div className='section1'>
          <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
            {['', 'development', 'design', 'devops'].map((category) => (
              <button
                key={category}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-green-200 dark:bg-purple-200 text-green-800 dark:text-purple-800 border-2 border-blue-400 dark:border-purple-500'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => filterSkills(category)}
              >
                {category === '' && <FaBolt className="mr-1" />}
                {category === 'development' && <FaDesktop className="mr-1" />}
                {category === 'design' && <FaSpider className="mr-1" />}
                {category === 'devops' && <FaCloud className="mr-1" />}
                <span className="whitespace-nowrap">
                  {category === ''
                    ? 'All'
                    : category === 'development'
                    ? 'Web'
                    : category === 'design'
                    ? 'Design'
                    : 'Devops'}
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 gap-4 mb-8 mt-4 mx-auto">
            {skillsList.map((tool, index) => (
              <SkillCard
                key={index}
                name={tool.name}
                description={tool.description}
                image={tool.image}
                link={tool.link}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className='section2'>
         <IconClouds/>
        </div>
      )}
    </MotionDiv>
  );
};

export default TechStack;