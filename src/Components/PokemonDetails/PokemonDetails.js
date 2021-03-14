import React from "react";
import { useState, useEffect } from "react";
import "./PokemonDetails.css";
// import axios from "axios"
import logo from "./slowpoke.gif"

const PokemonDetails = ({ match }) => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const nextUrl = `https://pokeapi.co/api/v2/pokemon/${match.params.name}/`;

  useEffect(() => {
    setLoading(true);
    fetch(nextUrl)
      .then((res) => res.json())
      .then((res) => {
        setDetails(res);
        setLoading(false);
      });
  }, []);

  if (loading && details.length === 0) {
    return (
      <div>
        <h1>LOADING...</h1>
        <img src={logo} alt="loading" />
      </div>
    );
  }

  return (
    <>
      <div>
        <h1>{`Pokemon # ${details.id}`}</h1>
        {details.forms
          ? details.forms.map((form) => {
              return <h1>{form.name}</h1>;
            })
          : ""}
        <div>
          {details.sprites ? (
            <img
              src={details.sprites.other["official-artwork"].front_default}
            />
          ) : (
            ""
          )}
          <div>
            {details.stats
              ? details.stats.map((detail) => {
                  return <h1>{`${detail.stat.name} : ${detail.base_stat}`}</h1>;
                })
              : ""}
            <h1>Type:</h1>
            {details.types
              ? details.types.map((type) => {
                  return (
                    <div>
                      <h1>{type.type.name.toUpperCase()}</h1>
                    </div>
                  );
                })
              : ""}
          </div>
          <div className="pokedex">
            <h1>Moves:</h1>
            {details.moves
              ? details.moves.map((move) => {
                  return (
                    <div className="silver">
                      <h3>{move.move.name}</h3>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};
export default PokemonDetails;
