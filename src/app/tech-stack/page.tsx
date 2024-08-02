import Footer from '@/components/Footer'
import TopNav from '@/components/Navbar'
import TechStack from '@/components/techstack/TechStack'
import React from 'react'

const page = () => {
  return (
    <div className="bg-bg1 dark:bg-bg2">
        <TopNav/>
        <TechStack/>
        <Footer/>
    </div>
  )
}

export default page