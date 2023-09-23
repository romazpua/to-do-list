import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    show: false,
    sizes: {
        width: '0px',
        height: '0px',
        left: '0px',
        top: '0px',
    },
    cardTimestamp: ''
}

export const editCardSlice = createSlice({
    name: 'editCard',
    initialState,
    reducers: {
        handleEditCard: (state, action) => {
            state.show = action.payload.show
            state.sizes = action.payload.sizes
            state.cardTimestamp = action.payload.cardTimestamp
        }
    }
})

export const {handleEditCard} = editCardSlice.actions

export const editCardSelect = (state) => state.editCard

export default editCardSlice.reducer