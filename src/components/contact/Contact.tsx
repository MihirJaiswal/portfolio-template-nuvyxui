'use client'
import React, { useState, useEffect, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import UnderlinedText from '../UnderlineText';
import Image from 'next/image';
import { CardsCarousel } from './CardsCarousel';
import cat from '../../../public/assests/cat.webp'
import Header from '../Header';


type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const ORANGE = "#ff9400";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [allFieldsFilled, setAllFieldsFilled] = useState<boolean>(false);

  useEffect(() => {
    const { name, email, message } = formData;
    setAllFieldsFilled(!!(name && email && message));
  }, [formData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='px-7 max-w-4xl mx-auto mb-12' id='contact'>
       <Header underlineColor={ORANGE} emoji="📧" className='mt-12 mb-8'>
        Contact
      </Header>
      <div className="flex items-center justify-center h-content lg:h-full relative w-full px-4 overflow-hidden  bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 md:pl-6 rounded-xl">
      <motion.form
        action="https://formsubmit.co/jaiswalmihir.business@gmail.com"
        method="post"
        target="_blank"
        className="relative z-10 max-w-lg flex flex-col justify-center w-full p-6 md:pl-0 md:pr-8 pt-4 md:pt-6 md:rounded-l-2xl overflow-hidden pb-24 md:pb-10 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <motion.h2
          className="relative mb-8 pt-8 md:pt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center z-10 relative">
            <p className="leading-snug text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 dark:from-cyan-400 dark:to-blue-500 md:mb-4">
              <UnderlinedText color='#e04d28'>
                <span className='text-black dark:text-white hidden xl:block'>
                  See my work 👉
                </span>
              </UnderlinedText>
            </p>
            <p className="leading-snug text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 dark:from-cyan-400 dark:to-blue-500 md:mb-4">
              <UnderlinedText color='#e04d28'>
                <span className='text-black dark:text-white xl:hidden'>
                  Let&apos;s work together!
                </span>
              </UnderlinedText>
            </p>
          </div>
          <p className='relative z-10 text-gray-700 dark:text-gray-300 mt-3 leading-5 tracking-wide'>
            {allFieldsFilled ? "You are ready to go!" : " Let's start a project together!"}
          </p>
        </motion.h2>
        <motion.div
          className="relative z-10 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative flex items-center bg-white/80 dark:bg-gray-900 backdrop-blur-md px-4 py-2 rounded-lg shadow-inner border border-gray-300 dark:border-gray-600">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-300 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block w-full bg-transparent border-none focus:outline-none text-neutral-800 dark:text-gray-300 placeholder-neutral-500 dark:placeholder-neutral-200"
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
          <div className="relative flex items-center bg-white/80 dark:bg-gray-900 backdrop-blur-md px-4 py-2 rounded-lg shadow-inner border border-gray-300 dark:border-gray-600">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-300 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8l8 5 8-5v10z"/>
            </svg>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full bg-transparent border-none focus:outline-none text-neutral-800 dark:text-gray-300 placeholder-neutral-500 dark:placeholder-neutral-200"
              placeholder="Email"
            />
          </div>
        </motion.div>
        <motion.div
          className="relative z-10 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative flex items-start bg-white/80 dark:bg-gray-900 backdrop-blur-md px-4 py-2 rounded-lg shadow-inner border border-gray-300 dark:border-gray-600">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-300 mt-1 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h6v2H4v-2zm10 2l4 4v-8z"/>
            </svg>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="block w-full bg-transparent border-none focus:outline-none text-neutral-800 dark:text-gray-300 placeholder-neutral-500 dark:placeholder-neutral-200"
              placeholder="Message"
              rows={4}
            />
          </div>
        </motion.div>
        <motion.button
          type="submit"
          className="relative z-10 w-full py-3 px-6 bg-gradient-to-r text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-gradient-to-r from-teal-600 to-cyan-600 dark:hover:bg-gradient-to-r dark:from-purple-800 dark:via-purple-600 dark:to-pink-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>

        <div className='z-50'>
          <Image
            src={cat}
            alt="cat"
            width={500}
            height={500}
            quality={100}
            loading='lazy'
            placeholder='blur'
            className='absolute left-2 -bottom-9 z-10 w-36 md:hidden'
          />
        </div>
      </motion.form>
      <div className='hidden md:block z-0 w-[28rem]'>
        <CardsCarousel/>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
