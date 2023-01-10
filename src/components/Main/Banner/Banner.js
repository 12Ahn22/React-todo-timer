import React from 'react';
import styled from 'styled-components';
import bannerImg from './banner_img.jpg';

const BannerContainer = styled.header`
  background: url(${bannerImg});
  background-size: cover;
  background-position: center;
  height: 11.25rem;
  width: 100%;
  display: flex;
`;

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
const TodayTime = styled.div`
  flex-basis: 35%;
  padding: 1.25rem;
  font-family: 'Inter', sans-serif;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & h2 {
    font-weight: 300;
    font-size: 1rem;
    white-space: nowrap;
  }
`;
const TimeCircle = styled.div`
  width: 3.375rem;
  height: 3.375rem;
  border: 4px solid #97fff9;
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TimeCount = styled.div`
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > div {
    width: 2.25rem;
  }
`;
const TimeCountLabel = styled.p`
  font-size: 0.75rem;
  text-align: center;
`;
const TimeCountValue = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

const Banner = () => {
  return (
    <BannerContainer>
      {/* To do */}
      <Title>
        <h1>
          Don't leave
          <br />
          before you leave
        </h1>
        <p>2023.01.10</p>
      </Title>

      {/* Today Time */}
      <TodayTime>
        <h2>Today Time</h2>
        <TimeCircle>
          <div>1 hr</div>
        </TimeCircle>
        {/* count */}
        <TimeCount>
          <div>
            <TimeCountValue>5</TimeCountValue>
            <TimeCountLabel>total</TimeCountLabel>
          </div>
          <div>
            <TimeCountValue>3</TimeCountValue>
            <TimeCountLabel>done</TimeCountLabel>
          </div>
        </TimeCount>
      </TodayTime>
    </BannerContainer>
  );
};

export default Banner;
