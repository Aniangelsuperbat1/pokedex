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

  const usersPerPage = 80;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(pokemon.length / usersPerPage);

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const clear = () => {
    setValue("");
  };

  const display = value.length > 0;

  const displayUsers = pokemon
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .filter((val) => {
      if (value === "") {
        return val;
      } else if (val.name.includes(value)) {
        return val;
      }
    })
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
    <section>
      <input
        type="text"
        value={value}
        placeholder="Search"
        onChange={handleChange}
      />
      {display && <button onClick={clear}>Clear</button>}
      <div className="pokeNames">
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
      </div>
      
    </section>
  );
};

export default Pokedex;
