// RoadmapPrototype2.jsx
import React, { useEffect, useRef, useState } from 'react';
import './RoadmapPrototype2.css';
import { useInView } from 'react-intersection-observer';
import PrivacyVisualizer from './PrivacyVisualizer';

const RoadmapPrototype2 = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const [animationStep, setAnimationStep] = useState(0);
  const timeoutRefs = useRef([]);
  
  useEffect(() => {
    if (inView) {
      // Clear any existing timeouts
      timeoutRefs.current.forEach(clearTimeout);
      timeoutRefs.current = [];
      
      // Set up the animation sequence
      const timeouts = [
        setTimeout(() => setAnimationStep(1), 1000),  // Show encrypted data
        setTimeout(() => setAnimationStep(2), 3000),  // Start ZKP process
        setTimeout(() => setAnimationStep(3), 6000),  // Complete ZKP computation
        setTimeout(() => setAnimationStep(4), 8000),  // Show verification
        setTimeout(() => setAnimationStep(5), 10000)  // Show access granted
      ];
      
      timeoutRefs.current = timeouts;
    }
    
    return () => {
      timeoutRefs.current.forEach(clearTimeout);
    };
  }, [inView]);

  return (
    <section className="roadmap-section">
      <div className="roadmap-phase">
        <div className="phase-indicator">
          <div className="phase-number">2</div>
          <div className="phase-line"></div>
          <div className="phase-title">Privacy Protection</div>
        </div>
        
        <div className={`prototype-container ${inView ? 'visible' : ''}`} ref={ref}>
          <div className="prototype-visual">
            <PrivacyVisualizer animationStep={animationStep} />
          </div>
          
          <div className="prototype-info">
            <h3 className="prototype-title">Privacy Protection & ZKP</h3>
            <p className="prototype-description">
              ElizaDID protects your privacy through zero-knowledge proofs (ZKP), allowing you to prove facts 
              about your data without revealing the actual information. This enables secure verification 
              while maintaining complete data sovereignty.
            </p>
            <div className="prototype-features">
              <div className="feature-item">
                <div className="feature-icon encrypted"></div>
                <div className="feature-text">
                  <h4>Encrypted User Data</h4>
                  <p>Your sensitive information remains encrypted, inaccessible even to agents</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon zkp"></div>
                <div className="feature-text">
                  <h4>Zero-Knowledge Proofs</h4>
                  <p>Mathematically prove statements without revealing underlying data</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon permission"></div>
                <div className="feature-text">
                  <h4>Granular Permissions</h4>
                  <p>Precise control over what agents can verify and which tasks they can perform</p>
                </div>
              </div>
            </div>
            <div className="prototype-highlight">
              <p>"Prove without revealing, powered by zero-knowledge proofs."</p>
              <p>"Your data stays yours, always."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapPrototype2;