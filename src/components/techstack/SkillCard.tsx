import React from 'react';
import { usePalette } from 'react-palette';
import Image from 'next/image';
import { MotionDiv } from '../MotiionDiv';

interface SkillCardProps {
  name: string;
  image: string;
  link: string;
  description: string;
  platform?: string; 
}
const SkillCard: React.FC<SkillCardProps> = ({ name, image, link, description, platform }) => {
  const { data, loading } = usePalette(image);

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      variants={item}
      transition={{ duration: 0.3 }}
      className="w-80 px-1" 
    >
      <MotionDiv whileHover={{ y: -5 }}>
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
          <div className="flex p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 w-full text-left hover:shadow-md transition-shadow">
            <div className="relative rounded-lg p-2 overflow-hidden flex-shrink-0">
              <div
                className="absolute inset-0"
                style={{ backgroundColor: data.lightVibrant, opacity: 0.25 }}
              ></div>
              {loading ? (
                <div className="w-10 h-10 bg-gray-200 rounded-md animate-pulse"></div>
              ) : (
                <Image 
                src={image} 
                alt={name}
                height={100} 
                width={100} 
                loading='lazy' 
                className="w-10 h-10 rounded-md" />
              )}
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <h3 className="font-bold text-md text-gray-900 dark:text-white">{name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-200">{description}</p>
              {platform && <p className="text-xs text-gray-400">{platform}</p>} 
            </div>
          </div>
        </a>
      </MotionDiv>
    </MotionDiv>
  );
};

export default SkillCard;
