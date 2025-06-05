'use client'
import React, { useState, useEffect } from 'react';
import { FaBolt, FaCloud, FaDesktop, FaSpider, } from 'react-icons/fa';
import { CiCloudOn, CiCloudOff  } from "react-icons/ci";
import Header from '../Header';
import SkillCard from './SkillCard';
import { skills } from '../../../constant/index';
import { TECH_STACK_DATA } from '../../../constant/Constant';
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

  const getIconForCategory = (category: string) => {
    const categoryData = TECH_STACK_DATA.categories.find(cat => cat.key === category);
    return categoryData?.icon || <FaBolt />;
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
          <Header underlineColor="#ff9400" className='mb-0 md:mb-6'>{TECH_STACK_DATA.title}</Header>
          <button onClick={toggleSections} className="text-4xl md:mb-6">
            {showSectionOne ? <CiCloudOff /> : <CiCloudOn />}
          </button>
        </div>
        <p className="text-xl text-gray-500 dark:text-gray-200 max-w-lg mx-auto hidden md:block">
          {TECH_STACK_DATA.description}
        </p>
      </div>

      {showSectionOne ? (
        <div className='section1'>
          <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
            {TECH_STACK_DATA.categories.map((category) => (
              <button
                key={category.key}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category.key
                    ? 'bg-green-200 dark:bg-purple-200 text-green-800 dark:text-purple-800 border-2 border-blue-400 dark:border-purple-500'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => filterSkills(category.key)}
              >
                <span className="mr-1">{category.icon}</span>
                <span className="whitespace-nowrap">{category.label}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center md:grid md:grid-cols-2 gap-4 mb-8 mt-4 mx-auto">
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