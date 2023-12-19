import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./pages/Signin/Signin";
import Login from "./pages/Login/Login";
import Note from "./pages/Note/Note";
import AllNotes from "./pages/All-notes/AllNotes";
import { useDispatch } from "react-redux";
import { handleLogin } from "./Slices/user";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      dispatch(handleLogin(token));
    }
  },);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Signin /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/addNote" element={ <Note /> } />
        <Route path="/allNotes" element={ <AllNotes /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;