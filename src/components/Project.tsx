'use client'
import React, { useState } from "react";
import ProjectCard from "./Project-Card";
import Header from "./Header";
import { LayoutGroup, motion } from "framer-motion";
import { projectsList } from "../../constant/index";

const ORANGE = "#ff9400";

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  return (
    <div className="flex flex-col items-start space-y-8">
      <Header underlineColor={ORANGE} className="mt-0 mb-0">
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
              />
            </motion.div>
          ))}
        </div>
        {visibleProjects < projectsList.length && (
          <div className="flex justify-center items-center w-full">
            <button
              onClick={handleLoadMore}
              className=" p-2 bg-pink-500 dark:bg-cyan-700 text-white rounded hover:bg-pink-600 dark:hover:bg-cyan-600 transition-colors duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </LayoutGroup>
    </div>
  );
};

export default Projects;
