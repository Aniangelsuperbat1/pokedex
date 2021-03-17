import React from "react";
import { useState, useEffect } from "react";
import "./PokemonTypes.css";
import { Link } from "react-router-dom";
import logo from "./Pikachuwalking.gif"

const PokemonTypes = ({ match }) => {
  const [type, setType] = useState("");
  const limit = 1118;
  const usersPerPage = 100;
  const [pageNumber, setPageNumber] = useState(0);
  const pagesVisited = pageNumber * usersPerPage;
  let pageCount = 0;

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
          ? type.pokemon.map((pokemon) => {
            let pokeId = pokemon.pokemon.url.split("/");
            let pokeIdLength = pokeId.length;
            let num = pokeId[pokeIdLength - 2];
            // pageCount = Math.ceil(limit / usersPerPage);
            let paddedNum = num.padStart(3, "0");
              return (
                <div className="poketype">
                  <Link to={`/pokemon/${pokemon.pokemon.name}`}>
                    <h3>{pokemon.pokemon.name}</h3>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`}
                      alt="pokemon"
                    />
                    <img
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedNum}.png`}
                      alt="pokemon"
                    />
                    <h1>{`${num}. ${pokemon.pokemon.name}`}</h1>
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
