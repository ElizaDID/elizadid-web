import React, { useEffect, useRef, useState } from 'react';
import './RoadmapPrototype4.css';
import { useInView } from 'react-intersection-observer';
import EcosystemVisualizer from './EcosystemVisualizer';

const RoadmapPrototype4 = () => {
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
        setTimeout(() => setAnimationStep(1), 1000),  // Show ecosystem overview
        setTimeout(() => setAnimationStep(2), 3000),  // Start connection animations
        setTimeout(() => setAnimationStep(3), 5000),  // Show user flow
        setTimeout(() => setAnimationStep(4), 8000),  // Display statistics
        setTimeout(() => setAnimationStep(5), 10000)  // Show join us CTA
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
          <div className="phase-number">4</div>
          <div className="phase-line"></div>
          <div className="phase-title">Mainnet Ecosystem Integration</div>
        </div>
        
        <div className={`prototype-container ${inView ? 'visible' : ''}`} ref={ref}>
          <div className="prototype-visual">
            <EcosystemVisualizer animationStep={animationStep} />
          </div>
          
          <div className="prototype-info">
            <h3 className="prototype-title">Mainnet Ecosystem Integration</h3>
            <p className="prototype-description">
              ElizaDID is designed to seamlessly integrate with Solana's vibrant ecosystem,
              connecting your privacy-preserving identity with DeFi protocols, NFT marketplaces,
              DAOs, and other dApps. Our mainnet launch will bring these capabilities to users worldwide.
            </p>
            <div className="prototype-features">
              <div className="feature-item">
                <div className="feature-icon ecosystem"></div>
                <div className="feature-text">
                  <h4>Ecosystem Connectivity</h4>
                  <p>Integration with major Solana protocols and applications</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon developer"></div>
                <div className="feature-text">
                  <h4>Developer Tools</h4>
                  <p>Comprehensive SDKs and APIs for seamless integration</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon scalability"></div>
                <div className="feature-text">
                  <h4>Mainnet-Ready Scalability</h4>
                  <p>Built to handle thousands of users and transactions per second</p>
                </div>
              </div>
            </div>
            <div className="prototype-highlight">
              <p>"A privacy-first platform integrated with Solana's ecosystem."</p>
              <p>"Ready for Mainnet, ready for you."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapPrototype4;
