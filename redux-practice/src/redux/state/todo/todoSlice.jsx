import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {
    AddTodo: (state, action) => {
      state.value.push(action.payload);
    },
    RemoveTodo: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    EditTodo: (state, action) => {
      const { index, task } = action.payload;
      state.value[index].task = task; // Update 'task' property instead of using splice
    },
    ToggleCompleted: (state, action) => {
      const index = action.payload;
      if (state.value[index]) {
        state.value[index].completed = !state.value[index].completed;
      }
    },
  },
});

export const { AddTodo, RemoveTodo, EditTodo, ToggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;