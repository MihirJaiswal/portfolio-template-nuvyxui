'use client'
import React, { useState } from "react";
import ProjectCard from "./Project-Card";
import Header from "./Header";
import { LayoutGroup, motion } from "framer-motion";
import { projectsList } from "../../constant/index";

const ORANGE = "#ff9400";
const INITIAL_VISIBLE_COUNT = 5;

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_VISIBLE_COUNT);
  const allProjectsShown = visibleProjects >= projectsList.length;

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 5);
  };

  const handleCollapse = () => {
    setVisibleProjects(INITIAL_VISIBLE_COUNT);
  };

  return (
    <div className="flex flex-col items-start space-y-8 px-2 md:px-7" id="projects">
      <Header underlineColor={ORANGE} className="mt-10 mb-0">
        Projects
      </Header>
      <LayoutGroup>
        <div className="grid grid-cols-1 gap-4 mt-5 w-full">
          {projectsList.slice(0, visibleProjects).map((project) => (
            <motion.div whileHover={{ y: -5 }} key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                logo={project.logo}
                link={project.link}
                github={project.github}
                technologies={project.technologies}
                alertImage={project.alertImage}
                alertDescription={project.alertDescription}
                youtube={project.youtube}
              />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full mt-6">
          {!allProjectsShown ? (
            <button
              onClick={handleLoadMore}
              className="p-2 bg-teal-500 dark:bg-purple-500 text-white rounded hover:bg-pink-600 dark:hover:bg-purple-700 transition-colors duration-300"
            >
              Load More
            </button>
          ) : (
            <button
              onClick={handleCollapse}
              className="p-2 bg-teal-500 dark:bg-purple-500 text-white rounded hover:bg-pink-600 dark:hover:bg-purple-700 transition-colors duration-300"
            >
              Collapse
            </button>
          )}
        </div>
      </LayoutGroup>
    </div>
  );
};

export default Projects;