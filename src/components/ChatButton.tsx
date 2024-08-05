'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaCommentDots, FaTimes } from 'react-icons/fa';
import ChatBox from './ChatBox';
import { motion, AnimatePresence } from 'framer-motion';

const ChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (chatBoxRef.current && !chatBoxRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleChat}
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg focus:outline-none"
        aria-label={isOpen ? "Close Chat" : "Open Chat"}
      >
        {isOpen ? (
          <FaTimes className="h-6 w-6" />
        ) : (
          <FaCommentDots className="h-6 w-6" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatBoxRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '24rem', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg p-4 w-72 mt-4 overflow-hidden"
          >
            <ChatBox />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatButton;
