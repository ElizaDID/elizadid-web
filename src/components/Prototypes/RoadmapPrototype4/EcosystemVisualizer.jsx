import React from 'react';
import './EcosystemVisualizer.css';

const EcosystemVisualizer = ({ animationStep }) => {
  return (
    <div className="ecosystem-visualizer">
      <div className="visualizer-header">
        <h3>ElizaDID Ecosystem Integration</h3>
        <p>Mainnet Launch Overview</p>
      </div>
      
      <div className="visualizer-content">
        {/* Central ElizaDID Section */}
        <div className={`central-node ${animationStep >= 1 ? 'active' : ''}`}>
          <div className="node-icon main-icon"></div>
          <div className="node-title">ElizaDID</div>
          <div className="node-status">Mainnet Ready</div>
        </div>
        
        {/* Ecosystem Nodes */}
        {animationStep >= 2 && (
          <div className="ecosystem-nodes">
            <div className="node-row">
              <div className="ecosystem-node">
                <div className="node-connection"></div>
                <div className="node-icon defi-icon"></div>
                <div className="node-name">DeFi Protocols</div>
              </div>
              
              <div className="ecosystem-node">
                <div className="node-connection"></div>
                <div className="node-icon nft-icon"></div>
                <div className="node-name">NFT Marketplaces</div>
              </div>
              
              <div className="ecosystem-node">
                <div className="node-connection"></div>
                <div className="node-icon dao-icon"></div>
                <div className="node-name">DAOs & Governance</div>
              </div>
            </div>
            
            <div className="node-row secondary-row">
              <div className="ecosystem-node">
                <div className="node-connection"></div>
                <div className="node-icon wallet-icon"></div>
                <div className="node-name">Wallet Integration</div>
              </div>
              
              <div className="ecosystem-node">
                <div className="node-connection"></div>
                <div className="node-icon api-icon"></div>
                <div className="node-name">Developer APIs</div>
              </div>
            </div>
          </div>
        )}
        
        {/* User Flow */}
        {animationStep >= 3 && (
          <div className="user-flow-container">
            <div className="section-title">
              <h4>Privacy-Preserved User Journey</h4>
            </div>
            
            <div className="user-flow-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-details">
                  <div className="step-title">Create DID</div>
                  <div className="step-description">Generate decentralized identity</div>
                </div>
              </div>
              
              <div className="step-connector"></div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-details">
                  <div className="step-title">Link Services</div>
                  <div className="step-description">Connect ecosystem services</div>
                </div>
              </div>
              
              <div className="step-connector"></div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-details">
                  <div className="step-title">Authorize Agents</div>
                  <div className="step-description">Set agent permissions</div>
                </div>
              </div>
              
              <div className="step-connector"></div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-details">
                  <div className="step-title">Interact</div>
                  <div className="step-description">Privacy-preserved execution</div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Statistics Section */}
        {animationStep >= 4 && (
          <div className="statistics-container">
            <div className="section-title">
              <h4>Mainnet Launch Metrics</h4>
            </div>
            
            <div className="statistics-grid">
              <div className="stat-box">
                <div className="stat-value">15+</div>
                <div className="stat-label">Integrated Protocols</div>
              </div>
              
              <div className="stat-box">
                <div className="stat-value">50ms</div>
                <div className="stat-label">Average Latency</div>
              </div>
              
              <div className="stat-box">
                <div className="stat-value">99.9%</div>
                <div className="stat-label">Privacy Preservation</div>
              </div>
              
              <div className="stat-box">
                <div className="stat-value">1000+</div>
                <div className="stat-label">TPS Capacity</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Mainnet CTA */}
        {animationStep >= 5 && (
          <div className="cta-container">
            <div className="cta-content">
              <h4>Join ElizaDID Mainnet</h4>
              <p>Be among the first to experience privacy-preserving AI agents on Solana mainnet</p>
              
              <div className="cta-buttons">
                <button className="primary-button">Join Waitlist</button>
                <button className="secondary-button">Developer Docs</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EcosystemVisualizer;
