import React from "react";
import { useState, useEffect } from "react";
import "./PokemonTypes.css";
import { Link } from "react-router-dom";

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
                <div className="poketype">
                  <Link to={`/pokemon/${pokemon.pokemon.name}`}>
                    <h3>{pokemon.pokemon.name}</h3>
                  </Link>
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <h1></h1>
      </div>
      <div className="type">
        <h1>Moves:</h1>
        {type.moves
          ? type.moves.map((move) => {
              return (
                <div className="move">
                  <h3 >{move.name}</h3>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default PokemonTypes;
