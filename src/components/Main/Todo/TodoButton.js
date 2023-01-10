import React from 'react';
import styled from 'styled-components';

const TodoButtonContainer = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainer = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  & i {
    font-size: 1.25rem;
    color: ${(props) => (props.checked ? '#a084ca' : '#bbbbbb;')};
  }
  &:hover i {
    color: ${(props) => {
      if (props.type === 'delete') return '#ff4646';
      return '#a084ca';
    }};
  }
`;

const Button = (props) => {
  if (props.type === 'check') {
    return (
      <ButtonContainer {...props} onClick={props.onClickHandler}>
        {props.checked ? (
          <i className="fa-solid fa-square-check"></i>
        ) : (
          <i className="fa-regular fa-square"></i>
        )}
      </ButtonContainer>
    );
  }

  if (props.type === 'delete') {
    return (
      <ButtonContainer {...props} onClick={props.onClickHandler}>
        <i className="fa-regular fa-circle-xmark"></i>
      </ButtonContainer>
    );
  }
};

const TodoButton = (props) => {
  return (
    <TodoButtonContainer>
      <Button type={'check'} />
      <Button type={'delete'} />
    </TodoButtonContainer>
  );
};

export default TodoButton;
