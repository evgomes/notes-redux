import React from "react";

import AddNote from "../components/AddNote/AddNote";
import Report from "../components/Report/Report";
import NotesList from "../components/NotesList/NotesList";

import "./NotesPage.css";

const NotesPage = () => {
  return (
    <div className="notesPage">
      <div className="addNote">
        <AddNote />
        <Report />
      </div>
      <div className="notes">
        <NotesList />
      </div>
    </div>
  );
};

export default NotesPage;
