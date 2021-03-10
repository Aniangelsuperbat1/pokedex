import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res.results);
        console.log(res.results);
      });
  }, []);

 return (
   <section>
     {pokemon.map((pokemon) => {
       return (
         <Link to={`/details/${pokemon.name}`}>
           <div>
             <div>
               <h3>{pokemon.name}</h3>
             </div>
           </div>
         </Link>
       );
     })}
   </section>
 );
};

export default Pokedex;
