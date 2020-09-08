import React from "react";
import styled from "styled-components";

const StyledTask = styled.li`
  font-family: "Arimo";
  font-size: 1.2em;
  margin-top: 20px;
  cursor: pointer;
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05),
    0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);
  background: #2bbb3a;
  border-radius: 5px;
  padding: 10px;
  max-width: 250px;
  text-align: center;

  :hover {
    background: #eec920;
  }

  &.taskcompleted {
    background: #ff1e43;
    text-decoration: line-through;
  }
`;

const Todo = (props) => {
  return (
    <StyledTask className={`task${props.task.completed ? "completed" : ""}`}>
      <h3
        onClick={() =>
          props.toggleTaskCompleted(props.task.id, !props.task.completed)
        }
      >
        {props.task.name}
      </h3>
    </StyledTask>
  );
};

export default Todo;
