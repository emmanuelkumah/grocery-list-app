import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import "./SignUp.css";

function SignUp(
  // name,
  // setName,
  userName,
  setUserName,
  email,
  setEmail,
  password,
  setPassword,
  emailError,
  passwordError,
  signInWithGoogle,
  handleSignUp,
  handleSignIn
) {
  //set values for sign up
  const [signUp, setSignUp] = useState(false);

  //Switch between signUp and signInform
  const toggleSignUp = () => {
    setSignUp(!signUp);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section className="formSection">
      <div className={signUp ? "wrapper right-panel-active" : "wrapper"}>
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit}>
            <h1 className="heading">Sign Up</h1>
            {/* <div className="social-container">
              <h4>Sign Up With Google</h4>
              <button className="social" onClick={signInWithGoogle}>
                <span> Sign Up with Google</span> <br></br>
                <FaGoogle />
              </button>
            </div>
            <span>or use your email for registration</span> */}
            <input
              type="text"
              placeholder="Enter Your Name"
              value={userName}
              // onChange={(event) => setUserName(event.target.value)}
            />
            <input autoFocus type="email" placeholder="Enter Your Email" />
            <p className="errorMsg">{emailError}</p>
            <input
              autoFocus
              type="password"
              placeholder="Enter Your Password"
            />

            <p className="errorMsg">{passwordError}</p>
            <button
              className="btn__signUp"
              type="submit"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1 className="heading">Sign In</h1>
            <div className="social-container">
              <h4>Sign in with Google</h4>
              <button className="social">
                <FaGoogle />
              </button>
            </div>
            <span>or use your account</span>

            <input autoFocus type="email" placeholder="Email" value={email} />
            <p className="errorMsg">{emailError}</p>
            <input autoFocus type="password" placeholder="Password" />
            <p className="errorMsg">{passwordError}</p>
            <button className="btn__signUp" onClick={handleSignIn}>
              Sign In
            </button>
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
