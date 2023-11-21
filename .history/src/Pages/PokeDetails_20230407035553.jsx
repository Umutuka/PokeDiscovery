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
                <h2 className="loader"></h2>
            </div>
        )




    }
    return(
        <div> {id} </div>
    )
}

export default Details;