import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../Slices/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (req, res) => {
    if (!email || !password) {
      alert("Please enter all details");
      return;
    }

    const response = await axios.post("http://localhost:4000/user/login",{
      email,
      password,
    });
    localStorage.setItem("token", response.data);
    dispatch(handleLogin(response.data));
    navigate("/addNote");

  };

  return (
    <div className="section">
        <form className="content">
            <h3>Register</h3>
            <label>Email</label> <br/>
            <input 
              type="email" 
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)} /> <br/>
            <label>Password</label> <br/>
            <input 
              type="password" 
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}/> <br/>
            <input className="btn" type="button" value="Login" onClick={login} />
        </form>
    </div>
  )
}

export default Login;