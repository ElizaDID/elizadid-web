// TerminalWindow.jsx
import React from 'react';
import './TerminalWindow.css';

const TerminalWindow = ({ children }) => {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="terminal-button close"></div>
          <div className="terminal-button minimize"></div>
          <div className="terminal-button expand"></div>
        </div>
        <div className="terminal-title">ElizaDID Terminal</div>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;