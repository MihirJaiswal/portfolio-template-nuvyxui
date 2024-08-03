'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

const institutes = [
  {
    title: "Chameli Devi Group of Institutions",
    role: "B.Tech in Artificial Intelligence and Data Science",
    skills: [],
    period: "2021-2025",
    logo: "/education/cdgi.png",
  },
  {
    title: "K.K. Convent Hr. Sec. School",
    role: "",
    skills: ["Chemistry", "Maths", "Physics"],
    period: "2018-2020",
    logo: "/education/kk.png",
  },
  {
    title: "St Jude's Higher Secondary School",
    role: "",
    skills: [],
    period: "2005-2017",
    logo: "/education/sjs.png",
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
      className="flex flex-col items-center space-y-12 px-6 max-w-4xl mx-auto mb-12 md:mb-32"
    >
      <div className="text-center max-w-4xl mx-auto">
        <Header underlineColor={TURQUOISE} emoji='🎓'>
          Education
        </Header>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-4">
        {institutes.map((institute, index) => (
          <motion.div
            whileHover={{ y: -5 }}
            key={index}
            className="flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md w-full"
          >
            <img
              src={institute.logo}
              alt={institute.title}
              className="w-16 h-16 object-contain"
            />
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {institute.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {institute.role}
                </p>
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
              <p className="text-sm text-gray-500 dark:text-gray-400 md:text-right">
                {institute.period}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
