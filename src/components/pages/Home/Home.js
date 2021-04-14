import React from "react";
import Cards from "../../Cards/Cards";
import HeroSection from "../../HeroSection/HeroSection";
import Testimonials from "../../Testimonials/Testimonials";
import { homeObjOne, homeObjThree } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Cards />
      <HeroSection {...homeObjThree} />
      <Testimonials />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
