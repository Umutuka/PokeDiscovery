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
        getPokemon()
    }, [])

    return (
        <div className="details">
            <div>
                <h1>{pokemon.name}</h1>
                <h2>{pokemon.sprites.front_default}</h2>
            </div>
        </div>
    );
    
}

export default Details;