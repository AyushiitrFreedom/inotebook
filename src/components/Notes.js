import React, { useContext, useEffect , useState } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";
import UpdateModal from "./UpdateModal";


function Notes() {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  let ref1; 
  const { notes, getNote } = context; 
  const getRef = (ref) =>{
    ref1 = ref
  }
  useEffect(() => {
    if (localStorage.getItem('token')) { // why can't we make this happen before the render 
      getNote()
    }
    else{
      navigate('/login')
    }
  
  }, []);

  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" });

  
  const updateNote = (currentNote ) => {
    ref1.current.click();
    console.log(ref1.current)
    setNote({id : currentNote._id,etitle : currentNote.title ,edescription : currentNote.description,etag : currentNote.tag })
  };

 
  

  return (
    <>
      <AddNote />
      <UpdateModal note= {note}  setNote = {setNote} getRef = {getRef}/>


      {/* Showing the notes */}

      <h1 className="my-5">Your Notes</h1>
      {notes.length ===0 && "There are no notes to display"}
      <div className="row my-3">
        {notes.map((note) => {
          return <NoteItem note={note} updateNote={updateNote} />;
        })}
      </div>
    </>
  );
}

export default Notes;
