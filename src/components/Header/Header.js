import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../hook/useFirebase";
import "./Header.css";
const Header = () => {
  const { user } = useFirebase();
  return (
    <div className="header">
      <Link to="/home">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      {user.email && <button>Log out</button>}
    </div>
  );
};

export default Header;
