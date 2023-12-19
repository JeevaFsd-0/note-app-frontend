import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../Slices/user";

const Navbar = () => {

  const user = useSelector((state) => state.userInfo.user);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
    localStorage.removeItem("token");
  };

  return (
    <nav>
        <h1 >Note Application</h1>
        <ul className="nav-list">
            <Link className="nav" to="/addNote" > Add note </Link>
            <Link className="nav" to="/allNotes" > All notes </Link>
            {user ? <p className="nav-btn nav" onClick={logout}>Logout</p> : <Link className="nav-btn nav" to="/login">Login</Link>}
        </ul>
    </nav>
  );
};

export default Navbar;