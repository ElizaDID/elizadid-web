// RoadmapPrototype1.jsx
import React, { useEffect, useRef, useState } from 'react';
import './RoadmapPrototype1.css';
import { useInView } from 'react-intersection-observer';
import TerminalWindow from './TerminalWindow';
import TypewriterText from './TypewriterText';

const RoadmapPrototype1 = () => {
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
                setTimeout(() => setAnimationStep(1), 1000),  // Show prompt
                setTimeout(() => setAnimationStep(2), 3000),  // Show DID command
                setTimeout(() => setAnimationStep(3), 5000),  // Start generating
                setTimeout(() => setAnimationStep(4), 8000),  // Show keys
                setTimeout(() => setAnimationStep(5), 10000), // Show verification
                setTimeout(() => setAnimationStep(6), 13000)  // Show transaction
            ];

            timeoutRefs.current = timeouts;
        }

        return () => {
            timeoutRefs.current.forEach(clearTimeout);
        };
    }, [inView]);

    const getStatusClass = (step) => {
        return animationStep >= step ? 'active' : '';
    };

    return (
        <section className="roadmap-section" id="features">
            <div className="roadmap-header">
                <h2 className="roadmap-title">ElizaDID Roadmap</h2>
                <p className="roadmap-subtitle">Our journey to building privacy-first decentralized identity on Solana</p>
            </div>

            <div className="roadmap-phase">
                <div className="phase-indicator">
                    <div className="phase-number">1</div>
                    <div className="phase-line"></div>
                    <div className="phase-title">Foundation</div>
                </div>

                <div className={`prototype-container ${inView ? 'visible' : ''}`} ref={ref}>
                    <div className="prototype-visual">
                        <TerminalWindow>
                            {animationStep >= 1 && (
                                <div className="terminal-prompt">
                                    <span className="prompt-symbol">$</span>
                                    {animationStep >= 2 ? (
                                        <TypewriterText
                                            text="generate-did --network solana"
                                            typingSpeed={70}
                                            startDelay={0}
                                            className="terminal-command"
                                            showCursor={animationStep < 3}
                                        />
                                    ) : (
                                        <span className="terminal-cursor"></span>
                                    )}
                                </div>
                            )}

                            {animationStep >= 3 && (
                                <div className="terminal-output">
                                    <div className="generate-did-process">
                                        <div className="process-step">Generating cryptographic key pair...</div>
                                        <div className={`process-animation ${getStatusClass(3)}`}>
                                            <div className="circle-progress"></div>
                                        </div>
                                        <div className="process-step">Creating Solana compatible DID...</div>
                                        <div className="did-verification">
                                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                                <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                                                <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                            </svg>
                                            <span>Complete</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {animationStep >= 4 && (
                                <div className="did-keys">
                                    <div className="keys-header">Identity Generated Successfully:</div>
                                    <div className="key-pair">
                                        <div className="key-label">DID:</div>
                                        <div className="key-value">did:sol:devnet:3Eh5YvPFbQjuwFUs5mcACgD3ZQBAnWcpyJu4jbRKQysi</div>
                                    </div>
                                    <div className="key-pair">
                                        <div className="key-label">Public Key:</div>
                                        <div className="key-value">3Eh5YvPFbQjuwFUs5mcACgD3ZQBAnWcpyJu4jbRKQysi</div>
                                    </div>
                                    <div className="key-pair private">
                                        <div className="key-label">Private Key:</div>
                                        <div className="key-value">
                                            <div className="blurred-key">••••••••••••••••••••••••••••••••••••••••••••••••</div>
                                            <div className="key-protection">Secured locally</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {animationStep >= 5 && (
                                <div className="terminal-prompt verify-prompt">
                                    <span className="prompt-symbol">$</span>
                                    <TypewriterText
                                        text="verify-did --sign transaction"
                                        typingSpeed={70}
                                        startDelay={0}
                                        className="terminal-command"
                                        showCursor={animationStep < 6}
                                    />
                                </div>
                            )}

                            {animationStep >= 6 && (
                                <div className="transaction-output">
                                    <div className="transaction-status">
                                        <div className="status-indicator processing"></div>
                                        <span>Verifying DID signature...</span>
                                    </div>
                                    <div className="transaction-status success">
                                        <div className="status-indicator success"></div>
                                        <span>Signature verified!</span>
                                    </div>
                                    <div className="transaction-details">
                                        <div className="transaction-row">
                                            <span className="label">Network:</span>
                                            <span className="value">Solana Devnet</span>
                                        </div>
                                        <div className="transaction-row">
                                            <span className="label">Action:</span>
                                            <span className="value">Transfer</span>
                                        </div>
                                        <div className="transaction-row">
                                            <span className="label">Amount:</span>
                                            <span className="value highlight">1 SOL</span>
                                        </div>
                                        <div className="transaction-row">
                                            <span className="label">Status:</span>
                                            <span className="value success">CONFIRMED</span>
                                        </div>
                                        <div className="transaction-row">
                                            <span className="label">Transaction Hash:</span>
                                            <span className="value hash">4zr3E2qhqYHx8xeFQT8AHVx9R7K7rJRFjFeteNWNLmNrPJm7NQRBvAbQ3xssPNVhqnAEEPNr2EqACjFVL7LBHaFR</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </TerminalWindow>
                    </div>

                    <div className="prototype-info">
                        <h3 className="prototype-title">DID Identity Management</h3>
                        <p className="prototype-description">
                            The foundation of ElizaDID is built on decentralized identity (DID), giving users complete
                            control over their digital identity, secured by the Solana blockchain. Your DID becomes
                            your passport to interact with the platform and the broader ecosystem.
                        </p>
                        <div className="prototype-features">
                            <div className="feature-item">
                                <div className="feature-icon secure"></div>
                                <div className="feature-text">
                                    <h4>Secure By Design</h4>
                                    <p>Private keys remain with you at all times, never exposed</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon verify"></div>
                                <div className="feature-text">
                                    <h4>Verified Transactions</h4>
                                    <p>Agents verify your signatures without accessing sensitive data</p>
                                </div>
                            </div>
                        </div>
                        <div className="prototype-highlight">
                            <p>"Your decentralized identity, secured by Solana."</p>
                            <p>"Agent verifies your DID and interacts with the blockchain."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadmapPrototype1;