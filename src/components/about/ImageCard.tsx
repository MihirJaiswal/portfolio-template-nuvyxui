import React from 'react';

interface ImageCardProps {
  imageUrl: string;
  rotation: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, rotation }) => {
  return (
    <div 
      className="relative transition-transform duration-300 ease-in-out hover:animate-wobble"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <img 
        className="md:w-48 md:h-48 w-24 h-24 object-cover rounded shadow-lg hover:scale-105"
        src={imageUrl}
        alt="Project Image"
      />
    </div>
  );
};

export default ImageCard;
