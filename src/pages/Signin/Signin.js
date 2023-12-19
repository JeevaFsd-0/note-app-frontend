import React, { useState } from "react";
import axios from "axios";
import "./Signin.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signup = async (req, res) => {
    if (!name || !email || !password) {
      alert("Please enter all details");
    }

    const response = await axios.post("http://localhost:4000/user/signup",{
      name,
      email,
      password,
    });
    alert(response.data.msg);
    navigate("/login");
  }

  return (
    <div className="section">
      <form  className="content">
        <h3>Register</h3>
        <label>Name</label> <br/>
        <input 
          type="text" 
          placeholder="Enter your name" 
          name="name"
          onChange={(e) => setName(e.target.value)} />  <br/>
        <label>Email</label> <br/>
        <input 
          type="email" 
          placeholder="Enter your email" 
          name="email"
          onChange={(e) => setEmail(e.target.value)} />  <br/>
        <label>Password</label> <br/>
        <input 
          type="password" 
          placeholder="Enter your password" 
          name="password" 
          onChange={(e) => setPassword(e.target.value)} /> <br />
        <input className="btn" type="button" value="Signup" onClick={signup} />
      </form>
    </div>
  )
}

export default Signin;