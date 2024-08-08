'use client'
import React from 'react'
import ContactForm from './Contact';

const Submit = () => {
    const handleFormSubmit = (data: { name: string; email: string; message: string }) => {
        console.log('Form submitted with data:', data);
      };
  return (
    <div>
        <ContactForm onSubmit={handleFormSubmit}/>
    </div>
  )
}

export default Submit