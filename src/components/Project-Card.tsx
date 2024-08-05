'use client';
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTimes, FaYoutube } from "react-icons/fa";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from "../components/ui/alert-dialog";
import UnderlinedText from "./UnderlineText";

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string;
  alertImage?: string;
  alertDescription?: string;
  blurHash?: string;
  link: string;
  github: string;
  technologies: string[];
  youtube? : string;
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

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, logo, alertImage, alertDescription, github, link, technologies, youtube }) => {
  const ORANGE = "#ff9400";
  return (
    <motion.div layout className="cursor-pointer w-full">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="flex items-start p-4 bg-white dark:bg-[#1E2533] rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img src={logo} alt={`${title} logo`} className="w-8 h-8 rounded-md" />
            <div className="flex flex-col ml-4 w-full">
              <div className="flex flex-col md:flex-row justify-between w-full">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg">{title}</span>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-900 dark:text-gray-200" />
                  </a>
                </div>
                <div className="flex space-x-2 mt-2 md:mt-0">
                  {technologies.map((tech, index) => (
                    <span key={index} className={`text-xs font-semibold px-2 py-1 rounded ${getTagColor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-200 mt-2">{description}</p>
            </div>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-3xl p-6 bg-bg1 dark:bg-bg2 flex flex-col justify-center gap-8 md:max-w-lg mx-auto">
          <AlertDialogHeader className="relative">
            <div className="flex items-center gap-4">
            <AlertDialogTitle className="text-2xl font-bold mb-4 uppercase"> <UnderlinedText color={ORANGE}>{title}</UnderlinedText> </AlertDialogTitle>
            {youtube && (
              <a href={youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutube className="w-8 h-8 text-red-600 mb-4" />
              </a>
            )}
            </div>
            <AlertDialogDescription className="text-gray-500 dark:text-gray-300">
              <img src={alertImage} alt={`${title} detailed`} className="w-full h-auto max-h-64 object-contain rounded-lg mb-4" />
              <p className="text-sm md:text-base text-gray-900 dark:text-gray-400 text-justify">{alertDescription}</p>
            </AlertDialogDescription>
        
          </AlertDialogHeader>
          <AlertDialogFooter>
          <div className="flex flex-wrap justify-between items-center w-full">
          <div className="flex  gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className={`text-xs font-semibold px-2 py-1 rounded ${getTagColor(tech)}`}>
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <button>
              <a href={link} target="_blank" rel="noopener noreferrer" className="md:px-4 py-2 text-sm rounded-lg font-bold text-black dark:text-white underline decoration-double">
                Live Demo
              </a>
            </button>
            <button>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-gray-800 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 transition" />
              </a>
            </button>
          </div>
          </div>
        </AlertDialogFooter>
          <AlertDialogCancel asChild>
              <div className="absolute top-0 right-0 ">
                <FaTimes className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500" />
              </div>
            </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </motion.div>
  );
};

export default ProjectCard;
