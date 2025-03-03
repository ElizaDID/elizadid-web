import React from 'react';
import styled from 'styled-components';
import GithubIcon from '../../assets/icons/GithubIcon';
import TwitterIcon from '../../assets/icons/TwitterIcon';

const FooterContainer = styled.footer`
  padding: 30px;
  background: #0A0A23;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 20px;
    gap: 15px;
    flex-direction: row;
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: #B0B0C0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialLink = styled.a`
  display: inline-block;
  width: 24px;
  height: 24px;
  transition: transform 0.3s, opacity 0.3s;

  &:hover {
    transform: scale(1.1);
    opacity: 0.9;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>© 2025 ElizaDID. All rights reserved.</FooterText>
      <SocialLink href="https://github.com/ElizaDID" target="_blank" rel="noopener noreferrer">
        <GithubIcon />
      </SocialLink>
      <SocialLink href="https://x.com/elizadid_" target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
      </SocialLink>
    </FooterContainer>
  );
};

export default Footer;
