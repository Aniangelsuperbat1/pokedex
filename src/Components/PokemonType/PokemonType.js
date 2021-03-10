import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PokemonType.css"

const PokemonType = () => {
  const [pokeDetails, setPokeDetails] = useState([]);
  const anotherUrl = "https://pokeapi.co/api/v2/type/";

  useEffect(() => {
    fetch(anotherUrl)
      .then((res) => res.json())
      .then((res) => {
        setPokeDetails(res.results);
      });
  }, []);

  return (
    <div className="pokeType">
      {pokeDetails.map((pokeDetail) => {
        return (
          <Link to={`/type/${pokeDetail.name}`} key={pokeDetail.name}>
            <div>
              <div>
                <h1>{pokeDetail.name}</h1>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PokemonType;
