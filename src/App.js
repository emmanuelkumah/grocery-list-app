import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navigation/NavBar";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Home from "./components/pages/Home/Home";
import Testimonials from "./components/Testimonials/Testimonials";
import fire from "./services/firebase";
import firebase from "firebase";
import SignUp from "./components/SignUp/SignUp";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  //helps clear user inputs on submit
  const clearInput = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  //clear error messages
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  //sign up user with Google option
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const signInWithGoogle = () => {
    fire
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  //sign up user with email and password
  const handleSignUp = () => {
    //clear errors
    clearErrors();
    clearInput();
    //create new user
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        //log the user
        // console.log(userCredentials);
        //access the user
        let user = userCredentials.user;
        //update the user profile data
        return user.updateProfile({
          displayName: name,
        });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            //set Email error
            setEmailError(error.message);
            break;
          case "auth/weak-password":
            setPasswordError(error.message);
            break;
        }
      });
  };

  //sign in existing user
  const handleSignIn = () => {
    //clear user inputs
    clearInput();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            //set Email error
            setEmailError(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
        }
      });
  };

  //log out user
  const handleLogOut = () => {
    fire.auth().signOut();
  };

  //get the  user's  authentication state
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
        // console.log("the current user id ", user.uid);
      } else {
        // if user is sign out
        setUser("");
      }
    });
  };

  //check auth state when app re renders
  useEffect(() => {
    authListener();
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Home />}
          </Route>
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/about" component={Cards} />

          <Route path="/sign_up">
            <SignUp
              name={name}
              setName={setName}
              user={user}
              setUser={setUser}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              emailError={emailError}
              setEmailError={setEmailError}
              passwordError={passwordError}
              setPasswordError={setPasswordError}
              signInWithGoogle={signInWithGoogle}
              handleSignUp={handleSignUp}
              handleSignIn={handleSignIn}
              handleLogOut={handleLogOut}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
            />
          </Route>
          <Route path="/dashboard">
            <Dashboard user={user} handleLogOut={handleLogOut} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
