import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Notes from "../../components/Notes/Notes";
import axios from "axios";
import "./AllNotes.css";

const AllNotes = () => {
  const [ notes, setNotes ] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const getData = async () => {
    try {
      const {data} = await axios.get("http://localhost:4000/note/all", {
        headers: {
          Authorization: token
        }
      });
      setNotes(data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  },);

  const deleteNote = async (id) => {
    try {
      const {data} = await axios.delete(`http://localhost:4000/note/delete/${id}`,{
        headers: {
          Authorization: token
        }
      });
      alert(data.msg);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async (id) => {

    if ( !notes.title || !setNotes.description ){
      navigate("/addNote");
      return
      alert("please enter all details");
      
    }
   let token = localStorage.getItem("token")
    try {
      const responce =await axios.put(`https://localhost:4000/note/update/${id}`,notes,{
        headers:{
          Authorization: token
        }
      })
       
    alert(responce.data.msg)
    setNotes({
     
      title: "",
      description: "",
     });
    } catch (error) {
      console.log(error);
    }
    
   };
  return (
    <div className="note-section">
      <div className="note-content">
      <h3>Notes</h3> 
        {notes.length === 0 ? (
          <div className="note-empty">
            <h2>Notes not available</h2>
            <Link className="btn" to="/addNote">Add Note</Link>
          </div>
        ):(
          notes.map((note) => {
            return <Notes 
              key={note._id}
              id={note._id}
              title={note.title}
              description={note.description}
              deleteNote={() => deleteNote(note._id)}
              updateNote={() => updateNote(note._id)}
            />
          })
        )}
      </div>
    </div>
  )
}

export default AllNotes;