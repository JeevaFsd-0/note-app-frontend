import React from "react";
import "./Notes.css";

const Notes = ({ id, title, description, deleteNote, updateNote }) => {
  return (
    <div className="main">
        <div className="user">
            <h3>
                id : <span> {id} </span>
            </h3>
            <h3>
                Title : <span> {title} </span>
            </h3>
            <h3>
                Description : <span> {description} </span>
            </h3>
            <div className="user_bottom">
            <button className="user_update" onClick={updateNote}>
                Update
            </button>
            <button className="user_delete" onClick={deleteNote}>
                Delete
            </button>
        </div>
        </div>
    </div>
  )
}

export default Notes;