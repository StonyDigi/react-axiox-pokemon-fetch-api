import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import Pokemon from './components/Pokemon';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {

    Axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => setPokemon(res.data.results));

  }, [])

  console.log(pokemon)

  return (
    <div className="App">
      <h1>Hello React-Axios! Pokemon</h1>

      {
        pokemon.map(p => {
          return <Pokemon name={p.name} url={p.url}/>
        })
      }
    </div>
  );
}

export default App;
