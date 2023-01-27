import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

function Notes() {
  const context = useContext(noteContext);
  const { notes, setnotes } = context;

  return (
    <>
      <h1 className="my-5">Your Notes</h1>
      <div className="row my-3">
        {notes.map((note) => {
          return <NoteItem note={note} />;
        })}
      </div>
    </>
  );
}

export default Notes;
