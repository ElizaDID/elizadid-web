import React from 'react';

interface GithubIconProps {
  width?: string;
  height?: string;
}

const GithubIcon: React.FC<GithubIconProps> = ({ width = '24px', height = '24px' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="orangeRingGithub" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#EA580C', stopOpacity: 0.8 }} />
          <stop offset="50%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#EA580C', stopOpacity: 0.6 }} />
        </linearGradient>
      </defs>
      <path 
        d="M12 2C6.475 2 2 6.475 2 12c0 4.42 2.865 8.162 6.839 9.489.5.09.687-.218.687-.485 0-.238-.01-1.025-.015-1.865-2.782.595-3.368-1.225-3.368-1.225-.455-1.156-1.11-1.465-1.11-1.465-.908-.62.068-.608.068-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.089 2.911.835.09-.645.343-1.089.762-1.34-2.668-.305-5.467-1.332-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.304-.536-1.527.116-3.176 0 0 1.008-.322 3.302 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.046.137 3.003.403 2.292-1.552 3.3-1.23 3.3-1.23.653 1.649.241 2.872.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.922.43.37.823 1.102.823 2.222v3.293c0 .27.188.58.688.485C19.138 20.162 22 16.42 22 12c0-5.525-4.475-10-10-10z" 
        fill="url(#orangeRingGithub)"
      />
    </svg>
  );
};

export default GithubIcon;
