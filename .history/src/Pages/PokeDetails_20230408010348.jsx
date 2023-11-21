import React, { useState, useEffect} from "react";

import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import fetchPokemon from "../PokeCell/fetchPokemon";

const Details = () => {  
    const { id } = useParams();
    const[pokemon, setPokemon] = useState([])
    const[description, setSpecies] = useState([])
    const number = 0;


    {/* Getting Pokemon */}

    const getPokemon = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        setPokemon(data);
    }

    {/* Getting Pokemon Species --> Has Description*/}
    const getPokemonStatus = async () =>{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
        const data = await res.json()
        setSpecies(data);
    }

    useEffect(() => {
        getPokemon();
        getPokemonStatus();
    }, [])
    
    if(!pokemon.id || !description.id){
        return(
            <div>
                <p>Loading... </p>
            </div>
        )
    }

    return (
        <div className="details">
            <div className="border m-5 rounded-lg bg-slate-300">
                <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                <img src={pokemon.sprites.front_default}></img>
                <p>National No: {pokemon.id}</p>
                <p>Height : {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Description: {description.flavor_text_entries[0].flavor_text}</p>
                

            </div>
        </div>
    );
    
}

export default Details;