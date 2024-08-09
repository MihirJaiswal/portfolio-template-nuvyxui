import AboutMe from '@/components/about/AboutMe'
import TopNav from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'

const page = () => {
  return (
    <div className="bg-bg1 dark:bg-bg8 md:dark:bg-bg7">
      <TopNav/>
      <AboutMe/>
      <Footer/>
    </div>
  )
}

export default page