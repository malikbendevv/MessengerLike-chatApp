import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { auth, db } from "../Config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
const Login = () => {
  const navigate = useNavigate();

  // Google Sign In
  const GoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const { user } = await signInWithPopup(auth, provider);

      const document = await setDoc(doc(db, "users", user.uid), {
        email: user.email,
      });
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
  // Facebook Sign In
  const FacebookSignIn = async () => {
    try {
      const provider = new FacebookAuthProvider();

      const { user } = await signInWithPopup(auth, provider);
      console.log(user);

      const document = await setDoc(doc(db, "users", user.uid), {
        email: user.email,
      });
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Unichat !</h2>
        <div className="login-button google" onClick={GoogleSignIn}>
          <GoogleOutlined /> Sign In with Google
        </div>
        <br />
        <br />
        <div className="login-button facebook" onClick={FacebookSignIn}>
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
