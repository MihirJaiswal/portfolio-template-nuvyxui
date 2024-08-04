'use client'
import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetTrigger,
  SheetContent
} from "@/components/ui/sheet";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { GiHamburgerMenu } from 'react-icons/gi';
import Footer from './Footer';

function HomeMobileNav() {
  const mobileLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Tech Stack", path: "/tech-stack" },
    { name: "Career", path: "/career" },
  ];

  const pathname = usePathname();

  return (
    <section className='w-full max-w-[264px] z-50'>
      <div className='flex flex-col md:hidden'>
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <GiHamburgerMenu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side='top' className='dark:bg-gray-900/80 bg-pink-100/80'>
            <div className='flex items-center gap-1'>
            </div>
            <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto border border-gray-400 dark:border-gray-700 rounded-md bg-bg1 dark:bg-bg2'>
              <section className='flex h-full flex-col gap-6 text-gray-950 dark:text-white text-center'>
                <div className='flex items-center justify-center flex-1 flex-col gap-6 text-center'>
                  {mobileLinks.map((link) => {
                    const isActive = pathname === link.path;
                    return (
                      <SheetClose asChild key={link.path}>
                        <Link href={link.path} className={cn(
                          "flex gap-4 items-center justify-center p-4 rounded-lg w-full max-w-60 text-center",
                          { 'bg-pink-300 dark:bg-gray-700 font-semibold': isActive }
                        )}>
                          <p className={cn('font-medium text-[18px] text-center', {'underline': isActive})}>{link.name}</p>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </div>
                <Footer/>
              </section>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}

export default HomeMobileNav;
