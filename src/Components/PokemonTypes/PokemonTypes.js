import React from "react";
import { useState, useEffect } from "react";

const PokemonTypes = ({ match }) => {
  const [type, setType] = useState([]);
  const anotherUrl = `https://pokeapi.co/api/v2/pokemon/${match.params.name}/`;

  useEffect(() => {
      fetch(anotherUrl)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch((error) => console.log(error))
  })

  if (!type) {
    return null;
  }

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

export default PokemonTypes;
