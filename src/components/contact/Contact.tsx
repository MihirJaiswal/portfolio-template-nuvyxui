'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UnderlinedText from '../UnderlineText';
import Image from 'next/image';
import Header from '../Header';

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
    <div className="flex items-center justify-between h-full md:min-h-[83vh] max-w-6xl mx-auto">
         <div className='hidden md:flex flex-col items-center justify-between gap-12 space-y-9'>
         <AnimatePresence>
            <motion.div
              key="robot-div"
              initial={{ y: ontoggle ? 0 : 10 }}
              animate={{ y: ontoggle ? 10 : 0 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              className='flex flex-col items-center justify-center'
            >
              <Image
                src='/assests/astronaut.svg'
                alt="space"
                width={500}
                height={500}
                className="w-1/2 hidden dark:block"
              />
              <Image
                src='/assests/robot.png'
                alt="space"
                width={500}
                height={500}
                quality={100}
                className="w-1/2 dark:hidden rounded-full bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200"
              />
           
            </motion.div>
          </AnimatePresence>
          <Header underlineColor="#ff9400" emoji='✨' className="text-xl font-bold text-gray-900 dark:text-gray-100 uppercase">let&apos;s work together</Header>
         </div>
      <motion.form
        onSubmit={handleSubmit}
        className="relative max-w-lg w-full p-8 md:rounded-xl md:shadow-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:bg-gradient-to-r dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 overflow-hidden pb-28 md:pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <div className="absolute inset-0 bg-white opacity-70 dark:bg-black dark:opacity-70 pointer-events-none"></div>
        
        <motion.h2
          className="relative text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center md:justify-center">
            <p className="leading-snug text-3xl font-bold text-gray-900 dark:text-gray-100">
              <UnderlinedText color='#e04d28'>Get in touch</UnderlinedText>
            </p>
            <img src="/assests/wave.gif" alt="Wave GIF" className="w-20" />
          </div>
        </motion.h2>

        <motion.div
          className="relative z-10 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm bg-white dark:bg-gray-300 text-neutral-800 dark:text-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300"
          />
        </motion.div>

        <motion.div
          className="relative z-10 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm bg-white dark:bg-gray-300 text-neutral-800 dark:text-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300"
          />
        </motion.div>

        <motion.div
          className="relative z-10 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm bg-white dark:bg-gray-300 text-neutral-800 dark:text-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300"
            rows={4}
          />
        </motion.div>

        <motion.button
          type="submit"
          className="relative z-10 w-full py-2 px-4 bg-pink-500 dark:bg-cyan-500 text-white font-semibold rounded-md shadow-md hover:bg-gradient-to-r from-pink-500 to-purple-500 dark:hover:bg-gradient-to-r dark:from-cyan-500 dark:to-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
        <div className='z-50'>
        <img src="/assests/cat.png" alt="" className='absolute left-4 -bottom-10 w-40 md:hidden z-50 ' />
      </div>
      </motion.form>

    </div>
  );
};

export default ContactForm;
