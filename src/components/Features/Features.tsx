import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  padding: 100px 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
  background: #1A1A3A;
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 20px;
    gap: 30px;
  }
`;

const FeatureCard = styled.div`
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 25px;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid rgba(249, 115, 22, 0.3);
  animation: slideIn 1s ease-out;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 15px 30px rgba(249, 115, 22, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 2.2rem;
  color: #F97316;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FeatureDescription = styled.p`
  color: #B0B0C0;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCardComponent: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <FeatureCard>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{description}</FeatureDescription>
    </FeatureCard>
  );
};

const Features: React.FC = () => {
  const featureData = [
    {
      title: "Decentralized Identity",
      description: "Control your identity with DID, secured by Solana's blockchain."
    },
    {
      title: "Privacy First",
      description: "Zero-knowledge proofs ensure your data stays yours."
    },
    {
      title: "AI-Powered Agents",
      description: "Automate DeFi, NFT, and DAO tasks with intelligent agents."
    }
  ];

  return (
    <FeaturesSection id="features">
      {featureData.map((feature, index) => (
        <FeatureCardComponent 
          key={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </FeaturesSection>
  );
};

export default Features;
