import React, { useContext, useEffect, useRef , useState } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";


function Notes() {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNote ,editNote} = context;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNote()
    }
    else{
      navigate('/login')
    }
  
  }, []);

  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" });

  const ref = useRef(null);
  const refclose= useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id : currentNote._id,etitle : currentNote.title ,edescription : currentNote.description,etag : currentNote.tag })
  };

 
  const handleClick = (e) => {
    editNote(note.id,note.etitle,note.edescription,note.etag)
    e.preventDefault();
   
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    refclose.current.click() //not working
  };

  return (
    <>
      <AddNote />

      <div>
        <button
          type="button"
          ref={ref}
          className="btn btn-primary d-none"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Note
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="etitle"
                      value={note.etitle}
                      className="form-control"
                      id="etitle"
                      aria-describedby="emailHelp"
                      placeholder="Enter title"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">description</label>
                    <input
                      type="text"
                      name="edescription"
                      value={note.edescription}
                      className="form-control"
                      id="edescription"
                      placeholder="description"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tag">tag</label>
                    <input
                      type="text"
                      name="etag"
                      value={note.etag}
                      className="form-control"
                      id="etag"
                      placeholder="tag"
                      onChange={onChange}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={note.etitle.length<5||note.edescription.length<5}
                    className="btn btn-primary"
                    ref={refclose}
                    onClick={handleClick}
                  >
                    Update note
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="my-5">Your Notes</h1>
      {notes.length ===0 && "There are no notes to display"}
      <div className="row my-3">
        {notes.map((note) => {
          console.log(note);
          return <NoteItem note={note} updateNote={updateNote} />;
        })}
      </div>
    </>
  );
}

export default Notes;
