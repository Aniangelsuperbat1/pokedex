import React from "react";
import { useState, useEffect } from "react";

const PokemonDetails = ({ match }) => {
  const [details, setDetails] = useState({});
  const nextUrl = `https://pokeapi.co/api/v2/pokemon/${match.params.name}/`;

  let pokes = () => {
    fetch(nextUrl)
      .then((res) => res.json())
      .then((res) => {
        setDetails(res);
        console.log(res.abilities);
      });
  };

  useEffect(async () => {
    await pokes();
  }, []);

  // useEffect(() => {
  //   // fetch(nextUrl)
  //   //   .then((res) => res.json())
  //   //   .then((res) => {
  //   //     setDetails(res);
  //   //     console.log(res.abilities)
  //   //     // console.log(res.moves)
  //   //     // console.log(res.moves.map((move) => move.move.name));
  //   //     // console.log(res.sprites.other.dream_world.front_default);
  //   //     // console.log(res.stats.map((stat) => stat.stat.name))
  //   //   });
  // }, []);

  // if (!details) {
  //   return null;
  // }

  return (
    <>
      <div>
        <h1>Moves:</h1>
        {details.moves
          ? details.moves.map((move) => {
              return <h1>{move.move.name}</h1>;
            })
          : ""}
        <div>
          {/* <img src={details.sprites.other.dream_world.front_default}/> */}
          <div>
            {/* <h1>{details.stats.map((stat) => stat.stat.name)}</h1> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default PokemonDetails;
