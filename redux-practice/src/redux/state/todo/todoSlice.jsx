import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
    name:"todo",
    initialState:{
        value:[]
    },
    reducers:{
       
        AddTodo:(state, action) =>{
           
            state.value.push(action.payload)
        },
        RemoveTodo:(state, action) =>{
            state.value.splice(action.payload, 1)
        },
        EditTodo:(state, action) =>{
            state.value.splice(action.payload['index'], 1, action.payload['task'])
        },
        ToggleCompleted:(state, action) =>{
            const index = action.payload;
            state.value[index].completed = !state.value[index].completed;
        }
    }
})

export const {AddTodo, RemoveTodo, EditTodo, ToggleCompleted} = todoSlice.actions;
export default todoSlice.reducer;