import React, { useState } from "react";

function SignUp() {
  const [signUp, setSignUp] = useState(true);

  return (
    <section className="login">
      <div className="loginContainer">
        <div className="form-toggle">
          <button className="toggleSignUp">Sign Up</button>
          <button className="toggleSignIn">Sign In</button>
        </div>
        {signUp ? (
          <div>
            <label>Full Name</label>
            <input type="text" autoFocus required value="" />
            <label>Email</label>
            <input type="text" autoFocus required value="" />
            <p className="errorMsg"></p>
            <label>Password</label>
            <input type="text" autoFocus required value="" />
            <p className="errorMsg"></p>
            <div className="btnContainer">
              <button className="signUp">Sign Up</button>
            </div>
            <button className="signUp">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
                alt="google icon"
              />
              <span> Sign Up with Google</span>
            </button>
          </div>
        ) : (
          <div>
            <label>Email</label>
            <input type="text" autoFocus required value="" />
            <p className="errorMsg"></p>

            <label>Password</label>
            <input type="text" autoFocus required value="" />
            <p className="errorMsg"></p>
            <div className="btnContainer">
              <button className="signIn">Log In </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SignUp;
