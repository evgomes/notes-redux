export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const handleAddNote = (note) => ({
    type: ADD_NOTE,
    note
});

export const handleDeleteNote = (noteId) => ({
    type: REMOVE_NOTE,
    noteId
});