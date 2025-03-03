import React, { useState } from 'react';
import './DefiNftVisualizer.css';

const DefiNftVisualizer = ({ animationStep }) => {
  const [selectedTab, setSelectedTab] = useState('defi');
  
  return (
    <div className="defi-nft-visualizer">
      <div className="platform-header">
        <div className="platform-logo">
          <span className="logo-text">ElizaDID</span>
          <span className="logo-badge">Agent</span>
        </div>
        
        <div className="platform-tabs">
          <button 
            className={`platform-tab ${selectedTab === 'defi' ? 'active' : ''}`}
            onClick={() => setSelectedTab('defi')}
          >
            DeFi
          </button>
          <button 
            className={`platform-tab ${selectedTab === 'nft' ? 'active' : ''}`}
            onClick={() => setSelectedTab('nft')}
          >
            NFT
          </button>
        </div>
      </div>
      
      <div className="platform-content">
        {/* DeFi Tab Content */}
        <div className={`tab-content ${selectedTab === 'defi' ? 'active' : ''}`}>
          <div className="defi-container">
            {animationStep >= 1 && (
              <>
                <div className="defi-balance-bar">
                  <div className="balance-display">
                    <div className="balance-label">Verified Balance:</div>
                    <div className="balance-value">
                      <div className="verified-tag">VERIFIED</div>
                      <div className="hidden-value">****** SOL</div>
                    </div>
                  </div>
                  
                  <div className="market-indicators">
                    <div className="indicator up">
                      <span className="indicator-name">SOL</span>
                      <span className="indicator-value">$103.42</span>
                      <span className="indicator-change">+2.4%</span>
                    </div>
                    <div className="indicator down">
                      <span className="indicator-name">USDC</span>
                      <span className="indicator-value">$1.00</span>
                      <span className="indicator-change">-0.01%</span>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            {animationStep >= 2 && (
              <div className="defi-action-panel">
                <div className="action-title">Swap Tokens</div>
                <div className="swap-container">
                  <div className="token-input">
                    <div className="token-selector">
                      <div className="token-icon sol"></div>
                      <div className="token-symbol">SOL</div>
                    </div>
                    <input type="text" className="token-amount" value="1.0" readOnly />
                  </div>
                  
                  <div className="swap-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </div>
                  
                  <div className="token-input">
                    <div className="token-selector">
                      <div className="token-icon usdc"></div>
                      <div className="token-symbol">USDC</div>
                    </div>
                    <input type="text" className="token-amount" value="103.42" readOnly />
                  </div>
                </div>
                
                <div className="swap-details">
                  <div className="detail-row">
                    <span className="detail-label">Price Impact:</span>
                    <span className="detail-value">0.05%</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Route:</span>
                    <span className="detail-value">Jupiter Aggregator</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Min Received:</span>
                    <span className="detail-value">102.91 USDC</span>
                  </div>
                </div>
                
                <button className="execute-button">
                  Execute via Agent
                </button>
              </div>
            )}
            
            {animationStep >= 3 && (
              <div className="agent-processing">
                <div className="processing-header">
                  <div className="processing-title">Agent Processing Transaction</div>
                  <div className="processing-subtitle">Using ZKP for privacy protection</div>
                </div>
                
                <div className="processing-steps">
                  <div className="processing-step completed">
                    <div className="step-indicator">✓</div>
                    <div className="step-label">Verifying identity</div>
                  </div>
                  <div className="processing-step completed">
                    <div className="step-indicator">✓</div>
                    <div className="step-label">Checking market conditions</div>
                  </div>
                  <div className="processing-step active">
                    <div className="step-indicator">
                      <div className="loading-spinner"></div>
                    </div>
                    <div className="step-label">Executing swap on best route</div>
                  </div>
                  <div className="processing-step">
                    <div className="step-indicator">4</div>
                    <div className="step-label">Confirming transaction</div>
                  </div>
                </div>
                
                <div className="processing-visualization">
                  <div className="processing-animation">
                    <div className="node user-node">
                      <div className="node-label">User</div>
                    </div>
                    <div className="connection user-agent"></div>
                    <div className="node agent-node">
                      <div className="node-label">Agent</div>
                    </div>
                    <div className="connection agent-dex"></div>
                    <div className="node dex-node">
                      <div className="node-label">DEX</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {animationStep >= 4 && (
              <div className="transaction-result">
                <div className="result-header success">
                  <svg className="success-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div className="result-title">Transaction Completed</div>
                </div>
                
                <div className="transaction-summary">
                  <div className="summary-row">
                    <span className="summary-label">Transaction:</span>
                    <span className="summary-value">Swap 1.0 SOL to USDC</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Amount Received:</span>
                    <span className="summary-value highlight">103.51 USDC</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Exchange Rate:</span>
                    <span className="summary-value">1 SOL = 103.51 USDC</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Network Fee:</span>
                    <span className="summary-value">0.000005 SOL</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Tx Hash:</span>
                    <span className="summary-value hash">5Wx...k9G7</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Privacy:</span>
                    <span className="summary-value protected">Protected</span>
                  </div>
                </div>
              </div>
            )}
            
            {animationStep >= 5 && (
              <div className="agent-notification">
                <div className="notification-header">
                  <svg className="notification-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <div className="notification-title">Agent Recommendation</div>
                </div>
                <div className="notification-content">
                  <p className="notification-message">
                    Your AI agent detected a 5% price increase in SOL. Do you want to set up an automated buy for the next dip?
                  </p>
                  <div className="notification-options">
                    <div className="notification-option">
                      <div className="option-icon create-rule"></div>
                      <div className="option-details">
                        <div className="option-name">Create Rule</div>
                        <div className="option-description">Buy 1 SOL when price drops 3%</div>
                      </div>
                    </div>
                    <div className="notification-option">
                      <div className="option-icon dismiss"></div>
                      <div className="option-details">
                        <div className="option-name">Dismiss</div>
                        <div className="option-description">Ignore this recommendation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* NFT Tab Content */}
        <div className={`tab-content ${selectedTab === 'nft' ? 'active' : ''}`}>
          <div className="nft-container">
            {animationStep >= 1 && (
              <div className="nft-gallery">
                <div className="gallery-header">
                  <div className="gallery-title">Your Verified NFTs</div>
                  <div className="verification-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    ZKP Verified
                  </div>
                </div>
                
                <div className="nft-grid">
                  <div className="nft-card selected">
                    <div className="nft-image nft1"></div>
                    <div className="nft-info">
                      <div className="nft-name">Solana Monkey #7821</div>
                      <div className="nft-collection">Solana Monkey Business</div>
                    </div>
                  </div>
                  <div className="nft-card">
                    <div className="nft-image nft2"></div>
                    <div className="nft-info">
                      <div className="nft-name">DeGod #4391</div>
                      <div className="nft-collection">DeGods</div>
                    </div>
                  </div>
                  <div className="nft-card">
                    <div className="nft-image nft3"></div>
                    <div className="nft-info">
                      <div className="nft-name">Okay Bear #2142</div>
                      <div className="nft-collection">Okay Bears</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {animationStep >= 2 && (
              <div className="nft-action-panel">
                <div className="action-title">Sell NFT</div>
                <div className="nft-details">
                  <div className="detail-row">
                    <span className="detail-label">Selected NFT:</span>
                    <span className="detail-value">Solana Monkey #7821</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Floor Price:</span>
                    <span className="detail-value">145 SOL</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Rarity Rank:</span>
                    <span className="detail-value highlight">Top 5%</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Marketplace:</span>
                    <span className="detail-value">Magic Eden</span>
                  </div>
                </div>
                
                <div className="price-input">
                  <div className="price-label">Set Price:</div>
                  <div className="price-field">
                    <input type="text" value="165" readOnly />
                    <div className="price-currency">SOL</div>
                  </div>
                </div>
                
                <button className="execute-button">
                  List via Agent
                </button>
              </div>
            )}
            
            {animationStep >= 3 && (
              <div className="agent-processing">
                <div className="processing-header">
                  <div className="processing-title">Agent Processing NFT Listing</div>
                  <div className="processing-subtitle">Using ZKP for ownership verification</div>
                </div>
                
                <div className="processing-steps">
                  <div className="processing-step completed">
                    <div className="step-indicator">✓</div>
                    <div className="step-label">Verifying ownership</div>
                  </div>
                  <div className="processing-step completed">
                    <div className="step-indicator">✓</div>
                    <div className="step-label">Generating ZKP proof</div>
                  </div>
                  <div className="processing-step active">
                    <div className="step-indicator">
                      <div className="loading-spinner"></div>
                    </div>
                    <div className="step-label">Interacting with marketplace</div>
                  </div>
                  <div className="processing-step">
                    <div className="step-indicator">4</div>
                    <div className="step-label">Finalizing listing</div>
                  </div>
                </div>
                
                <div className="processing-visualization">
                  <div className="processing-animation nft-flow">
                    <div className="node user-node">
                      <div className="node-label">User</div>
                    </div>
                    <div className="connection user-agent"></div>
                    <div className="node agent-node">
                      <div className="node-label">Agent</div>
                    </div>
                    <div className="connection agent-marketplace"></div>
                    <div className="node marketplace-node">
                      <div className="node-label">Marketplace</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {animationStep >= 4 && (
              <div className="transaction-result">
                <div className="result-header success">
                  <svg className="success-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div className="result-title">NFT Successfully Listed</div>
                </div>
                
                <div className="transaction-summary">
                  <div className="summary-row">
                    <span className="summary-label">NFT:</span>
                    <span className="summary-value">Solana Monkey #7821</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">List Price:</span>
                    <span className="summary-value highlight">165 SOL</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Marketplace:</span>
                    <span className="summary-value">Magic Eden</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Listing Fee:</span>
                    <span className="summary-value">0.000007 SOL</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Tx Hash:</span>
                    <span className="summary-value hash">9Tz...j4R2</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Ownership Privacy:</span>
                    <span className="summary-value protected">Protected by ZKP</span>
                  </div>
                </div>
              </div>
            )}
            
            {animationStep >= 5 && (
              <div className="agent-notification">
                <div className="notification-header">
                  <svg className="notification-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <div className="notification-title">Agent Recommendation</div>
                </div>
                <div className="notification-content">
                  <p className="notification-message">
                    Your NFT has received an offer of 160 SOL. This is below your listing price but 10% above floor. Accept?
                  </p>
                  <div className="notification-options">
                    <div className="notification-option">
                      <div className="option-icon accept"></div>
                      <div className="option-details">
                        <div className="option-name">Accept Offer</div>
                        <div className="option-description">Sell at 160 SOL (10% above floor)</div>
                      </div>
                    </div>
                    <div className="notification-option">
                      <div className="option-icon decline"></div>
                      <div className="option-details">
                        <div className="option-name">Decline</div>
                        <div className="option-description">Keep listing at 165 SOL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefiNftVisualizer;
