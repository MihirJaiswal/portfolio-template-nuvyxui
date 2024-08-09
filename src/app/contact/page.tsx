import ContactForm from '@/components/contact/Contact'
import Footer from '@/components/Footer';
import TopNav from '@/components/Navbar';
import React from 'react'

const page = () => {
  return (
    <div className="bg-bg1 dark:bg-bg8 md:dark:bg-bg7">
        <TopNav/>
         <div className='min-h-[83vh] overflow-hidden'>
          <ContactForm/>
         </div>
         <Footer/>
    </div>
  )
}

export default page