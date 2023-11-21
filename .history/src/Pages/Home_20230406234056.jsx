import React, { useState, useEffect} from "react";
import Fetch_Pokemon from "../Fetch/Fetch_Pokemon";
// import Navbar from "../Navbar";

const Home = () => {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    const fetchPokemon = async() => {
      const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      const data = await Response.json();
      const pokemonList = data.results.slice(0, data.results.length).map(items => items).flat();
      setPokemon(pokemonList);
      return apiRes.json();
  
    };

    fetchData()
  } , [])

  return (
    <div>
      {/* INTRO SECTION */}
      <div className="poke-list">
          {pokemon.map((pokeClass, id) => {
              return (
                <PokeCell key={id} pokeClass = {id} />
              )
          })}
      </div>
 
    </div>
  );
};

export default Home;
