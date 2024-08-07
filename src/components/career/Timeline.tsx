'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';
import Image from 'next/image';

type TimelineItem = {
  title: string;
  role: string;
  skills?: string[];
  period: string;
  logo: string;
};

type TimelineCardProps = {
  title: string;
  role: string;
  skills?: string[];
  period: string;
  logo: string;
};

type TimelineSectionProps = {
  data: TimelineItem[];
  title: string;
  underlineColor: string;
  emoji: string;
};

const TimelineCard: React.FC<TimelineCardProps> = ({ title, role, skills, period, logo }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex  gap-8 items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md p-4 w-full"
  >
    <Image
      src={logo}
      alt={title}
      width={100}
      height={100}
      loading='lazy'
      className="w-16 h-16 object-contain"
    />
    <div className="flex flex-col md:flex-row justify-between items-center w-full">
      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {role}
        </p>
        {skills && skills.length > 0 && (
          <div className="flex space-x-2 mt-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full px-2 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-100 md:text-right hidden md:block">
        {period}
      </p>
    </div>
  </motion.div>
);

const TimelineSection: React.FC<TimelineSectionProps> = ({ data, title, underlineColor, emoji }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex flex-col space-y-4 px-6 max-w-4xl mx-auto"
  >
    <div className="max-w-4xl">
      <Header underlineColor={underlineColor} emoji={emoji}>
        {title}
      </Header>
    </div>
    <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center gap-4">
      {data.map((item, index) => (
        <TimelineCard
          key={index}
          title={item.title}
          role={item.role}
          skills={item.skills}
          period={item.period}
          logo={item.logo}
        />
      ))}
    </div>
  </motion.div>
);

export default TimelineSection;
