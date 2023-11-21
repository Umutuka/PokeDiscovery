import React, { useState, useEffect } from "react";
import Training from "../DetailCells/Training";
import Breeding from "../DetailCells/Breeding";
import BaseStats from "../DetailCells/BaseStats";
import EvolutionChain from "../DetailCells/EvolutionChain";
import getPokemonGeneration from "../DetailCells/getGeneration";
import Generation from "../DetailCells/Generation";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const fetchPokemon = async (id) => {

  const [api1Response, api2Response] = await Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`),
    fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`),
  ]);

  const api1Data = await api1Response.json();
  const api2Data = await api2Response.json();

  return {
    pokemon: api1Data,
    description: api2Data,
    generation: getPokemonGeneration(id),
  };
};


const Details = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(["pokemon", id], () =>
  fetchPokemon(id)
);

  useEffect(() => {
    console.log("dex component rendered");
    console.log({id});
    

  }, []);
  

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const { pokemon, description, generation } = data;

  return (
    <div className="details bg-slate-200">
      {/*Pokemon Name */}
      <h1 className="name text-black-50 text-center font-bold mt-8">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h1>

      {/* DEX NAV */}

      <nav>
        <div>
          <Link to={`/pokedetails/${pokemon.id - 1}`} className='before-dex float-left'>
              <p> Yo</p>
          </Link>

          <Link to={`/pokedetails/${pokemon.id + 1}`} className='before-dex float-right'>
              <p> Yo</p>
          </Link>


        </div>

      </nav>

      {/* Content Bar */}

      <div className=" bg-slate-300 rounded-lg m-5">
        <ul className="flex flex-wrap text-center justify-center">
          <li className="p-4 font-bold m-4 border-r-4 text-2xl w-full sm:w-auto">
            Contents
          </li>
          <li className="p-4 m-4 hover:text-red-600 border-r-4 text-2xl">
            <a href="#Information">Info</a>
          </li>
          <li className="p-4 m-4 hover:text-red-600 border-r-4 text-2xl">
            <a href="#Training">Training</a>
          </li>
          <li className="p-4 m-4 hover:text-red-600 border-r-4 text-2xl">
            <a href="#Breeding">Breeding </a>
          </li>
          <li className="p-4 m-4 hover:text-red-600 border-r-4 text-2xl">
            <a href="#BaseStats">Base Stats</a>
          </li>
          <li className="p-4 m-4 hover:text-red-600 border-r-4 text-2xl">
            <a href="#Generation">Generation</a>
          </li>
          <li className="p-4 m-4 hover:text-red-600 border-r-4  text-2xl">
            <a href="#Evolution-Chain">Evolution Chain</a>
          </li>
        </ul>
      </div>


    </div>
  );
};

export default Details;
