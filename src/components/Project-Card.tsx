'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string;
  blurHash?: string;
  link: string;
  github: string;
  technologies: string[];
}

const getTagColor = (tech: string): string => {
  switch (tech) {
    case "React":
      return "bg-blue-600 text-white";
    case "Next.js":
      return "bg-black text-white";
    case "Tailwind":
      return "bg-teal-500 text-white";
    case "Node.js":
      return "bg-green-700 text-white";
    case "Express":
      return "bg-gray-800 text-white";
    case "MongoDB":
      return "bg-green-600 text-white";
    case "HTML":
      return "bg-orange-500 text-white";
    case "CSS":
      return "bg-blue-400 text-white";
    case "JavaScript":
      return "bg-yellow-500 text-black";
    case "TypeScript":
      return "bg-blue-500 text-white";
    case "SCSS":
      return "bg-pink-500 text-white";
    default:
      return "bg-gray-600 text-white";
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, logo, github, link, technologies }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div layout className="cursor-pointer w-full">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div onClick={toggleOpen} className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <img
            src={logo}
            alt={`${title} logo`}
            className="w-8 h-8 rounded-md"
          />
          <div className="flex flex-col ml-4 w-full">
            <div className="flex flex-col md:flex-row justify-between w-full">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg">{title}</span>
                {mounted && (
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-900 dark:text-gray-200" />
                  </a>
                )}
              </div>
              <div className="flex space-x-2 mt-2 md:mt-0">
                {technologies.map((tech, index) => (
                  <span key={index} className={`text-xs font-semibold px-2 py-1 rounded ${getTagColor(tech)}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <AnimatePresence initial={false}>
              {!isOpen && (
                <motion.p
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-gray-500 dark:text-gray-200 mt-2"
                >
                  {description}
                </motion.p>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isOpen && (
                <motion.p
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-gray-500 dark:text-gray-200 mt-2"
                >
                  {description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;