import React from "react";

function NoteItem(props) {
  const { note } = props;
  console.log();
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <div className="mx-4"></div>
            <i class="fa-solid fa-pen-to-square mx-3"></i>
            <i class="fa-solid fa-trash mx-2"></i>
          </div>
          <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
