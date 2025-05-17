'use client';
import { useState, useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import homeSmileOutline from '@iconify-icons/solar/home-smile-outline';
import folderWithFilesOutline from '@iconify-icons/solar/folder-with-files-outline';
import doucmentAddOutline from '@iconify-icons/solar/document-add-outline';
import envelopeStarOutline from '@iconify-icons/solar/star-outline';
import { BiChevronDown } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { ModeToggle } from './Toggle';
import Image from 'next/image';

// Section links instead of pages
const sectionLinks = [
  { name: "Home", id: "home", icon: <Icon icon={homeSmileOutline} width={20} height={20} /> }, 
  { name: "About", id: "about", icon: <FiUser size={20} /> }, 
];

// Additional links for dropdown
const dropdownLinks = [
  { name: "Tech Stack", id: "tech-stack", icon: <Icon icon={folderWithFilesOutline} width={18} height={18} /> },
  { name: "Career", id: "career", icon: <Icon icon={doucmentAddOutline} width={18} height={18} /> },
  { name: "Contact", id: "contact", icon: <Icon icon={envelopeStarOutline} width={18} height={18} /> }
];

const TopNav = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef(null);

  const toggleLinks = () => setIsLinksOpen(!isLinksOpen);

  // Handle scrolling to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsLinksOpen(false);
    }
  };

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at the top of the page
      if (currentScrollY < 100 || currentScrollY < lastScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      
      setLastScrollY(currentScrollY);
      
      // Determine active section based on scroll position
      const sections = [...sectionLinks, ...dropdownLinks].map(link => link.id);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // If the top of the section is near the top of the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle clicking outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLinksOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`w-full pt-3 z-50 fixed top-0 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="mx-auto px-4 md:px-0 z-50 max-w-4xl">
        <ul className="flex items-center px-3 text-sm font-medium text-gray-800 rounded-full bg-white/90 shadow-gray-800/5 ring-1 dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5 backdrop-blur-lg shadow-xl h-14">
          <li className="hidden md:block">
            <button onClick={() => scrollToSection('home')} className="relative px-3 py-3 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400">
              <Image src='/assests/pfp.webp' alt="User Icon" width={100} height={100} loading='lazy' className="w-10 h-10 rounded-full object-cover" />
            </button>
          </li>
          {sectionLinks.map((link) => (
            <li key={link.id} className="flex items-center">
              <button 
                onClick={() => scrollToSection(link.id)}
                className={`relative flex items-center justify-start transition hover:text-primary-500 dark:hover:text-primary-400 ${
                  activeSection === link.id ? 'text-primary-600 dark:text-primary-400' : ''
                }`}
              >
                <span className={`relative px-3 py-3 ${activeSection === link.id ? 'bg-gray-200 dark:bg-white/10 rounded-full' : ''}`}>
                  {link.icon}
                </span>
                {activeSection === link.id && (
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"></span>
                )}
              </button>
            </li>
          ))}
          <li className="relative z-50" ref={dropdownRef}>
            <button
              onClick={toggleLinks}
              className={`flex z-50 items-center px-3 py-3 rounded-md transition-colors ${
                isLinksOpen ? 'bg-gray-200 dark:bg-gray-800' : 'text-black dark:text-white'
              } hover:bg-gray-200 dark:hover:bg-gray-800`}
            >
              Links
              <BiChevronDown size={18} className="ml-2 z-50" />
            </button>
            {isLinksOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md z-50 border border-gray-300 dark:border-gray-600">
                {dropdownLinks.map((link) => (
                  <button 
                    key={link.id} 
                    onClick={() => scrollToSection(link.id)}
                    className={`flex w-full items-center px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      activeSection === link.id ? 'bg-gray-100 dark:bg-gray-700 border-teal-500 dark:border-purple-500 border-l-4' : ''
                    }`}
                  >
                    <span className="mr-2">{link.icon}</span>
                    {link.name}
                  </button>
                ))}
              </div>
            )}
          </li>
          <li className="flex-1"></li>
          <li className="flex items-center space-x-4">
            <a href="https://github.com/MihirJaiswal" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
              <FaGithub size={24} className='text-gray-900 dark:text-gray-100' />
            </a>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopNav;