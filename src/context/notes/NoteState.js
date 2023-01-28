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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkM2MwZjc4Mjk5ODI4MTBkZDI3M2UzIn0sImlhdCI6MTY3NDkxMTE0Mn0.57dA__M8mArq02fUq9ge-WOq4C6Tf0fUeNObfM_s3DU",
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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkM2MwZjc4Mjk5ODI4MTBkZDI3M2UzIn0sImlhdCI6MTY3NDkxMTE0Mn0.57dA__M8mArq02fUq9ge-WOq4C6Tf0fUeNObfM_s3DU",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();

    
    setNotes(notes.concat(note));
  };

  // Update a Note
  const editNote = async(id, title, description, tag) => {
    
    
    // api
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkM2MwZjc4Mjk5ODI4MTBkZDI3M2UzIn0sImlhdCI6MTY3NDkxMTE0Mn0.57dA__M8mArq02fUq9ge-WOq4C6Tf0fUeNObfM_s3DU",
      },

      body: JSON.stringify({title,description,tag})
    });
    const json = await response.json();

    // logic
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break
      }
    }
    setNotes(newNotes)
  };

  const deleteNote = async(id) => {
    
    
    // api
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkM2MwZjc4Mjk5ODI4MTBkZDI3M2UzIn0sImlhdCI6MTY3NDkxMTE0Mn0.57dA__M8mArq02fUq9ge-WOq4C6Tf0fUeNObfM_s3DU",
      },

      
    });
    const json = await response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
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
