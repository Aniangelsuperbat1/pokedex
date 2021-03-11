import React from "react";
import { useState, useEffect } from "react";
import "./PokemonTypes.css";

const PokemonTypes = ({ match }) => {
  const [type, setType] = useState([]);
  const anotherUrl = `https://pokeapi.co/api/v2/type/${match.params.name}/`;

  useEffect(() => {
    fetch(anotherUrl)
      .then((res) => res.json())
      .then((res) => setType(res))
      .catch((error) => console.log(error));
  });

  if (!type) {
    return null;
  }

  return (
    <div>
      <div className="type">
        <h1>Pokemon:</h1>
        {type.pokemon
          ? type.pokemon.map((pokemon) => {
              return (
                <div>
                  <h3>{pokemon.pokemon.name}</h3>
                </div>
              );
            })
          : ""}
      </div>
      <div className="type">
        <h1>Moves:</h1>
        {type.moves
          ? type.moves.map((move) => {
              return <h3>{move.name}</h3>;
            })
          : ""}
      </div>
    </div>
  );
};

export default PokemonTypes;
