import React from 'react';
import {Link, Route} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <nav>
                <h1><Link to="/">Home</Link></h1>
                <h1><Link to="/about">About</Link></h1>
                <h1><Link to="/pokedex">Pokedex</Link></h1>
            </nav>
        </div>
    );
};

export default Home;