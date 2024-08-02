'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { AiTwotoneThunderbolt, AiOutlineClose } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { BsBook, BsCheckCircle } from 'react-icons/bs';
import { MdTimeline } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ModeToggle } from './Toggle';

const webLinks = [
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" }
];

const mobileLinks = [
  { name: "About", path: "/about" },
  { name: "Open Source", path: "/open-source" },
  { name: "Blog", path: "/blog" },
  { name: "Tech Stack", path: "/tech-stack" },
  { name: "Developer Story", path: "/story-timeline" }
];

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLinks = () => setIsLinksOpen(!isLinksOpen);

  return (
    <nav className="bg-white shadow-lg dark:bg-gray-700 px-4 py-2">
      <div className="flex items-center justify-between max-w-screen-lg mx-auto">
        <div className="flex items-center justify-between">
          <button className="md:hidden text-gray-500 dark:text-gray-300" onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
          <Link href="/" passHref>
            <div className="flex items-center justify-center ml-28 md:ml-0">
              <img src='/pfp.webp' alt="User Icon" className="w-10 h-10 rounded-full object-cover" />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {webLinks.map((link) => (
            <Link key={link.path} href={link.path} passHref>
              <p className="px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">{link.name}</p>
            </Link>
          ))}
          <div className="relative">
            <button
              onClick={toggleLinks}
              className="flex items-center px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              Links
              <BiChevronDown size={18} className="ml-2" />
            </button>
            {isLinksOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md z-10">
                <Link href="/tech-stack" passHref>
                  <p className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <AiTwotoneThunderbolt size={18} className="mr-2" />
                    Tech Stack
                  </p>
                </Link>
                <Link href="/open-source" passHref>
                  <p className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <BsBook size={18} className="mr-2" />
                    Open Source
                  </p>
                </Link>
                <Link href="/story-timeline" passHref>
                  <p className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <MdTimeline size={18} className="mr-2" />
                    Developer Story
                  </p>
                </Link>
                <Link href="/achievements" passHref>
                  <p className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <BsCheckCircle size={18} className="mr-2" />
                    Achievements
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="https://github.com/MihirJaiswal" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
            <FaGithub size={24} className='text-gray-900 dark:text-gray-100' />
          </Link>
          <ModeToggle/>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-700">
          <div className="flex flex-col p-4">
            {mobileLinks.map((link) => (
              <Link key={link.path} href={link.path} passHref>
                <p className="px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" onClick={toggleMenu}>
                  {link.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
