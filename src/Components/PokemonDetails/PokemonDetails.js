import React from "react";
import { useState, useEffect } from "react";

const PokemonDetails = ({ match }) => {
  const [details, setDetails] = useState([]);
  const nextUrl = `https://pokeapi.co/api/v2/pokemon/${match.params.name}/`;

  useEffect(() => {
    fetch(nextUrl)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        setDetails(res.abilities);
        // console.log(details.base_experience)
      });
  }, []);

  if (!details) {
    return null;
  }

  return (
    <>
      <div>
        <h1>
          {details.base_experience}
        </h1>
      </div>
    </>
  );
};
export default PokemonDetails;
