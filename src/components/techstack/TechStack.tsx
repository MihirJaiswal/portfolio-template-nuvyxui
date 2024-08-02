'use client';
import React, { useState, useEffect } from 'react';
import { FaBolt, FaCloud, FaDesktop, FaSpider } from 'react-icons/fa';
import Header from '../Header';
import SkillCard from './SkillCard';
import { skills } from '../../../constant/index';
import { motion } from 'framer-motion';

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

  useEffect(() => {
    setSkillsList(skills);
  }, []);

  const filterSkills = (tab: string) => {
    setSelectedCategory(tab);
    if (tab.length) setSkillsList(skills.filter((skill) => skill.type === tab));
    else setSkillsList(skills);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center min-h-screen"
    >
      <div className="text-center mb-8 flex flex-col items-center justify-center">
        <Header underlineColor="#ff9400">Tech Stack</Header>
        <p className="text-xl text-gray-500 dark:text-gray-200 max-w-lg mx-auto">
          A list of my favorite tools and technologies that I use on a regular basis.
        </p>
      </div>

      <div className="flex flex-wrap justify-center space-x-2 space-y-2 mb-8">
  {['', 'development', 'design', 'devops'].map((category) => (
    <button
      key={category}
      className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${
        selectedCategory === category
          ? 'bg-green-200 text-green-800 border-2 border-blue-400'
          : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
      }`}
      onClick={() => filterSkills(category)}
    >
      {category === '' && <FaBolt className="mr-1" />}
      {category === 'development' && <FaDesktop className="mr-1" />}
      {category === 'design' && <FaSpider className="mr-1" />}
      {category === 'devops' && <FaCloud className="mr-1" />}
      <span>
        {category === ''
          ? 'All'
          : category === 'development'
          ? 'Web Development'
          : category === 'design'
          ? 'Web Design'
          : 'Devops'}
      </span>
    </button>
  ))}
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 mt-4">
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
    </motion.div>
  );
};

export default TechStack;
