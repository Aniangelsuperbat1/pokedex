import React from "react";
import {useState, useEffect} from "react"

const Pokedex = () => {
    const [pokemon, setpokemon] = useState([])
    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"

  return (
    <div>
      <h1>pokedex</h1>
    </div>
  );
};

export default Pokedex;
