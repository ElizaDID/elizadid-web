// PrivacyVisualizer.jsx
import React from 'react';
import './PrivacyVisualizer.css';

const PrivacyVisualizer = ({ animationStep }) => {
  return (
    <div className="privacy-visualizer">
      <div className="privacy-header">
        <h3>Zero-Knowledge Proof Demonstration</h3>
        <div className="task-description">
          Task: Prove wallet balance {'>'} 10 SOL without revealing exact amount
        </div>
      </div>
      
      <div className="visualization-container">
        {/* User Data Section */}
        <div className="user-section">
          <div className="section-label">User Data (Private)</div>
          <div className="data-container">
            <div className={`encrypted-data ${animationStep >= 1 ? 'show' : ''}`}>
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="data-row">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i} className="data-bit">{Math.round(Math.random())}</span>
                  ))}
                </div>
              ))}
              <div className="actual-value">
                <span className="value-label">Actual Balance:</span>
                <span className="value-amount">42.75 SOL</span>
              </div>
            </div>
          </div>
          <div className={`user-action ${animationStep >= 1 ? 'show' : ''}`}>
            <div className="action-button">
              Authorize ZKP: Balance {'>'} 10 SOL
            </div>
          </div>
        </div>
        
        {/* ZKP Process Section */}
        <div className={`zkp-process ${animationStep >= 2 ? 'active' : ''}`}>
          <div className="zkp-steps">
            <div className={`zkp-step ${animationStep >= 2 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <div className="step-description">Generate cryptographic commitment</div>
            </div>
            <div className={`zkp-step ${animationStep >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <div className="step-description">Create mathematical circuit</div>
            </div>
            <div className={`zkp-step ${animationStep >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <div className="step-description">Compute ZK proof</div>
            </div>
          </div>
          
          <div className={`zkp-animation ${animationStep >= 2 ? 'active' : ''}`}>
            <div className="circuit-visualization">
              {animationStep >= 2 && (
                <>
                  <svg className="circuit-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F97316" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#F97316" stopOpacity="0.2" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                    
                    {/* Input nodes */}
                    <circle cx="30" cy="50" r="8" className="node input-node" />
                    <circle cx="30" cy="100" r="8" className="node input-node" />
                    <circle cx="30" cy="150" r="8" className="node input-node" />
                    
                    {/* Hidden layer nodes */}
                    <circle cx="150" cy="40" r="8" className="node hidden-node" />
                    <circle cx="150" cy="80" r="8" className="node hidden-node" />
                    <circle cx="150" cy="120" r="8" className="node hidden-node" />
                    <circle cx="150" cy="160" r="8" className="node hidden-node" />
                    
                    {/* Output node */}
                    <circle cx="270" cy="100" r="8" className="node output-node" />
                    
                    {/* Connections */}
                    <path d="M38 50 L142 40" className={`connection ${animationStep >= 2 ? 'animate' : ''}`} style={{ animationDelay: '0.1s' }} />
                    <path d="M38 50 L142 80" className={`connection ${animationStep >= 2 ? 'animate' : ''}`} style={{ animationDelay: '0.2s' }} />
                    <path d="M38 50 L142 120" className={`connection ${animationStep >= 2 ? 'animate' : ''}`} style={{ animationDelay: '0.3s' }} />
                    
                    <path d="M38 100 L142 40" className={`connection ${animationStep >= 2 ? 'animate' : ''}`} style={{ animationDelay: '0.4s' }} />
                    <path d="M38 100 L142 80" className={`connection ${animationStep >= 2 ? 'animate' : ''}`} style={{ animationDelay: '0.5s' }} />
                    <path d="M38 100 L142 160" className={`connection ${animationStep >= 2 ? 'animate' : ''}`} style={{ animationDelay: '0.6s' }} />
                    
                    <path d="M38 150 L142 80" className={`connection ${animationStep >= 2 ? 'animate' : ''}`} style={{ animationDelay: '0.7s' }} />
                    <path d="M38 150 L142 120" className={`connection ${animationStep >= 2 ? 'animate' : ''}`} style={{ animationDelay: '0.8s' }} />
                    <path d="M38 150 L142 160" className={`connection ${animationStep >= 2 ? 'animate' : ''}`} style={{ animationDelay: '0.9s' }} />
                    
                    <path d="M158 40 L262 100" className={`connection ${animationStep >= 3 ? 'animate' : ''}`} style={{ animationDelay: '1.0s' }} />
                    <path d="M158 80 L262 100" className={`connection ${animationStep >= 3 ? 'animate' : ''}`} style={{ animationDelay: '1.1s' }} />
                    <path d="M158 120 L262 100" className={`connection ${animationStep >= 3 ? 'animate' : ''}`} style={{ animationDelay: '1.2s' }} />
                    <path d="M158 160 L262 100" className={`connection ${animationStep >= 3 ? 'animate' : ''}`} style={{ animationDelay: '1.3s' }} />
                    
                    {/* Labels */}
                    <text x="10" y="50" className="node-label">Balance</text>
                    <text x="10" y="100" className="node-label">Threshold</text>
                    <text x="10" y="150" className="node-label">Private Key</text>
                    <text x="280" y="100" className="node-label">Proof</text>
                  </svg>
                </>
              )}
            </div>
            
            {animationStep >= 3 && (
              <div className="mathematical-formula">
                <div className="formula-text">ZKP = Σ(H(Ci) * G + ri * H)</div>
              </div>
            )}
          </div>
        </div>
        
        {/* Verification Section */}
        <div className="agent-section">
          <div className="section-label">Agent (Verifier)</div>
          <div className="verification-container">
            {animationStep >= 4 && (
              <div className="verification-process">
                <div className="verification-animation">
                  <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                    <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                  </svg>
                </div>
                <div className="verification-text">ZKP Verified</div>
                <div className="verification-details">
                  <div className="detail-item">
                    <span className="detail-label">Statement:</span>
                    <span className="detail-value">Balance {'>'} 10 SOL</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Result:</span>
                    <span className="detail-value success">TRUE</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Actual Amount:</span>
                    <span className="detail-value hidden">HIDDEN</span>
                  </div>
                </div>
              </div>
            )}
            
            {animationStep >= 5 && (
              <div className="access-granted">
                <div className="access-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <div className="access-text">Access Granted</div>
                <div className="access-subtext">Privacy Preserved</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyVisualizer;