import Link from 'next/link'
import React from 'react'
import MobNav from './MobNav'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between'>
        <div className='md:hidden lg:block w-[20%]'>
            <Link href="/" className='font-bold text-xl text-blue-500'>Social</Link>
        </div>
        <div className='hidden md:flex w-[50%] text-sm'>
          <div className='flex gap-6 text-gray-600'>
            <Link href="/" className='flex items-center gap-2'>
            <Image 
            src="/home.png" alt="logo" width={16} height={16} className='w-4 h-4'/>
            <span>Home</span>
            </Link>
            <Link href="/friends" className='flex gap-2'>
            <Image 
            src="/friends.png" alt="logo" width={16} height={16} className='w-4 h-4'/>
            <span>Freinds</span>
            </Link>
            <Link href="/stories" className='flex gap-2'>
            <Image 
            src="/stories.png" alt="logo" width={16} height={16} className='w-4 h-4'/>
            <span>Stories</span>
            </Link>
          </div>
        </div>
        <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
            <MobNav/>
        </div>
    </div>
  )
}

export default Navbar