import React from 'react';

const visitedPlaces = [
  { name: 'India', coordinates: [78, 22] },
  { name: 'Malaysia', coordinates: [101, 4] },
  { name: 'Indonesia', coordinates: [120, -5] },
  { name: 'Sri Lanka', coordinates: [80, 7] },
  { name: 'Australia', coordinates: [133, -25] },
  { name: 'Hong Kong', coordinates: [114, 22] },
  { name: 'Singapore', coordinates: [103, 1] },
  { name: 'Spain', coordinates: [-4, 40] },
  { name: 'Hungary', coordinates: [19, 47] },
  { name: 'France', coordinates: [2, 46] },
  { name: 'Luxembourg', coordinates: [6, 49] },
  { name: 'Vietnam', coordinates: [108, 14] },
  { name: 'Thailand', coordinates: [100, 15] },
  { name: 'Albania', coordinates: [20, 41] },
];

const WorldMap: React.FC = () => {
  return (
    <div className="w-full h-96 relative">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full"
        style={{ background: '#a4d4ff' }}
      >
        <path
          d="M781.68,324.4l-2.31,8.68l-12.53,4.23l-3.75-4.4l-1.82,0.5l3.4,13.12l5.09,0.57l6.79,2.57v2.57l3.11-0.57l4.53-6.27v-5.13l2.55-5.13l2.83,0.57l-3.4-7.13l-0.52-4.59L781.68,324.4L781.68,324.4M722.48,317.57l-0.28,2.28l6.79,11.41h1.98l14.15,23.67l5.66,0.57l2.83-8.27l-4.53-2.85l-0.85-4.56L722.48,317.57L722.48,317.57M789.53,349.11l2.26,2.77l-1.47,4.16v0.79h3.34l1.18-10.4l1.08,0.3l1.96,9.5l1.87,0.5l1.77-4.06l-1.77-6.14l-1.47-2.67l4.62-3.37l-1.08-1.49l-4.42,2.87h-1.18l-2.16-3.17l0.69-1.39l3.64-1.78l5.5,1.68l1.67-0.1l4.13-3.86l-1.67-1.68l-3.83,2.97h-2.46l-3.73-1.78l-2.65,0.1l-2.95,4.75l-1.87,8.22L789.53,349.11L789.53,349.11M814.19,330.5l-1.87,4.55l2.95,3.86h0.98l1.28-2.57l0.69-0.89l-1.28-1.39l-1.87-0.69L814.19,330.5L814.19,330.5M819.99,345.45l-4.03,0.89l-1.18,1.29l0.98,1.68l2.65-0.99l1.67-0.99l2.46,1.98l1.08-0.89l-1.96-2.38L819.99,345.45L819.99,345.45M753.17,358.32l-2.75,1.88l0.59,1.58l8.75,1.98l4.42,0.79l1.87,1.98l5.01,0.4l2.36,1.98l2.16-0.5l1.97-1.78l-3.64-1.68l-3.14-2.