import React, { useReducer, useState } from "react";
import TodoReducer, { initialTodoState } from "../reducers/TodoReducer";
import Todos from "./Todos";
import styled from "styled-components";

const StyledForm = styled.form`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input `
  margin-bottom: 10px;
  height: 30px;
  width: 300px;
  font-family: "Arimo";
  text-align: center;
  font-size: 1.0em;
`

const AddButton = styled.button `
  padding: 2px 7px;
  background-color: #EEC920;
  text-decoration: none;
  color: black;
  font-size: 1.3em;
  font-family: "Arimo";
  border-radius: 5px;
  width: 200px;

`

const TodoForm = (props) => {
  const [state, dispatch] = useReducer(TodoReducer, initialTodoState);
  const [taskName, setTaskName] = useState("");


  // handle input changes
  const handleChanges = (event) => {
    setTaskName(event.target.value);
  };

  // class property for submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // add the todo task to reducer state
    dispatch({
      type: "ADD_TODO",
      payload: {
        name: taskName,
        id: Date.now(),
        completed: false,
      },
    });

    setTaskName("");
  };

  const handleClearCompleted = () => {
    dispatch({
      type: "CLEAR_COMPLETED",
    });
  };

  const handleToggleTaskCompleted = (taskId, completed) => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: {
        id: taskId,
        completed,
      },
    });
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="task"
          value={taskName}
          onChange={handleChanges}
          placeholder="Add a new task."
        />
        <AddButton>Add</AddButton>
      </StyledForm>
      <Todos
        todos={state.todos}
        toggleTaskCompleted={handleToggleTaskCompleted}
        clearCompleted={handleClearCompleted}
      />
    </div>
  );
};

export default TodoForm;
