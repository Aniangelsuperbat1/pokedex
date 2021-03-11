import React from "react";
// import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Home.css";

const Home = () => {
  return (
    <div className="video">
      <div>
        <h1 className="title">Welcome to the Wonderful World of Pokemon!</h1>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=rg6CiPI6h2g"
          volume={0.1}
          width={"640px"}
          height={"340px"}
          controls={true}
        />
      </div>
    </div>
  );
};

export default Home;
