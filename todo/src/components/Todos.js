import React, { useReducer } from "react";
import Todo from "./Todo";
import styled from "styled-components";

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClearButton = styled.button`
  font-family: "Arimo", sans-serif;
  background: none;
  border: none;
  font-weight: 700;
  font-size: 1.4em;
  margin-top: 30px;
  margin-bottom: 50px;

  :hover {
      color: #01A2E3;
  }
`

const Todos = ({ todos, toggleTaskCompleted, clearCompleted }) => {
  return (
    <TasksContainer>
    <ul>
      {todos.map((task) => {
        return <Todo
          key={task.id}
          task={task}
          toggleTaskCompleted={toggleTaskCompleted}
        />;
      })}
     </ul>
      <ClearButton onClick={clearCompleted}>Clear Completed</ClearButton>
    </TasksContainer>
  );
};

export default Todos;
