import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "posts",
    initialState:{
        value: {},
        modal: {},
        modalIgnite: false
    },
    reducers: {
        initialise: (state, action) => {
            state.value = action.payload
        },
        modal: (state, action) => {
            state.modal = action.payload
        },
        modalIgnite: (state, action) => {
            state.modalIgnite = action.payload
        }
    }
})

export const {initialise, modal, modalIgnite} = postSlice.actions

export default postSlice.reducer