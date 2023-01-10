import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuIcon = () => {
  return (
    <StyledLink to={'/'}>
      <i className="fa-solid fa-bars-staggered"></i>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  width: 24px;
  height: 24px;
  color: #fff;
  & i {
    font-size: 24px;
  }
`;

export default MenuIcon;
