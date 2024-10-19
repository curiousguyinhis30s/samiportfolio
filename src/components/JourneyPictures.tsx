import React, { useState, useEffect } from 'react';

const images = [
  'https://i.postimg.cc/J4GDGLNC/DSC02945.jpg',
  'https://i.postimg.cc/cLtn5SCB/IMG-1571.jpg',
  'https://i.postimg.cc/xT4mRCfd/IMG-1620.jpg',
  'https://i.postimg.cc/V6m060RK/IMG-2348.jpg',
  'https://i.postimg.cc/8cn7tKVY/IMG-3843.jpg',
  'https://i.postimg.cc/Qtm9WNYh/IMG-4073.jpg',
  'https://i.postimg.cc/SRKXL0H8/IMG-6444.jpg',
  'https://i.postimg.cc/ZqkyGMyt/IMG-7114.jpg',
  'https://i.postimg.cc/DzqbnPqW/IMG-8846.jpg',
  'https://i.postimg.cc/3rL08RDZ/K20L0250.jpg'
];

const JourneyPictures: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  if (!imagesLoaded) {
    return (
      <div className="card rounded-xl shadow-lg transition-all duration-300 bg-black/30 backdrop-blur-md card-hover-effect overflow-hidden relative aspect-square w-full h-full flex items-center justify-center">
        <p className="text-white">Loading images...</p>
      </div>
    );
  }

  return (
    <div className="card rounded-xl shadow-lg transition-all duration-300 bg-black/30 backdrop-blur-md card-hover-effect overflow-hidden relative aspect-square w-full h-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Journey Picture ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default JourneyPictures;