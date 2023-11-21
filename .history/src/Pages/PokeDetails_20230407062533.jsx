import React, { useState, useEffect} from "react";

import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import fetchPokemon from "../PokeCell/fetchPokemon";

const Details = () => {  
    const { id } = useParams();
    const[pokemon, setPokemon] = useState([])

    const getPokemon = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        setPokemon(data)
    }


    useEffect(() => {
        
            getPokemon();
        
        
    }, [])

    const {data,error, isLoading} = useQuery('pokemon', getPokemon)


    if(error) return <div>Failed</div>
    if(isLoading) return <div>Loading...</div>

    

    return (
        <div className="details">
            <div>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites.front_default}></img>
                <p>National No: {pokemon.id}</p>
                <p>Height : {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                

            </div>
        </div>
    );
    
}

export default Details;