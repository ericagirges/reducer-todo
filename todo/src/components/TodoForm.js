import React, { useReducer, useState } from "react";
import TodoReducer from "../reducers/TodoReducer";
import Todos from "./Todos";

const TodoForm = (props) => {
  const [state, dispatch] = useReducer(TodoReducer);
  const [taskName, setTaskName] = useState("");

  const clearCompleted = () => {
    dispatch({});
  };

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
      task: {
        task: taskName,
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={state.task}
          onChange={handleChanges}
          placeholder="Add a new task."
        />
        <button>Add</button>
      </form>
      <Todos />
    </div>
  );
};

export default TodoForm;
