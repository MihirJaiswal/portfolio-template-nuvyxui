import Education from '@/components/career/Education'
import Work from '@/components/career/Work'
import Footer from '@/components/Footer'
import TopNav from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="bg-bg1 dark:bg-bg2">
        <TopNav/>
        <div className='mb-12'>
         <Work/>
        <Education/>
        </div>
        <Footer/>
    </div>
  )
}

export default page