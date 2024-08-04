import Education from '@/components/career/Education'
import Footer from '@/components/Footer'
import TopNav from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="bg-bg1 dark:bg-bg2">
        <TopNav/>
        <Education/>
        <Footer/>
    </div>
  )
}

export default page