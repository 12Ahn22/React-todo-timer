import React from 'react';
import styled from 'styled-components';
import MenuIcon from './MenuIcon';
import Title from './Title';

const Header = () => {
  return (
    <HeaderContainer>
      {/* home button */}
      <MenuIcon />
      {/* Title */}
      <Title>Record todo Time</Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 3.5rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

export default Header;
