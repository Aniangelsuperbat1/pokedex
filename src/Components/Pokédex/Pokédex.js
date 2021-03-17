import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Pokedex.css";
import ReactPaginate from "react-paginate";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";

const Pokédex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [value, setValue] = useState("");
  const [page, setPage] = useState();

  const limit = 1118;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res.results);
      });
  }, []);

  const usersPerPage = 100;
  const pagesVisited = pageNumber * usersPerPage;
  let pageCount = 0

  const handleChange = (e) => {
    setValue(e.target.value);
    setPageNumber(0)
  };

  const clear = () => {
    setValue("");
  };

  const display = value.length > 0;

  const displayUsers = pokemon
    .filter((val) => {
      if (value === "") {
        return val;
      } else if (val.name.includes(value)) {
        return val;
      }
    })
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((pokemon, index) => {
      console.log(pokemon[0])
      let num = pagesVisited + index + 1
      pageCount = Math.ceil(limit / usersPerPage);
      let paddedNum = num.toString().padStart(3, "0");
      return (
        <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
          <div>
            <div className="gold">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`}
                alt="pokemon"
              />
              <p>{pageCount}</p>
              {index + 1 < 10 ? (
                <img
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedNum}.png`}
                  alt="pokemon"
                />
              ) : index + 1 < 100 ? (
                <img
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedNum}.png`}
                  alt="pokemon"
                />
              ) : (
                <img
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedNum}.png`}
                  alt="pokemon"
                />
              )}
              <h1>{`${num}. ${pokemon.name}`}</h1>
              {/* <h1>{pokemon.name}</h1> */}
            </div>
          </div>
        </Link>
      );
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  //   const BarStyling = {
  //     width: "20rem",
  //     background: "#F2F1F9",
  //     border: "none",
  //     padding: "0.5rem",
  //     margin: "20px",
  //     textcolor: "white",
  // };
  return (
    <section>
      {/* <input
        style={BarStyling}
        type="text"
        value={value}
        placeholder="Search"
        results="0"
        onChange={handleChange}
      /> */}
      <div className="search">
        <SearchIcon className="searchIcon" />
        <TextField
          value={value}
          placeholder="Search Pokémon"
          className="input"
          // label="Pokemon"
          variant="standard"
          onChange={handleChange}
        />
      </div>
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

export default Pokédex;
