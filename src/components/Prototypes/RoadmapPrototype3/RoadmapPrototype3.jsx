import React, { useEffect, useRef, useState } from 'react';
import './RoadmapPrototype3.css';
import { useInView } from 'react-intersection-observer';
import DefiNftVisualizer from './DefiNftVisualizer';

const RoadmapPrototype3 = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const [animationStep, setAnimationStep] = useState(0);
  const timeoutRefs = useRef([]);
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (inView) {
      // Clear any existing timeouts
      timeoutRefs.current.forEach(clearTimeout);
      timeoutRefs.current = [];
      
      // Set up the animation sequence
      const timeouts = [
        setTimeout(() => setAnimationStep(1), 1000),  // Show interface
        setTimeout(() => {
          setAnimationStep(2);
          scrollToBottom();
        }, 3000),  // Select action
        setTimeout(() => {
          setAnimationStep(3);
          scrollToBottom();
        }, 5000),  // Agent processing
        setTimeout(() => {
          setAnimationStep(4);
          scrollToBottom();
        }, 8000),  // Complete transaction
        setTimeout(() => {
          setAnimationStep(5);
          scrollToBottom();
        }, 10000)  // Show notification
      ];
      
      timeoutRefs.current = timeouts;
    }
    
    return () => {
      timeoutRefs.current.forEach(clearTimeout);
    };
  }, [inView]);
  
  const scrollToBottom = () => {
    if (containerRef.current) {
      const container = containerRef.current.querySelector('.tab-content.active');
      if (container) {
        setTimeout(() => {
          container.scrollTop = container.scrollHeight;
        }, 100);
      }
    }
  };

  return (
    <section className="roadmap-section">
      <div className="roadmap-phase">
        <div className="phase-indicator">
          <div className="phase-number">3</div>
          <div className="phase-line"></div>
          <div className="phase-title">DeFi & NFT Automation</div>
        </div>
        
        <div className={`prototype-container ${inView ? 'visible' : ''}`} ref={ref}>
          <div className="prototype-visual" ref={containerRef}>
            <DefiNftVisualizer animationStep={animationStep} />
          </div>
          
          <div className="prototype-info">
            <h3 className="prototype-title">DeFi & NFT Automation</h3>
            <p className="prototype-description">
              ElizaDID allows your AI agents to securely interact with DeFi protocols and NFT marketplaces 
              on your behalf. These agents can execute complex transactions with your pre-approved parameters,
              all while maintaining your privacy and security.
            </p>
            <div className="prototype-features">
              <div className="feature-item">
                <div className="feature-icon defi"></div>
                <div className="feature-text">
                  <h4>DeFi Integration</h4>
                  <p>Swap tokens, provide liquidity, and manage yield farming positions with ease</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon nft"></div>
                <div className="feature-text">
                  <h4>NFT Management</h4>
                  <p>Buy, sell, and verify NFT ownership using privacy-preserving proofs</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon automated"></div>
                <div className="feature-text">
                  <h4>Automated Execution</h4>
                  <p>Set parameters and let agents execute when conditions are optimal</p>
                </div>
              </div>
            </div>
            <div className="prototype-highlight">
              <p>"Your AI Agent handles DeFi and NFTs with ease."</p>
              <p>"Privacy-first automation, powered by Solana."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapPrototype3;
