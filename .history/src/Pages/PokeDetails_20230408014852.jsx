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
            <section className="pokemon-card flex border mt-20 m-2 p-5 rounded-lg bg-slate-100">
                <div className="mr-10">
                    <h1 className="name font-bold">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                    <img className="mx-auto w-52" src={pokemon.sprites.other.home.front_default}></img>
                </div>
                
            <div className="Info space-y-3">
                <p className="text-3xl font-sans">National No: {pokemon.id} </p>
                <p className="text-3xl font-sans">Type : {pokemon.types.map((type, index) => {
                    <ul key = {index}>
                        <li> {type.name}</li>
                    </ul>

                }).type.name}</p>



                <p className="text-3xl font-sans">Height : {pokemon.height / 10} m ({Math.round(pokemon.height / 10 * 3.281)} ft)</p>
                <p className="text-3xl font-sans">Weight: {pokemon.weight / 10} kg</p>
                <p className="text-3xl font-sans">Description: {description.flavor_text_entries[0].flavor_text}</p>
            </div>    
                

            </section>
        </div>
    );
    
}

export default Details;