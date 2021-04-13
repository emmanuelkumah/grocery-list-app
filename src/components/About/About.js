import React from "react";
import { GiPaperPlane } from "react-icons/gi";
import { GrBasket } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import "./About.css";

function About() {
  return (
    <div className="grid-container">
      <div className="about-heading">
        <h1>Why Choose Us </h1>
      </div>

      <main className="grid">
        <article>
          <div className="text">
            <GrBasket className="about-icons" />
            <h2>Plan Your Week</h2>
            <p>
              Dolor reprehenderit et occaecat velit ad ea mollit nulla laboris
              veniam reprehenderit ex. Nulla mollit et exercitation ipsum qui
              culpa incididunt minim magna amet nulla. In ad excepteur excepteur
              ad pariatur irure et aliqua commodo non.
            </p>
          </div>
        </article>
        <article>
          <div className="text">
            <div>
              <GiPaperPlane className="about-icons" />
            </div>
            <h2>Share List</h2>
            <p>
              Dolor reprehenderit et occaecat velit ad ea mollit nulla laboris
              veniam reprehenderit ex. Nulla mollit et exercitation ipsum qui
              culpa incididunt minim magna amet nulla. In ad excepteur excepteur
              ad pariatur irure et aliqua commodo non.
            </p>
          </div>
        </article>
        <article>
          <div className="text">
            <FiUsers className="about-icons" />
            <h2>Organize</h2>
            <p>
              Dolor reprehenderit et occaecat velit ad ea mollit nulla laboris
              veniam reprehenderit ex. Nulla mollit et exercitation ipsum qui
              culpa incididunt minim magna amet nulla. In ad excepteur excepteur
              ad pariatur irure et aliqua commodo non.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default About;
