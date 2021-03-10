import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=rg6CiPI6h2g"
          volume={.1}
          width={"640px"}
          height={"340px"}
        />
      </div>
    </div>
  );
};

export default Home;
