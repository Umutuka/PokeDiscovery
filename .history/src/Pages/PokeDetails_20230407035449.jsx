import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import fetchPokemon from "../PokeCell/fetchPokemon";

const Details = () => {  
    const { id } = useParams();
    const results = useQuery(["pokedetails", id], fetchPokemon)
    return(
        <div> {id} </div>
    )
}

export default Details;