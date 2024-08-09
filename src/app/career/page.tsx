import Education from '@/components/career/Education'
import Work from '@/components/career/Work'
import Footer from '@/components/Footer'
import TopNav from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="bg-bg1 dark:bg-bg8 md:dark:bg-bg7">
        <TopNav/>
        <div className='mb-4 min-h-screen'>
         <Work/>
        <Education/>
        </div>
        <Footer/>
    </div>
  )
}

export default page