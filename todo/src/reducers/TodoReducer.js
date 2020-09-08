import React, { useReducer } from 'react';

// task: "",
// id: 101,
// priority: "",
// completed: false,

export const initialTodoState = {
    todos: []
};

const reducer =  (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {
                todos: [...state.todos, action.payload]
            };
        case "CLEAR_COMPLETED":
            return {
                todos: state.todos.filter(todo => !todo.completed)
            };
        case "TOGGLE_COMPLETED":
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            completed: action.payload.completed
                        };
                    }

                    return todo;
                })
            };

        default:
           return state
    }
}

export default reducer;