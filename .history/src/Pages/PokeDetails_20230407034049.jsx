import React from "react";
import PokemonThumb from "../PokeCell/PokeThumb";
import { useParams } from "react-router-dom";

const Details = () => {  
    const { id } = useParams();
    return(
        <div> {id} </div>
    )
}

export default Details;