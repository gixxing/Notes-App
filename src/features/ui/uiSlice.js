import { createSlice } from "@reduxjs/toolkit";
import { Search } from "lucide-react";
import { loadTheme } from "../../utils/localStorage";

const initialState = {
    isOpen: false,
    isViewing: false,
    isEditing: false,
    searchQuery: "",
    isSidebarOpen: false,
    selectedNoteId: null,
    theme: loadTheme(),
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

        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        closeSidebar: (state) => {
            state.isSidebarOpen = false;
        },

        setTheme: (state, action) => {
            state.theme = action.payload;
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
               toggleSidebar, 
               closeSidebar,
               setTheme,
            }  = uiSlice.actions;

export default uiSlice.reducer;