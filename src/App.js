import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navigation/NavBar";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Home from "./components/pages/Home/Home";
import SignUpSignIn from "./components/SignUp/SignUpSignIn";
import Testimonials from "./components/Testimonials/Testimonials";
// import firebase from "./services/firebase";

function App() {
  //define the states
  // const [user, setUser] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [hasAccount, setHasAccount] = useState(false);

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/about" component={Cards} />
          <Route path="/sign-up">
            <SignUpSignIn />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
