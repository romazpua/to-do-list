import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from '../redux/slices/tasksSlice'
import popupReducer from '../redux/slices/popupSlice'
import editCardReducer from '../redux/slices/editCardSlice'

export const store = configureStore({
    reducer: {
        todos: tasksReducer,
        popup: popupReducer,
        editCard: editCardReducer
    }
})