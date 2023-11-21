import React, { useState, useEffect} from "react";
import PokemonThumb from "../PokeCell/PokeThumb";
import { Link } from 'react-router-dom';
// import Navbar from "../Navbar";

const Home = () => {

  const[allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=50')

 const getAllPokemons = async () => {
   const res = await fetch(loadMore)
   const data = await res.json()

   setLoadMore(data.next)

   function createPokemonObject(results)  {
     results.forEach( async pokemon => {
       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
       const data =  await res.json()
       setAllPokemons( currentList => [...currentList, data])
       await allPokemons.sort((a, b) => a.id - b.id)
     })
   }
   createPokemonObject(data.results)
 }

useEffect(() => {
 getAllPokemons()
 console.log("Home component rendered");

}, [])

 return (
   <div className="app-contaner">
     <h1 className="text-center pt-10">Pokemon Evolution</h1>
     <div className="pokemon-container">
       <div className="all-container p-5 grid grid-cols-5 gap-4">
         {allPokemons.map( (pokemonStats, index) => 
           <PokemonThumb
             key={index}
             id={pokemonStats.id}
             image={pokemonStats.sprites.other.home.front_default}
             name={pokemonStats.name}
             type={pokemonStats.types[0].type.name}
           />)}
         
       </div>
         
     </div>
     
     <button className="load-more flex justify-center" onClick={() => getAllPokemons()}>Load more</button>
   </div>
 );
};

export default Home;
