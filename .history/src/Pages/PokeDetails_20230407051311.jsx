import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import fetchPokemon from "../PokeCell/fetchPokemon";

const Details = () => {  
    const { id } = useParams();


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