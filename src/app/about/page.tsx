import AboutMe from '@/components/about/AboutMe'
import TopNav from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="bg-bg1 dark:bg-bg2">
      <TopNav/>
      <AboutMe/>
    </div>
  )
}

export default page