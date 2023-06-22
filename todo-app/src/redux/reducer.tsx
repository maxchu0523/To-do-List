import { createSlice } from "@reduxjs/toolkit";
import { ITodoItem } from "../interface";

const initialState: ITodoItem[] = [];

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
      //here we will write our reducer
      //Adding todos
      addTodos: (state, action) => {
        state.push(action.payload);
        return state;
      },
      //remove todos
      removeTodos: (state, action) => {
        return state.filter((item) => item.id !== action.payload.id);
      },
      //update todos
      updateTodos: (state, action) => {
        return state.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              todo: action.payload.todo,
              completed: action.payload.completed,
            };
          }
          return todo;
        });
      },
    },
  });

  export const {
    addTodos,
    removeTodos,
    updateTodos,
  } = addTodoReducer.actions;
  export const reducer = addTodoReducer.reducer;
  