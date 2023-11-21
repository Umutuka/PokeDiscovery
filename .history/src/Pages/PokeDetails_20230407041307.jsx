import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import fetchPokemon from "../PokeCell/fetchPokemon";

const Details = () => {  
    const { id } = useParams();
    const results = useQuery(["pokedetails", id], fetchPokemon)
    
    if(results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">yo</h2>
            </div>
        );
    }

    const pokemon = results.data.pokemon[1];

    return (
        <div className="details">
            <div>
                <h1>{pokemon.name}</h1>
                <h2>
                    

                </h2>
            </div>
        </div>
    )
    
}

export default Details;