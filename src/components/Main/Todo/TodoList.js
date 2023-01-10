import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListContainer = styled.div`
  padding: 1.25rem;
  padding-bottom: 0;
  font-family: 'Inter', sans-serif;
  background-color: #fff;
  min-height: calc(100vh - 180px);

  & h2 {
    font-size: 1.25rem;
    font-weight: 300;
    color: #645caa;
    letter-spacing: 0.125em;
  }
`;

const TodoList = () => {
  return (
    <TodoListContainer>
      <h2>Todo list</h2>
      <ul>
        <TodoItem>리액트 강의 듣기</TodoItem>
        <TodoItem>리액트 강의 듣기</TodoItem>
        <TodoItem>리액트 강의 듣기</TodoItem>
        <TodoItem>리액트 강의 듣기</TodoItem>
        <TodoItem>리액트 강의 듣기</TodoItem>
        <TodoItem>리액트 강의 듣기</TodoItem>
        <TodoItem>리액트 강의 듣기</TodoItem>
        <TodoItem>리액트 강의 듣기</TodoItem>
        <TodoItem>리액트 강의 듣기</TodoItem>
      </ul>
    </TodoListContainer>
  );
};

export default TodoList;
