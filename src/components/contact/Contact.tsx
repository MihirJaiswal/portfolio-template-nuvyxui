'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UnderlinedText from '../UnderlineText';
import Image from 'next/image';
import { AppleCardsCarouselDemo } from './Image';


type ContactFormProps = {
  onSubmit: (data: ContactFormData) => void;
};

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex items-center justify-around h-[93vh] relative w-full md:p-8 overflow-hidden">
       {/*  <div className="absolute inset-0 bg-white opacity-70 dark:bg-black dark:opacity-70 pointer-events-none"></div> */}
       <motion.form
  onSubmit={handleSubmit}
  className="relative z-10 max-w-lg w-full p-8 md:px-10 md:pt-6 md:rounded-xl overflow-hidden pb-32 md:pb-10 mb-12 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg shadow-lg border border-gray-200 dark:border-gray-700"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
>
  <motion.h2
    className="relative mb-8 text-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.1 }}
  >
    <div className="flex items-center justify-center z-10 relative">
      <p className="leading-snug text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 dark:from-cyan-400 dark:to-blue-500 md:mb-4">
        <UnderlinedText color='#e04d28'><span className='text-black dark:text-white'>Let's Work Together</span></UnderlinedText>
      </p>
      <Image src="/assests/wave.gif" alt="Wave GIF" width={50} height={50} className="w-20 md:hidden" />
    </div>
    <p className='relative z-10 text-gray-700 dark:text-gray-300 mt-4 leading-5 tracking-wide'>
      Check out my work 👇
    </p>
  </motion.h2>

  {/* Name Field */}
  <motion.div
    className="relative z-10 mb-6"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2 }}
  >
    <div className="relative flex items-center bg-white/30 dark:bg-gray-800/30 backdrop-blur-md px-4 py-2 rounded-lg shadow-inner border border-gray-300 dark:border-gray-600">
      <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="block w-full bg-transparent border-none focus:outline-none text-neutral-800 dark:text-neutral-300 placeholder-neutral-500 dark:placeholder-neutral-500"
        placeholder="Name"
      />
    </div>
  </motion.div>

  {/* Email Field */}
  <motion.div
    className="relative z-10 mb-6"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.3 }}
  >
    <div className="relative flex items-center bg-white/30 dark:bg-gray-800/30 backdrop-blur-md px-4 py-2 rounded-lg shadow-inner border border-gray-300 dark:border-gray-600">
      <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8l8 5 8-5v10z"/></svg>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="block w-full bg-transparent border-none focus:outline-none text-neutral-800 dark:text-neutral-300 placeholder-neutral-500 dark:placeholder-neutral-500"
        placeholder="Email"
      />
    </div>
  </motion.div>

  {/* Message Field */}
  <motion.div
    className="relative z-10 mb-8"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4 }}
  >
    <div className="relative flex items-start bg-white/30 dark:bg-gray-800/30 backdrop-blur-md px-4 py-2 rounded-lg shadow-inner border border-gray-300 dark:border-gray-600">
      <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h6v2H4v-2zm10 2l4 4v-8z"/></svg>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        className="block w-full bg-transparent border-none focus:outline-none text-neutral-800 dark:text-neutral-300 placeholder-neutral-500 dark:placeholder-neutral-500"
        placeholder="Message"
        rows={4}
      />
    </div>
  </motion.div>

  <motion.button
    type="submit"
    className="relative z-10 w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-500 dark:from-cyan-500 dark:to-teal-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-gradient-to-r from-pink-600 to-purple-600 dark:hover:bg-gradient-to-r dark:from-cyan-600 dark:to-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-transform duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Send Message
  </motion.button>
        <div className='z-50'>
        <Image
         src="/assests/cat.png"
         alt=""
         width={500}
         height={500}
         quality={100}
         loading='lazy'
         className='absolute left-4 -bottom-10 w-40 md:hidden z-50 ' />
      </div>
      </motion.form>
    <div className='hidden md:block'>
    <AppleCardsCarouselDemo/>
    </div>
    </div>
  );
};

export default ContactForm;
