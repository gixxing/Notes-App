import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isViewing: false,
    isEditing: false,
    selectedNote: null,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,

    reducers: {

        openCreate: (state) => {
            state.isOpen = true;
        },
        closeCreate: (state) => {
            state.isOpen = false;
        },

        openEditing: (state, action) => {
            state.isOpen = true;
            state.isEditing = true;
            state.selectedNote = action.payload;
        },
        closeEditing: (state) => {
            state.isOpen = false;
            state.isEditing = false;
            state.selectedNote = null;
        },

        openView: (state, action) => {
            state.isViewing = true;
            state.selectedNote = action.payload;
        },
        closeView: (state) => {
            state.isViewing = false;
            state.selectedNote = null;
        },
    },
});

export const { openCreate,
               closeCreate,
               openEditing,
               closeEditing,
               openView,
               closeView, }  = uiSlice.actions;

export default uiSlice.reducer;