import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/icons/Logo';

const HeaderContainer = styled.header`
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  z-index: 1000;
  background: transparent;
  border: none;
  box-shadow: none;
  backdrop-filter: none;

  @media (max-width: 768px) {
    top: 10px;
    left: 10px;
    padding: 5px 15px;
  }
`;

const LogoContainer = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  margin-right: 15px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

const NavText = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #F97316;
  font-weight: 700;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo width="100%" height="100%" />
      </LogoContainer>
      <NavText>
        <Title>ElizaDID</Title>
      </NavText>
    </HeaderContainer>
  );
};

export default Header;
