import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseAuthentication from "../../Firebase/firebase.init";

initializeFirebaseAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth();
  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((e) => {
        setError(e.message);
      });
  };
  const signInUsingGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((e) => {
        setError(e.message);
      });
  };
  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log("Sign out Successfully");
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
      }
    });
  }, [auth]);
  return {
    user,
    error,
    signInUsingGoogle,
    userSignOut,
    signInUsingGithub
  };
};
export default useFirebase;
