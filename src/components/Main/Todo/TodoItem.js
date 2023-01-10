import React from 'react';
import styled from 'styled-components';
import TodoButton from './TodoButton';

const TodoItemContainer = styled.li`
  list-style: none;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-family: 'Inter', sans-serif;
  border-bottom: solid #bbbbbb 1px;
`;

const TodoTime = styled.div`
  width: 3rem;
  height: 3rem;
  background: #a084ca;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    font-size: 0.75rem;
    font-weight: 300;
    color: #fff;
  }
`;

const TodoTitle = styled.div`
  flex-grow: 1;
  font-size: 1rem;
  font-weight: 300;
`;

const TodoItem = () => {
  return (
    <TodoItemContainer>
      {/* Time */}
      <TodoTime>
        {/* link */}
        <div>01:35</div>
      </TodoTime>
      {/* todo title */}
      <TodoTitle>
        <p>리액트 강의 듣기</p>
      </TodoTitle>
      {/* Button */}
      <TodoButton />
    </TodoItemContainer>
  );
};

export default TodoItem;
