import axios from "axios";
import React, { useState } from "react";

const PokeList = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";

  const [pokemons, setPokemons] = useState([]);
  const fetchPokemon = async () => {
    const { data } = await axios.get(url);
    setPokemons(data.results);
  };
  return (
    <div>
      <h1>Pokelist</h1>
      <button onClick={fetchPokemon}>Show pokemon</button>
      {pokemons.length > 0 ? (
        <ul aria-label="pokemonlist">
          {pokemons.map((poke: any) => (
            <li key={poke.name} aria-label="pokemon">
              {poke.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default PokeList;
