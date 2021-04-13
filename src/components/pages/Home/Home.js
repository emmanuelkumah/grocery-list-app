import React from "react";
import About from "../../About/About";
import Footer from "../../Footer/Footer";
import HeroSection from "../../HeroSection/HeroSection";
import Testimonials from "../../Testimonials/Testimonials";
import { homeObjOne, homeObjThree } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <About />
      <HeroSection {...homeObjThree} />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
