// TypewriterText.jsx
import React, { useEffect, useState, useRef } from 'react';
import './TypewriterText.css';

const TypewriterText = ({ 
  text, 
  typingSpeed = 50, 
  startDelay = 0, 
  className = '', 
  showCursor = true 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const intervalRef = useRef(null);
  const cursorIntervalRef = useRef(null);
  
  useEffect(() => {
    let currentIndex = 0;
    
    // Clear any existing intervals
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    // Start typing after delay
    const typingTimeout = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(prev => prev + text.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalRef.current);
        }
      }, typingSpeed);
    }, startDelay);
    
    // Blinking cursor effect
    cursorIntervalRef.current = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => {
      clearTimeout(typingTimeout);
      clearInterval(intervalRef.current);
      clearInterval(cursorIntervalRef.current);
    };
  }, [text, typingSpeed, startDelay]);
  
  return (
    <span className={`typewriter ${className}`}>
      {displayedText}
      {showCursor && <span className={`cursor ${cursorVisible ? 'visible' : ''}`}>|</span>}
    </span>
  );
};

export default TypewriterText;