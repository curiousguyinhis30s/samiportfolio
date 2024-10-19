import React from 'react';

const AbstractBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="gaussian-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
            </filter>
          </defs>
          <g filter="url(#gaussian-blur)">
            <circle cx="25%" cy="30%" r="150" fill="#333333" opacity="0.4" />
            <circle cx="75%" cy="20%" r="100" fill="#444444" opacity="0.4" />
            <circle cx="60%" cy="70%" r="120" fill="#555555" opacity="0.3" />
            <circle cx="10%" cy="60%" r="130" fill="#666666" opacity="0.2" />
            <circle cx="50%" cy="50%" r="180" fill="#777777" opacity="0.1" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AbstractBackground;