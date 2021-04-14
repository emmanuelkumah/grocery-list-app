import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navigation/NavBar";
import Home from "./components/pages/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
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
            <SignUp />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
