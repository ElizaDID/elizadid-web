import React from 'react';

interface TwitterIconProps {
  width?: string;
  height?: string;
}

const TwitterIcon: React.FC<TwitterIconProps> = ({ width = '24px', height = '24px' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="orangeRingTwitter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#EA580C', stopOpacity: 0.8 }} />
          <stop offset="50%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#EA580C', stopOpacity: 0.6 }} />
        </linearGradient>
      </defs>
      <path 
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
        fill="url(#orangeRingTwitter)"
      />
    </svg>
  );
};

export default TwitterIcon;
