'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { AiTwotoneThunderbolt, AiOutlineContacts } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { BsBook, BsCheckCircle } from 'react-icons/bs';
import { MdTimeline } from 'react-icons/md';
import { ModeToggle } from './Toggle';
import { usePathname } from 'next/navigation';
import HomeMobileNav from './MobileNav';

const webLinks = [
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" }
];

const TopNav = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    <nav className="bg-white shadow-lg dark:bg-gray-700 px-4 py-2">
      <div className="flex items-center justify-between max-w-screen-lg mx-auto">
        <div className="flex items-center justify-between w-full">
          <div className='md:hidden'>
            <HomeMobileNav />
          </div>
          <Link href="/" passHref>
            <div className="flex items-center justify-center ">
              <img src='/pfp.webp' alt="User Icon" className="w-10 h-10 rounded-full object-cover" />
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            {webLinks.map((link) => (
              <Link key={link.path} href={link.path} passHref>
                <p className={`px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors ${pathname === link.path ? 'bg-gray-200 dark:bg-gray-800' : ''}`}>
                  {link.name}
                </p>
              </Link>
            ))}
            <div className="relative" ref={dropdownRef}>
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
                    <p className={`flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${pathname === '/tech-stack' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
                      <AiTwotoneThunderbolt size={18} className="mr-2" />
                      Tech Stack
                    </p>
                  </Link>
                  <Link href="/career" passHref>
                    <p className={`flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${pathname === '/education' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
                      <BsBook size={18} className="mr-2" />
                        Career
                    </p>
                  </Link>
                  <Link href="/contact" passHref>
                    <p className={`flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${pathname === '/story-timeline' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
                      <AiOutlineContacts size={18} className="mr-2" />
                      Contact
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
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
