'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import homeSmileOutline from '@iconify-icons/solar/home-smile-outline';
import folderWithFilesOutline from '@iconify-icons/solar/folder-with-files-outline';
import doucmentAddOutline from '@iconify-icons/solar/document-add-outline';
import envelopeStarOutline from '@iconify-icons/solar/star-outline';
import { BiChevronDown } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { ModeToggle } from './Toggle';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const webLinks = [
  { name: "", path: "/", icon: <Icon icon={homeSmileOutline} width={20} height={20} /> }, 
  { name: "", path: "/about", icon: <FiUser size={20} /> }, 
];

const TopNav = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleLinks = () => setIsLinksOpen(!isLinksOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLinksOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full pt-3 z-50 relative">
      <nav className="mx-auto px-4 md:px-0 z-50 max-w-4xl">
        <ul className="flex items-center px-3 text-sm font-medium text-gray-800 rounded-full bg-white/90 shadow-gray-800/5 ring-1 dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5 backdrop-blur-lg shadow-xl h-14">
          <li className="hidden md:block">
            <Link href="/" passHref>
              <div className="relative px-3 py-3 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400">
                <Image src='/assests/pfp.webp' alt="User Icon" width={100} height={100} loading='lazy' className="w-10 h-10 rounded-full object-cover" />
              </div>
            </Link>
          </li>
          {webLinks.map((link) => (
            <li key={link.path} className="flex items-center">
              <Link href={link.path} passHref>
                <div className={`relative flex items-center justify-start transition hover:text-primary-500 dark:hover:text-primary-400 ${
                  pathname === link.path ? 'text-primary-600 dark:text-primary-400' : ''
                }`}>
                  <span className={`relative px-3 py-3 ${pathname === link.path ? 'bg-gray-200 dark:bg-white/10 rounded-full' : ''}`}>
                    {link.icon}
                  </span>
                  <span className="ml-1">{link.name}</span>
                  {pathname === link.path && (
                    <>
                      <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"></span>
                    </>
                  )}
                </div>
              </Link>
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
                <Link href="/tech-stack" passHref>
                <p className={`flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${pathname === '/tech-stack' ? 'bg-gray-100 dark:bg-gray-700 border-teal-500 dark:border-purple-500 border-2' : ''}`}>
                    <Icon icon={folderWithFilesOutline} width={18} height={18} className="mr-2" />
                    Tech Stack
                  </p>
                </Link>
                <Link href="/career" passHref>
                <p className={`flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${pathname === '/career' ? 'bg-gray-100 dark:bg-gray-700 border-teal-500 border dark:border-purple-400' : ''}`}>
                    <Icon icon={doucmentAddOutline} width={18} height={18} className="mr-2" />
                    Career
                  </p>
                </Link>
                <Link href="/contact" passHref>
                <p className={`flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${pathname === '/contact' ? 'bg-gray-100 dark:bg-gray-700 border-teal-500 border dark:border-purple-400' : ''}`}>
                    <Icon icon={envelopeStarOutline} width={18} height={18} className="mr-2" />
                    Contact
                  </p>
                </Link>
              </div>
            )}
          </li>
          <li className="flex-1"></li>
          <li className="flex items-center space-x-4">
            <Link href="https://github.com/MihirJaiswal" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
              <FaGithub size={24} className='text-gray-900 dark:text-gray-100' />
            </Link>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopNav;
