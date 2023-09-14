import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from '../redux/slices/tasksSlice'

export const store = configureStore({
    reducer: {
        todos: tasksReducer
    }
})