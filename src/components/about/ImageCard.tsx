import React from 'react';

interface ImageCardProps {
  imageUrl: string;
  rotation: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, rotation }) => {
  return (
    <div 
      className="relative"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="transition-transform duration-300 ease-in-out hover:animate-heartbeat">
        <img 
          className="md:w-48 md:h-48 w-24 h-24 object-cover rounded shadow-lg"
          src={imageUrl}
          alt="Project Image"
        />
      </div>
    </div>
  );
};

export default ImageCard;
