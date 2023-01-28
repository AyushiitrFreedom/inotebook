import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

function AddNote() {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" }); // to make feilds empty after i set the note
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1 className="my-4">Add Note</h1>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={note.title}
            name="title"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="Enter title"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">description</label>
          <input
            type="text"
            name="description"
            value={note.description}
            className="form-control"
            id="description"
            placeholder="description"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tag">tag</label>
          <input
            type="text"
            name="tag"
            value={note.tag}
            className="form-control"
            id="tag"
            placeholder="tag"
            onChange={onChange}
          />
        </div>

        <button type="submit" disabled={note.title.length<5||note.description.length<5} className="btn btn-primary" onClick={handleClick}>
          Addnote
        </button>
      </form>
    </>
  );
}

export default AddNote;
