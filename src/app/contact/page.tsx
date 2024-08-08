import ContactForm from '@/components/contact/Contact'
import Submit from '@/components/contact/Submit';
import Footer from '@/components/Footer';
import TopNav from '@/components/Navbar';
import React from 'react'

const page = () => {
  return (
    <div className="bg-bg1 xl:bg-bg5 dark:bg-bg2">
        <TopNav/>
         <div className='min-h-[83vh] overflow-hidden'>
          <Submit/>
         </div>
         <div className='bg-pink-100 dark:bg-gray-900'>
         <Footer/>
         </div>
    </div>
  )
}

export default page