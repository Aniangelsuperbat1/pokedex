import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Pokedex from "./Components/Pokedex/Pokedex";
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails";
import PokemonType from "./Components/PokemonType/PokemonType";
import PokemonTypes from "./Components/PokemonTypes/PokemonTypes";
import "./App.css"


function App() {
  return (
    <div className="top">
      {/* <img src="/pokemonfire.jpg"/> */}
      {/* <Home /> */}
      <nav className="navBar">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>
          <Link to="/about">About</Link>
        </h1>
        <h1>
          <Link to="/pokedex">Pokedex</Link>
        </h1>
        <h1>
          <Link to="/pokemondetail">Pokemon Types</Link>
        </h1>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/pokemondetail" component={PokemonType}></Route>
        <Route path="/pokedex" component={Pokedex}></Route>
        <Route
          path="/pokemon/:name"
          render={(routerProps) => <PokemonDetails match={routerProps.match} />}
        />
        <Route
          path="/type/:name"
          render={routerProps => <PokemonTypes match={routerProps.match} />}
        />
      </Switch>
    </div>
  );
}

export default App;
