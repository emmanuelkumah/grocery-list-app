import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FiInstagram } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import "./SignUpSignIn.css";

function SignUpSignIn() {
  const [signUp, setSignUp] = useState(false);

  //Switch between signUp and signInform
  const toggleSignUp = () => {
    setSignUp(!signUp);
  };

  return (
    <section className="formSection">
      <div className={signUp ? "wrapper right-panel-active" : "wrapper"}>
        <div className="form-container sign-up-container">
          <form>
            <h1>Sign Up</h1>
            <div className="social-container">
              <Link to="/" className="social">
                <FiInstagram />
              </Link>
              <Link to="/" className="social">
                <FaGoogle />
              </Link>
              <Link to="/" className="social">
                <SiTiktok />
              </Link>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign In</h1>
            <div className="social-container">
              <Link to="/" className="social">
                <FiInstagram />
              </Link>
              <Link to="/" className="social">
                <FaGoogle />
              </Link>
              <Link to="/" className="social">
                <SiTiktok />
              </Link>
            </div>
            <span>or use your account</span>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>Please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={toggleSignUp}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost" id="signUp" onClick={toggleSignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpSignIn;
