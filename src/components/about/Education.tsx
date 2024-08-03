'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';

const institutes = [
  {
    title: "Chameli Devi Group of Institutions",
    role: "B.Tech in Computer Science",
    skills: ["C", "C++", "JavaScript"],
    period: "2021-2025",
    logo: "path/to/logo.png",
  },
  {
    title: "Chameli Devi Group of Institutions",
    role: "B.Tech in Computer Science",
    skills: ["C", "C++", "JavaScript"],
    period: "2021-2025",
    logo: "path/to/logo.png",
  },
  {
    title: "Chameli Devi Group of Institutions",
    role: "B.Tech in Computer Science",
    skills: ["C", "C++", "JavaScript"],
    period: "2021-2025",
    logo: "path/to/logo.png",
  },
  // Add more institutes as needed
];

const TURQUOISE = "#06b6d4";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center space-y-12 px-6"
    >
      <div className="text-center max-w-4xl mx-auto">
        <Header underlineColor={TURQUOISE} emoji='🎓'>Education</Header>
      </div>

      <div className=" w-full flex flex-col md:flex-row items-center justify-center gap-4">
        {institutes.map((institute, index) => (
          <motion.div
            whileHover={{ y: -5 }}
            key={index}
            className="flex flex-col md:flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md w-full"
          >
            <img src={institute.logo} alt={institute.title} className="w-16 h-16 object-contain" />
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{institute.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{institute.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{institute.period}</p>
              <div className="flex space-x-2 mt-2">
                {institute.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full px-2 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
