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

        function createPokemon(results) {
            results.forEach( async pokemon => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setPokemon( currentList => [...currentList, data])
            })   
        }
        createPokemon(data.results)
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <div className="details">
            <div>
                <h1>{pokemon.id}</h1>
                <h2>
                    

                </h2>
            </div>
        </div>
    );
    
}

export default Details;