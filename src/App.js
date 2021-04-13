import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import Home from "./components/pages/Home/Home";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route>
            <Home />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
