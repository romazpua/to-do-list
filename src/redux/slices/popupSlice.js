import {createSlice} from "@reduxjs/toolkit";

export const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        show: false,
        coordinates: [],
        action: {}
    },
    reducers: {
        setPopup: (state, action) => {
            state.show = action.payload.show
            state.coordinates = action.payload.coordinates
            state.title = action.payload.title
            state.action = action.payload.action
        }
    }
})

export const {setPopup} = popupSlice.actions

export const popupSelect = (state) => state.popup

export default popupSlice.reducer