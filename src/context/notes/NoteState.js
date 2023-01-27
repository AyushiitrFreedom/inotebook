import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63d3cd9b66f102152eaa8823",
      user: "63d3c0f7829982810dd273e3",
      title: "oye raju2",
      description: "pyar n kariyo kariyo ",
      tag: "song",
      date: "2023-01-27T13:11:55.426Z",
      __v: 0,
    },
    {
      _id: "63d3cda666f102152eaa8825",
      user: "63d3c0f7829982810dd273e3",
      title: "oye raju3",
      description: "pyar n kariyo kariyo ",
      tag: "song",
      date: "2023-01-27T13:12:06.103Z",
      __v: 0,
    },
    {
      _id: "63d3cda666f102152eaa8825",
      user: "63d3c0f7829982810dd273e3",
      title: "oye raju3",
      description: "pyar n kariyo kariyo ",
      tag: "song",
      date: "2023-01-27T13:12:06.103Z",
      __v: 0,
    },
    {
      _id: "63d3cd9b66f102152eaa8823",
      user: "63d3c0f7829982810dd273e3",
      title: "oye raju2",
      description: "pyar n kariyo kariyo ",
      tag: "song",
      date: "2023-01-27T13:11:55.426Z",
      __v: 0,
    },
    {
      _id: "63d3cda666f102152eaa8825",
      user: "63d3c0f7829982810dd273e3",
      title: "oye raju3",
      description: "pyar n kariyo kariyo ",
      tag: "song",
      date: "2023-01-27T13:12:06.103Z",
      __v: 0,
    },
    {
      _id: "63d3cda666f102152eaa8825",
      user: "63d3c0f7829982810dd273e3",
      title: "oye raju3",
      description: "pyar n kariyo kariyo ",
      tag: "song",
      date: "2023-01-27T13:12:06.103Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial)
  return (
    <noteContext.Provider value={{notes,setNotes}}>{props.children}</noteContext.Provider>
  );
};  

export default NoteState;
