import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon2 from './components/Pokemon2';

const App2 = () => {

    const [input, setInput] = useState("");
    const [api, setApi] = useState([]);

    const searchPokemon = () => {
        if(input != "") {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
            .then(res => setApi([...api, res.data]));
        }
    }

    console.log(input)

  return (
    <div>
        <h1>Pokemon keresés</h1>

        <input type="text" placeholder='Írd be a pokemon nevét...' value={input} onChange={(e) =>{

            setInput(e.target.value);

        }} />
        <button type='button' onClick={searchPokemon}>Keresés</button>

        {
            api.map(pokemon => {
                return <Pokemon2 img={pokemon.sprites.front_default} name={pokemon.name}/>
            })
        }
    </div>
  )
}

export default App2