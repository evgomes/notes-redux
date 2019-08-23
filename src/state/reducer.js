import { ADD_NOTE, REMOVE_NOTE } from "./actions";

const initialState = {
  notes: [],
  lastUpdate: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return onAddNote(state, action.note);
    case REMOVE_NOTE:
      return onRemoveNote(state, action.noteId);
    default:
      return state;
  }
};

function onAddNote(state, note) {
  return {
    ...state,
    notes: state.notes.concat(note),
    lastUpdate: new Date()
  };
}

function onRemoveNote(state, noteId) {
  return {
    ...state,
    notes: state.notes.filter(n => n.id !== noteId),
    lastUpdate: new Date()
  };
}

export default reducer;
