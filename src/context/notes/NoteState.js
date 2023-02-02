import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  // get Notes
  const getNote = async () => {
    // api
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    
    setNotes(json);
  };
  const addNote = async (title, description, tag) => {
    // api
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();

    
    // setNotes(notes.concat(note));  // # doubt which of the statements should we use?
    await getNote()
  };

  // Update a Note
  const editNote = async(id, title, description, tag) => {
    
    
    // api
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      body: JSON.stringify({title,description,tag})
    });
    const json = await response.json();

    getNote() // same doubt as of add notes
    // logic
    // let newNotes = JSON.parse(JSON.stringify(notes))
    // for (let index = 0; index < notes.length; index++) {
    //   if (newNotes[index]._id === id) {
    //     newNotes[index].title = title;
    //     newNotes[index].description = description;
    //     newNotes[index].tag = tag;
    //     break
    //   }
    // }
    // setNotes(newNotes)
  };

  const deleteNote = async(id) => {
    
    
    // api
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      
    });
    const json = await response.json();
    getNote()
    // const newNotes = notes.filter((note) => {
    //   return note._id !== id;
    // });
    // setNotes(newNotes);
  };
  return (
    <noteContext.Provider
      value={{ notes, setNotes, addNote, editNote, deleteNote, getNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
