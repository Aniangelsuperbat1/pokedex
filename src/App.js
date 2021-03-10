import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Pokedex from "./Components/Pokedex/Pokedex";
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails";
import PokemonType from "./Components/PokemonType/PokemonType";

function App() {
  return (
    <div>
      {/* <Home /> */}
      <nav>
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
          exact
          path="/pokmon/:name"
          render={(routerProps) => {
            <PokemonDetails match={routerProps.match} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
