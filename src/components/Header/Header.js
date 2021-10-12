import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hook/useAuth";
// import useFirebase from "../hook/useFirebase";
import "./Header.css";
const Header = () => {
//   const { user,userSignOut } = useFirebase();
  const { user,userSignOut } = useAuth();
  return (
    <div className="header">
      <Link to="/home">Home</Link>
      <Link to="/shipping">Shipping</Link>
      <Link to="/order">Order</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      {user.email && <button onClick={userSignOut}>Log out</button>}
    </div>
  );
};

export default Header;
