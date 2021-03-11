import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Pokedex.css";
import ReactPaginate from "react-paginate";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res.results);
      });
  }, []);

  const usersPerPage = 50;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(pokemon.length / usersPerPage);

  const displayUsers = pokemon
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((pokemon) => {
      return (
        <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
          <div>
            <div className="gold">
              <h1>{pokemon.name}</h1>
            </div>
          </div>
        </Link>
      );
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section className="pokeNames">
      {displayUsers}
      <ReactPaginate
        previousLabel="prev"
        nextLabel="next"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationsBtns"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </section>
  );
};

export default Pokedex;
