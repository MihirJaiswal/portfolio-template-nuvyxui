'use client';
import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import homeSmileOutline from '@iconify-icons/solar/home-smile-outline';
import folderWithFilesOutline from '@iconify-icons/solar/folder-with-files-outline';
import doucmentAddOutline from '@iconify-icons/solar/document-add-outline';
import envelopeStarOutline from '@iconify-icons/solar/star-outline';
import { FiUser } from 'react-icons/fi';
import { ModeToggle } from './Toggle';
import Image from 'next/image';

const sectionLinks = [
  { name: "Home", id: "home", icon: <Icon icon={homeSmileOutline} width={20} height={20} /> }, 
  { name: "About", id: "about", icon: <FiUser size={20} /> },
  { name: "Tech Stack", id: "tech-stack", icon: <Icon icon={folderWithFilesOutline} width={18} height={18} /> },
  { name: "Career", id: "career", icon: <Icon icon={doucmentAddOutline} width={18} height={18} /> },
  { name: "Contact", id: "contact", icon: <Icon icon={envelopeStarOutline} width={18} height={18} /> }
];

const TopNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100 || currentScrollY < lastScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    
      const sections = sectionLinks.map(link => link.id);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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

  return (
    <div className={`w-full pt-3 z-50 fixed top-0 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="mx-auto px-3 md:px-12 lg:px-7 z-50 max-w-4xl">
        <ul className="flex items-center px-3 text-sm font-medium text-gray-800 rounded-full bg-white/90 shadow-gray-800/5 ring-1 dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5 backdrop-blur-lg shadow-xl h-14">
          <li className="hidden md:block">
            <button onClick={() => scrollToSection('home')} className="relative px-3 py-3 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400 group">
              <Image src='/assests/pfp.webp' alt="User Icon" width={100} height={100} loading='lazy' className="w-10 h-10 rounded-full object-cover" />
              <div className="absolute top-14 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">Home</div>
            </button>
          </li>
          {sectionLinks.map((link) => (
            <li key={link.id} className="flex items-center">
              <button 
                onClick={() => scrollToSection(link.id)}
                className={`relative flex items-center justify-start transition hover:text-primary-500 dark:hover:text-primary-400 group ${
                  activeSection === link.id ? 'text-primary-600 dark:text-primary-400' : ''
                }`}
              >
                <span className={`relative px-3 py-3 ${activeSection === link.id ? 'bg-gray-200 dark:bg-white/10 rounded-full' : ''}`}>
                  {link.icon}
                </span>
                <div className="absolute top-14 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">{link.name}</div>
                {activeSection === link.id && (
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"></span>
                )}
              </button>
            </li>
          ))}
          <li className="flex-1"></li>
          <li className="flex items-center space-x-4">
            <a href="https://github.com/MihirJaiswal" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 relative group">
              <FaGithub size={24} className='text-gray-900 dark:text-gray-100' />
              <div className="absolute top-10 right-0 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">GitHub</div>
            </a>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopNav;