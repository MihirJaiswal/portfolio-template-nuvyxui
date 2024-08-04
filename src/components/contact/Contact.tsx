'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UnderlinedText from '../UnderlineText';

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
    <div className="flex items-center justify-center min-h-[83vh] px-4">
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <motion.h2
          className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
      
         <p className='mb-6 leading-snug text-left text-3xl font-bold text-gray-900 dark:text-gray-100'>
            <UnderlinedText color='#e04d28'>Get in touch</UnderlinedText>
        </p>
        </motion.h2>

        <motion.div
          className="mb-4"
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
            className="mt-1 block w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
        </motion.div>

        <motion.div
          className="mb-4"
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
            className="mt-1 block w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
        </motion.div>

        <motion.div
          className="mb-6"
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
            className="mt-1 block w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            rows={4}
          />
        </motion.div>

        <motion.button
          type="submit"
          className="w-full py-2 px-4 bg-pink-500 dark:bg-cyan-500 text-white font-semibold rounded-md shadow-md hover:bg-pink-600 dark:hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
