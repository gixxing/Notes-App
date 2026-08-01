import {configureStore} from '@reduxjs/toolkit';
import notesReducer from '../features/notes/notesSlice'
import uiReducer from '../features/ui/uiSlice'
import { saveNotes } from '../utils/localStorage';

export const store = configureStore({
    reducer: {
        notes: notesReducer,
        ui: uiReducer,
    }
});

store.subscribe(() => {
    saveNotes(store.getState().notes.notes);
});