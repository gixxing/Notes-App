import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadNotes } from "../../utils/localStorage";

const initialState = {
  notes: loadNotes(),
};

const notesSlice = createSlice({
  name: "note",
  initialState,

  reducers: {

    addNote: (state, action) => {
      state.notes.push(action.payload);
    },

    deleteNote: (state, action) => {
      const note = state.notes.find( (n) => 
        n.id === action.payload
      );

      if(note){
        note.isDeleted = true ;
        note.pinned = false ;
      }
    },

    restoreNote: (state, action) => {
      const note = state.notes.find( (n) => 
        n.id === action.payload
      );

      if(note){
        note.isDeleted = false ;
      }
    },

    deletePermanently: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload)
    },

    updateNote: (state, action) => {
     state.notes = state.notes.map(note => 
        note.id === action.payload.id
        ? action.payload
        : note
      );
    },

    setPinned: (state, action) => {
      const note = state.notes.find( (n) =>
        n.id === action.payload
      );
      if(note){
        note.pinned = !note.pinned;
      }
    }
  }
});

export const { 
  addNote, 
  deleteNote,
  updateNote, 
  setPinned,
  restoreNote,
  deletePermanently,
 } = notesSlice.actions;

export default notesSlice.reducer;
