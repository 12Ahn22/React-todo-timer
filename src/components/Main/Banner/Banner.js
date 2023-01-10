import React from 'react';
import styled from 'styled-components';
import BannerTime from './BannerTime';
import BannerTitle from './BannerTitle';
import bannerImg from './banner_img.jpg';

const BannerContainer = styled.header`
  background: url(${bannerImg});
  background-size: cover;
  background-position: center;
  height: 11.25rem;
  width: 100%;
  display: flex;
  position: sticky;
  top: 0;
`;

const Banner = () => {
  return (
    <BannerContainer>
      {/* Title*/}
      <BannerTitle />
      {/* Today Time */}
      <BannerTime />
    </BannerContainer>
  );
};

export default Banner;
