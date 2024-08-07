'use client'
import ContactForm from '@/components/contact/Contact'
import Footer from '@/components/Footer';
import TopNav from '@/components/Navbar';
import React from 'react'

const page = () => {
    const handleFormSubmit = (data: { name: string; email: string; message: string }) => {
        console.log('Form submitted with data:', data);
        // Here you can handle the form submission, like sending data to a server
      };
  return (
    <div className="bg-bg1 xl:bg-bg5 dark:bg-bg2">
        <TopNav/>
         <div className='min-h-[83vh] overflow-hidden'>
         <ContactForm onSubmit={handleFormSubmit} />
         </div>
         <div className='bg-pink-100 dark:bg-gray-900'>
         <Footer/>
         </div>
    </div>
  )
}

export default page