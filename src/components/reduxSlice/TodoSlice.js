import { createSlice } from "@reduxjs/toolkit";

const initialTodo = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "Todo",
  initialState: initialTodo,
  reducers: {
    showTodo: (state) => state,
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const deleteId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== deleteId);
    },
    compeleteTodo: (state, action) => {
      const id = action.payload;
      const isExists = state.todos.filter((todo) => todo.id === id);
      if (isExists) {
        isExists[0].completed = true;
      }
    },
  },
});

export const { showTodo, addTodo, deleteTodo, compeleteTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
