import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../hook/useFirebase";
const Login = () => {
  const { signInUsingGoogle,signInUsingGithub } = useFirebase();
  return (
    <div>
      <h2>Please Login!</h2>
      <button onClick={signInUsingGoogle}>Google Sign in</button>
      <button onClick={signInUsingGithub}>GitHub Sign in</button>
      <br />
      <Link to="/register">New User?</Link>
    </div>
  );
};

export default Login;
