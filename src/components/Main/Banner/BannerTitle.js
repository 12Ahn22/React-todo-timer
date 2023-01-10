import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  flex-basis: 65%;
  color: #fff;
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem;
  padding-right: 0;
  & h1 {
    margin-top: 1rem;
    font-weight: 300;
    font-size: 1.5rem;
    /* background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(0, 0, 0, 0.3) 70%
    ); */
  }
  & p {
    font-weight: 300;
    font-size: 0.75rem;
  }
`;

const BannerTitle = () => {
  return (
    <Title>
      <h1>
        Don't leave
        <br />
        before you leave
      </h1>
      <p>2023.01.10</p>
    </Title>
  );
};

export default BannerTitle;
