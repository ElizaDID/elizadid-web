import React, { useEffect, useRef } from 'react';
import {
  HeroSection,
  HeroBackground,
  Orb,
  Glow,
  Ripple,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  CtaButton,
  GridOverlay,
  TitleHighlight,
} from './Hero.styles';

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroBackground>
        <GridOverlay />
        <Orb />
        <Glow />
        <Ripple />
      </HeroBackground>
      <HeroContent>
        <HeroTitle>
          <TitleHighlight>Eliza</TitleHighlight>DID
        </HeroTitle>
        <HeroSubtitle>
          Empower Identity, Explore <TitleHighlight>Infinity</TitleHighlight>
          <br />
          with Solana's decentralized AI Agents and privacy-first DID.
        </HeroSubtitle>
        <CtaButton href="#features">
          <span className="button-text">Discover More</span>
          <span className="button-icon">→</span>
        </CtaButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;