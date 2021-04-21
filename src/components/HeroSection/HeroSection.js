import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel_1,
  buttonLabel_2,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section altBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <div>
                  <Link to="/sign_up">
                    <Button
                      bbuttonStyle="btn--primary"
                      buttonSize="btn--medium"
                    >
                      {buttonLabel_1}
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button buttonStyle="btn--outline" buttonSize="btn--medium">
                      {buttonLabel_2}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
