import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const subtleGlow = keyframes`
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.9;
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  perspective: 1000px;

  @media (max-width: 768px) {
    padding: 80px 20px;
    min-height: 100vh;
  }
`;

export const HeroBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  filter: blur(5px);
  opacity: 0.8;
`;

export const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(26, 26, 58, 0.8) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(26, 26, 58, 0.8) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.2;
  pointer-events: none;
`;

export const Orb = styled.div`
  position: absolute;
  width: 800px;
  height: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgba(234, 88, 12, 0.2) 0%,
    rgba(249, 115, 22, 0.1) 50%,
    transparent 100%
  );
  border-radius: 50%;
  box-shadow: 0 0 100px rgba(249, 115, 22, 0.3);
  animation: ${subtleGlow} 5s infinite ease-in-out;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: 90%;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      circle,
      rgba(234, 88, 12, 0.1) 0%,
      rgba(249, 115, 22, 0.05) 50%,
      transparent 100%
    );
    border-radius: 50%;
    filter: blur(20px);
  }

  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

export const Glow = styled.div`
  position: absolute;
  width: 900px;
  height: 900px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgba(249, 115, 22, 0.3) 0%,
    rgba(234, 88, 12, 0.2) 30%,
    transparent 70%
  );
  border-radius: 50%;
  opacity: 0.5;
  filter: blur(10px);

  @media (max-width: 768px) {
    width: 450px;
    height: 450px;
  }
`;

export const Ripple = styled.div`
  position: absolute;
  width: 700px;
  height: 700px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid rgba(249, 115, 22, 0.3);
  border-radius: 50%;
  opacity: 0.6;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    border: 2px solid rgba(249, 115, 22, 0.3);
  }

  &::before {
    transform: scale(1.2);
    opacity: 0.4;
  }
  
  &::after {
    transform: scale(1.4);
    opacity: 0.2;
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  animation: ${fadeIn} 1s ease-out;
`;

export const HeroTitle = styled.h1`
  font-size: 7rem;
  font-weight: 900;
  color: #f97316;
  margin-bottom: 30px;
  letter-spacing: -2px;
  text-shadow: 0 0 20px rgba(249, 115, 22, 0.5);
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
    letter-spacing: -1px;
  }
`;

export const TitleHighlight = styled.span`
  background: linear-gradient(90deg, #f97316, #ff8f50, #f97316);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 4s infinite linear;
  display: inline-block;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.7rem;
  font-weight: 300;
  color: #d0d0e0;
  margin-bottom: 40px;
  max-width: 800px;
  line-height: 1.6;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
`;

export const CtaButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 50px;
  background: linear-gradient(135deg, #f97316, #ea580c);
  color: #fff;
  font-weight: 600;
  font-size: 1.3rem;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(249, 115, 22, 0.8);
  position: relative;
  overflow: hidden;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, #ea580c, #d14a04);
    box-shadow: 0 10px 30px rgba(249, 115, 22, 0.9);
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg);
    transition: all 0.3s ease;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }

  .button-text {
    margin-right: 10px;
    position: relative;
    z-index: 1;
  }

  .button-icon {
    font-size: 1.4rem;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 1;
  }

  &:hover .button-icon {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    padding: 15px 35px;
    font-size: 1rem;
  }
`;