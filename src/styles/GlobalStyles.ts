import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background: #1A1A3A;
    color: #FFFFFF;
    overflow-x: hidden;
    line-height: 1.6;
    position: relative;
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.7; }
    100% { transform: scale(1.1); opacity: 1; }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(60px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulseOrb {
    0% { transform: scale(1); opacity: 0.7; }
    100% { transform: scale(1.1); opacity: 1; }
  }

  @keyframes waveOrb {
    0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
    100% { transform: translate(-50%, -50%) scale(1.05) rotate(360deg); }
  }

  @keyframes rotateGlow {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }

  @keyframes ripple {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
    100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.4; }
  }

  @keyframes drawCircle {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes drawPath {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export default GlobalStyles;
