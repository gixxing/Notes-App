import { createSlice } from "@reduxjs/toolkit";
import { Search } from "lucide-react";

const initialState = {
    isOpen: false,
    isViewing: false,
    isEditing: false,
    searchQuery: "",
    menu: false,
    selectedNoteId: null,
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
            state.selectedNoteId = action.payload;
        },
        closeEditing: (state) => {
            state.isOpen = false;
            state.isEditing = false;
            state.selectedNoteId = null;
        },

        openView: (state, action) => {
            state.isViewing = true;
            state.selectedNoteId = action.payload;
        },
        closeView: (state) => {
            state.isViewing = false;
            state.selectedNoteId = null;
        },

        openSearch: (state, action) => {
            state.searchQuery = action.payload;
        },

        toggleMenu: (state) => {
            state.menu = !state.menu;
        }
    },
});

export const { openCreate,
               closeCreate,
               openEditing,
               closeEditing,
               openView,
               closeView,
               openSearch,
               toggleMenu, 
            }  = uiSlice.actions;

export default uiSlice.reducer;