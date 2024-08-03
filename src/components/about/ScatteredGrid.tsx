import React from 'react';
import ImageCard from './ImageCard';

interface ScatteredLineProps {
  images: string[];
}

export const ScatteredLine: React.FC<ScatteredLineProps> = ({ images }) => {
  const rotations: number[] = [-5, 3, -7, 4]; // Custom rotation values for each card

  return (
    <div className="flex justify-center gap-4">
      {images.slice(0, 4).map((imageUrl, index) => (
        <div className="w-full sm:w-1/3 md:w-1/4 p-2" key={index}>
          <ImageCard 
            imageUrl={imageUrl} 
            rotation={rotations[index]} 
          />
        </div>
      ))}
    </div>
  );
};

export const ScatteredLine2: React.FC<ScatteredLineProps> = ({ images }) => {
    const rotations: number[] = [-5, 3, -7, 4]; // Custom rotation values for each card
  
    return (
      <div className="flex justify-center gap-4">
        {images.slice(0, 3).map((imageUrl, index) => (
          <div className="w-full sm:w-1/3 md:w-1/4 p-2" key={index}>
            <ImageCard 
              imageUrl={imageUrl} 
              rotation={rotations[index]} 
            />
          </div>
        ))}
      </div>
    );
  };
  
  
