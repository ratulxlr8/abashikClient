import React, { useContext } from "react";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { userContext } from "../../App";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import glogo from "../Images/google-logo-9824 .png";
import "./SignUp.css";
const SignUp = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLoggedInUser(signedInUser);
        //history.replace(from);

        history.push("/dashboard");
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <div class="container-fluid text-center bg-dark">
      <div className="p-5">
        <img src={glogo} alt="" />

        <h1 className="text-light">Sign in with Google</h1>
        <button className="btn btn-primary" onClick={handleSignIn}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUp;
