import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FiInstagram } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import "./SignUp.css";

function SignUp() {
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
            <h1 className="heading">Sign Up</h1>
            <div className="social-container">
              <h4>Sign Up With Google</h4>
              <Link to="/" className="social">
                <FaGoogle />
              </Link>
            </div>
            <span>or use your email for registration</span>
            <input autoFocus type="text" placeholder="Enter  Your Name" />
            <input autoFocus type="email" placeholder="Enter Your Email" />
            <input
              autoFocus
              type="password"
              placeholder="Enter Your Password"
            />
            <button className="btn__signUp" type="submit">
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1 className="heading">Sign In</h1>
            <div className="social-container">
              <h4>Sign in with Google</h4>
              <Link to="/" className="social">
                <FaGoogle />
              </Link>
            </div>
            <span>or use your account</span>

            <input autoFocus type="email" placeholder="Email" />
            <input autoFocus type="password" placeholder="Password" />
            <button className="btn__signUp">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>Please login with your personal info</p>
              <button className="btn__signUp ghost" onClick={toggleSignUp}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="heading">Hello, Friend!</h1>
              <p>
                Enter your details below and begin an awesome journey with us
              </p>
              <button className=" btn__signUp ghost" onClick={toggleSignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
