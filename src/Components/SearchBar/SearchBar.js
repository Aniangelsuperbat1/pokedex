import React from 'react';
import {useState} from "react"

const SearchBar = () => {

    const [value, setValue] = useState("")
    const clear = () => {
        
    }

    return (
        <div>
            <input type="text"/>
            <button onClick={clear}>Clear</button>
        </div>
    );
};

export default SearchBar;