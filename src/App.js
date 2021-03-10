import React from "react"
import {Link, Route} from "react-router-dom"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Pokedex from "./Components/Pokedex/Pokedex"


function App() {
  return (
    <div>
       <Home />
       <Route path="/about" component={About}></Route>
       <Route path="/pokedex"component={Pokedex}></Route>
       
    </div>
  );
}

export default App;
