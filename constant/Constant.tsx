import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import drawingImage from '/public/hobby/drawing.webp';
import drawingIcon from '/public/hobby/drawingicon.webp';
import cookingImage from '/public/hobby/cooking.webp';
import cookingIcon from '/public/hobby/cookingicon.webp';
import readingImage from '/public/hobby/reading.webp';
import readingIcon from '/public/hobby/readingicon.webp';
import writingImage from '/public/hobby/writing.webp';
import writingIcon from '/public/hobby/writingicon.webp';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiSass, SiMysql } from "react-icons/si";

export const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Mihir Jaiswal. All Rights Reserved.`,
  author: {
    name: "Mihir Jaiswal",
    accounts: [
      {
        url: "https://github.com/MihirJaiswal/MihirJaiswal",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://www.youtube.com/channel/UCANl98VUjfCZW7P2Tac1c6Q",
        label: "Youtube Channel",
        type: "youtube",
        icon: <FaYoutube />
      },
      {
        url: "https://www.linkedin.com/in/mihir-jaiswal-322898287/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "https://www.instagram.com/monty_draws_/",
        label: "Instagram Account",
        type: "purple",
        icon: <FaInstagram />
      },
      {
        url: "mailto:jaiswalmihir.business@gmail.com",
        label: "Mail Mihir",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};


export const getTagIcon = (tech: string) => {
  switch (tech) {
    case "React":
      return <FaReact className="text-blue-600" />;
    case "Next.js":
      return <SiNextdotjs className="text-black dark:text-white" />;
    case "Tailwind":
      return <SiTailwindcss className="text-teal-500" />;
    case "Node.js":
      return <FaNodeJs className="text-green-700" />;
    case "Express":
      return <SiExpress className="text-gray-800 dark:text-white" />;
    case "MongoDB":
      return <SiMongodb className="text-green-600" />;
    case "HTML":
      return <FaHtml5 className="text-orange-500" />;
    case "CSS":
      return <FaCss3Alt className="text-blue-400" />;
    case "JavaScript":
      return <FaJsSquare className="text-yellow-500" />;
    case "TypeScript":
      return <SiTypescript className="text-blue-500" />;
    case "SCSS":
      return <SiSass className="text-pink-500" />;
    case "MySQL":
      return <SiMysql className="text-blue-700" />;
    case "Python":
      return <FaPython className="text-blue-500" />;
    default:
      return null;
  }
};

export const hobbies = [
  {
    description: "Expressing emotions through art",
    title: "Drawing",
    src: drawingImage,
    src1: drawingIcon,
    ctaText: "see more",
    ctaLink: "https://www.instagram.com/monty_draws_/",
    content: () => (
      <p>
        Drawing is a creative process where you express emotions and ideas
        through various forms of art. It involves using different mediums
        like pencils, pens, and digital tools to create visual representations
        that convey thoughts and feelings.
      </p>
    ),
  },
  {
    description: "Experimenting with flavors and techniques",
    title: "Cooking",
    src: cookingImage,
    src1: cookingIcon,
    content: () => (
      <p>
        Cooking is the art of preparing food by combining ingredients and
        following recipes. It allows you to experiment with flavors and
        techniques, creating delicious and nutritious meals that can bring
        joy to yourself and others.
      </p>
    ),
  },
  {
    description: "Immersing in different worlds and ideas",
    title: "Reading Books",
    src: readingImage,
    src1: readingIcon,
    content: () => (
      <p>
        Reading books is a gateway to exploring new worlds, ideas, and
        perspectives. It allows you to immerse yourself in stories, gain
        knowledge, and expand your understanding of the world around you.
      </p>
    ),
  },
  {
    description: "Crafting stories that captivate the mind",
    title: "Writing Stories",
    src: writingImage,
    src1: writingIcon,
    content: () => (
      <p>
        Writing stories is a creative outlet where you can craft narratives
        that captivate the mind and evoke emotions. It involves developing
        characters, plots, and settings, weaving together a tale that resonates with readers.
      </p>
    ),
  },
];

//categories
// Add this to your constant/index.js file
import { FaBolt, FaCloud, FaDesktop, FaSpider } from 'react-icons/fa';

export const TECH_STACK_DATA = {
  title: "Tech Stack",
  description: "A list of my favorite tools and technologies that I use.",
  categories: [
    {
      key: '',
      label: 'All',
      icon: <FaBolt />
    },
    {
      key: 'development',
      label: 'Web',
      icon: <FaDesktop />
    },
    {
      key: 'design',
      label: 'Design',
      icon: <FaSpider />
    },
    {
      key: 'devops',
      label: 'Devops',
      icon: <FaCloud />
    }
  ]
};

