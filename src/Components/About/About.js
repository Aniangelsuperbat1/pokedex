import React from "react";
import "./About.css";
import logo from "./buffash.jpg";
import holytrin from "./holytrinpoke.jpg";

const About = () => {
  return (
    <>
      <main className="pokemon">
        <h1>
          Pokemon have protected the world from evil for time in immemorial. Do
          you believe you have what it takes to be a pokemon Master?!
        </h1>
        <img src={logo} alt="buffash" />
        <img src={holytrin} alt="holytrin" />
      </main>
    </>
  );
};

export default About;
