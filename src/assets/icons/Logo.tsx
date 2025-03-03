import React from 'react';

interface LogoProps {
  width?: string;
  height?: string;
}

const Logo: React.FC<LogoProps> = ({ width = '70px', height = '70px' }) => {
  return (
    <svg 
      viewBox="0 0 120 120" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ width, height }}
    >
      <defs>
        <linearGradient id="orangeRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#EA580C', stopOpacity: 0.8 }} />
          <stop offset="50%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#EA580C', stopOpacity: 0.6 }} />
        </linearGradient>
      </defs>
      <circle 
        cx="60" 
        cy="60" 
        r="40" 
        fill="none" 
        stroke="url(#orangeRing)" 
        strokeWidth="8" 
        strokeLinecap="round"
        style={{ 
          strokeDasharray: 251, 
          strokeDashoffset: 251,
          animation: 'drawCircle 2s ease forwards'
        }}
      />
      <circle 
        cx="60" 
        cy="60" 
        r="43" 
        fill="none" 
        stroke="#F97316" 
        strokeWidth="2" 
        strokeOpacity="0.3"
        style={{ 
          strokeDasharray: 270, 
          strokeDashoffset: 270,
          animation: 'drawCircle 2s ease forwards 0.3s'
        }}
      />
      <path 
        d="M 30 60 Q 45 40 60 60 Q 75 80 90 60" 
        fill="none" 
        stroke="url(#orangeRing)" 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeOpacity="0.8"
        style={{ 
          strokeDasharray: 100, 
          strokeDashoffset: 100,
          animation: 'drawPath 1.5s ease forwards 0.6s'
        }}
      />
      <path 
        d="M 30 60 Q 45 80 60 60 Q 75 40 90 60" 
        fill="none" 
        stroke="url(#orangeRing)" 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeOpacity="0.8"
        style={{ 
          strokeDasharray: 100, 
          strokeDashoffset: 100,
          animation: 'drawPath 1.5s ease forwards 0.9s'
        }}
      />
    </svg>
  );
};

export default Logo;
