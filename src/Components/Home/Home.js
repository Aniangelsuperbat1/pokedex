import React from "react";
// import { Link } from "react-router-dom";
// import ReactPlayer from "react-player";
import "./Home.css";

const Home = () => {
  const style ={fontSize: 45}
  return (
    <div className="body">
      <div>
        <h1 style={style}>
          <b>Welcome to the Wonderful World of Pokémon!</b>
        </h1>
      </div>
      <div>
        <iframe
          title="pokemon theme song"
          frameborder="0"
          width="640"
          height="400"
          src="https://www.youtube.com/embed/rg6CiPI6h2g"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
