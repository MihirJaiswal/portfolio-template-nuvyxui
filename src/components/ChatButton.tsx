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

  // Button animation variants
  const buttonVariants = {
    open: { 
      rotate: 0,
      scale: 1.1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    },
    closed: { 
      rotate: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    }
  };

  const chatBoxVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      y: 20,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    },
    visible: { 
      opacity: 1, 
      height: "24rem",
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 24,
        opacity: { duration: 0.2, delay: 0.1 }
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      y: 20,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 30,
        opacity: { duration: 0.15 }
      }
    }
  };

  const iconVariants = {
    open: { rotate: 180, transition: { duration: 0.4 } },
    closed: { rotate: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={toggleChat}
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg focus:outline-none"
        aria-label={isOpen ? "Close Chat" : "Open Chat"}
        variants={buttonVariants}
        animate={isOpen ? "open" : "closed"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          variants={iconVariants}
          animate={isOpen ? "open" : "closed"}
        >
          {isOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaCommentDots className="h-6 w-6" />
          )}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatBoxRef}
            variants={chatBoxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bottom-20 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg p-4 w-72 overflow-hidden origin-bottom-right"
          >
            <ChatBox />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatButton;