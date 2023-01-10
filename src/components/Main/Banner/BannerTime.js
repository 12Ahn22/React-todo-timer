import React from 'react';
import styled from 'styled-components';

const BannerTimeContainer = styled.article`
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
const TimeCountContainer = styled.div`
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > div {
    width: 2.25rem;
  }
`;
const TimeCount = styled.p`
  text-align: center;
  font-size: ${(props) => (props.small ? '0.75rem' : '1.5rem')};
`;

const BannerTime = () => {
  return (
    <BannerTimeContainer>
      <h2>Today Time</h2>
      <TimeCircle>
        <div>1 hr</div>
      </TimeCircle>
      {/* count */}
      <TimeCountContainer>
        <div>
          <TimeCount>5</TimeCount>
          <TimeCount small={true}>total</TimeCount>
        </div>
        <div>
          <TimeCount>3</TimeCount>
          <TimeCount small={true}>done</TimeCount>
        </div>
      </TimeCountContainer>
    </BannerTimeContainer>
  );
};

export default BannerTime;
