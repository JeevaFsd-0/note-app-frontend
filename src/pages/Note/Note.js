import React, { useState, useEffect } from "react";
import axios from "axios";

const Note = () => {
  const [notesInfo, setNotesInfo] = useState({
    title: "",
    description: "",
  });

  useEffect(()=>{
    setNotesInfo((currInfo)=>{
      return {
        ...currInfo,
      }
    });
  }, []);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNotesInfo((currInfo) => {
      return {
        ...currInfo,
        [name]: value,
      };
    });
  };

  const addNote = async () => {
    
    if(!notesInfo.title || !notesInfo.description ){
        alert("Please enter all datails");
        return;
      }

    let token = localStorage.getItem("token");
    try {
      const {data} = await axios.post("http://localhost:4000/note/addnote", notesInfo, {
        headers: {
          "Authorization": token
        }
      });

      alert(data.msg);

      setNotesInfo({
        title: "",
        description: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="section">
      <form className="content">
        <h3>Add note</h3>
        <label>Title</label> <br />
        <input 
          type="text" 
          placeholder="Enter the Title"
          name="title"
          value={notesInfo.title}
          onChange={handleChange} 
        /> <br />
        <label>Description</label> <br />
        <input
          className="input-desc"
          type="text"
          placeholder="Add a Description"
          name="description"
          value={notesInfo.description}
          onChange={handleChange}
        />
        <br />
        <input 
          className="btn" 
          type="button" 
          value="Add Note"
          onClick={addNote}  
        />
      </form>
    </div>
  );
};

export default Note;
