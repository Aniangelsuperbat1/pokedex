import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
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
      <nav className="navBar">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>
          <Link className="link"to="/about">About</Link>
        </h1>
        <h1>
          <Link to="/pokedex">Pokedex</Link>
        </h1>
        <h1>
          <Link to="/pokemontype">Pokemon Types</Link>
        </h1>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/pokemontype" component={PokemonType}></Route>
        <Route path="/pokedex" component={Pokedex}></Route>
        <Route
          path="/pokemon/:name"
          render={(routerProps) => <PokemonDetails match={routerProps.match} />}
        />
        <Route
          path="/type/:name"
          render={(routerProps) => <PokemonTypes match={routerProps.match} />}
        />
        {/* <Route
          path="/type/:name/:nametype"
          render={() => <Redirect to="/pokemon/:name" />}
        /> */}
      </Switch>
    </div>
  );
}

export default App;
