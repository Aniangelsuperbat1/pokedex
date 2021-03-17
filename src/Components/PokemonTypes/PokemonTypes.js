import React from "react";
import { useState, useEffect } from "react";
import "./PokemonTypes.css";
import { Link } from "react-router-dom";
import logo from "./Pikachuwalking.gif"

const PokemonTypes = ({ match }) => {
  const [type, setType] = useState("");
  const anotherUrl = `https://pokeapi.co/api/v2/type/${match.params.name}/`;

  useEffect(() => {
    fetch(anotherUrl)
      .then((res) => res.json())
      .then((res) => setType(res))
      .catch((error) => console.log(error));
  });

  if (!type) {
    return (
      <div>
        <h1>LOADING...</h1>
        <img src={logo} alt="loading" />
      </div>
    );
  }

  return (
    <div>
      <div className="type">
        <h1>Pokémon:</h1>
        {type.pokemon
          ? type.pokemon.map((pokemon, index) => {
              return (
                <div className="poketype">
                  <Link to={`/pokemon/${pokemon.pokemon.name}`}>
                    {/* <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        index + 1
                      }.png`}
                      alt="pokemon"
                    /> */}
                    {/* <h3>{`${index + 1}. ${pokemon.pokemon.name}`}</h3> */}
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
                  <h3>{move.name}</h3>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default PokemonTypes;
