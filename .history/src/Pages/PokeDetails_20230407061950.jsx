import React, { useState, useEffect} from "react";

import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import fetchPokemon from "../PokeCell/fetchPokemon";

const Details = () => {  
    const { id } = useParams();
    const[pokemon, setPokemon] = useState([])
    const [loading,setLoading] = useState(false);

    const getPokemon = async () => {
        try{
            setLoading(true);
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            
            
        
        const data = await res.json()
        setLoading(false);
        setPokemon(data)
        } catch (error){
            setLoading(false);
            console.error(error)
        }

    }

    useEffect(() => {
        
            getPokemon();
        
        
    }, [])

    

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