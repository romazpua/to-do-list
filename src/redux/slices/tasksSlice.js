import {createSlice} from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'todos',
    initialState: {
        items: []
    },
    reducers: {
        setTasks: (state, action) => {
            state.items = action.payload
        },
        addTask: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        deleteTask: (state, action) => {
            state.items = state.items.filter(obj => obj.timestamp !== action.payload)
        }
    }
})

export const {setTasks, addTask, deleteTask} = tasksSlice.actions
export const tasksSelect = (state) => state.todos.items

export const singleTaskSelect = (state, cardTimestamp) => state.todos.items.find(obj => obj.timestamp === cardTimestamp)
export default tasksSlice.reducer