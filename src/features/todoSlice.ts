import { createSlice, nanoid } from "@reduxjs/toolkit";
import { ReactNode } from "react";

// Define the type for your todo
interface Todo {
  id: number | string;
  text: string;
}

// Define the type for your slice state
export interface TodoSliceState {
  map(
    arg0: (todo: any) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  todos: Todo[];
}

// Initial state
const initialState: TodoSliceState = {
  todos: [{ id: 1, text: "Hello world" }],
  map: function (): ReactNode {
    throw new Error("Function not implemented.");
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todos: Todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todos);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // updateTodo: (state, action) => {},
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
