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
          you believe you have what it takes to be a pokemon Master?! Then you
          have come to the right place! It is here where you will find all the
          tools and resources you will ever need to become THE champion. Sun Tzu
          once said, “If you know the enemy and know yourself, you need not fear
          the result of a hundred battles.
        </h1>
        <img src={logo} alt="buffash" />
        <img src={holytrin} alt="holytrin" />
      </main>
    </>
  );
};

export default About;
