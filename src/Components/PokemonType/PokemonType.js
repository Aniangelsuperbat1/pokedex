import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PokemonType.css"
import typeColors from "../PokemonDetails/TypeColor"

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
              <div className="silver">
                <h1
                  style={{
                    backgroundColor: typeColors[pokeDetail.name],
                  }}
                >
                  {pokeDetail.name}
                </h1>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PokemonType;
