import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Training from "../DetailCells/Training";
import Breeding from "../DetailCells/Breeding";
import BaseStats from "../DetailCells/BaseStats";
import EvolutionChain from "../DetailCells/EvolutionChain";

const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [description, setSpecies] = useState([]);
  const [evolutionChain, setEvolutionChain] = useState([]);


  {
    /* Getting Pokemon */
  }

  const getPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    setPokemon(data);
  };

  {
    /* Getting Pokemon Species --> Has Description*/
  }
  const getPokemonStatus = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
    const data = await res.json();
    setSpecies(data);
  };

  const getEvolutionChain = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
    const data = await res.json();
    setEvolutionChain(data);
  }

  useEffect(() => {
    getPokemon();
    getPokemonStatus();
    getEvolutionChain();
  }, []);

  if (!pokemon.id || !description.id) {
    return (
      <div>
        <p>Loading... </p>
      </div>
    );
  }

  return (
    <div className="details">
      {/*Pokemon Name */}
      <h1 className="name text-gray-50 text-center font-bold italic mt-5">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h1>

      {/* Pokemon Card */}
      <section className="pokemon-card grid grid-cols-2  border mt-10 m-2 p-5 rounded-lg bg-slate-100">
        {/* Picture Frame */}
        <div className="mr-10">
          <img
            className="mx-auto my-auto object-fill bg-red-400 rounded-lg border"
            src={pokemon.sprites.other.home.front_default}
          ></img>
        </div>

        {/* Pokemon Information */}
        <div className="Info border-l-4 border-l-red-500 space-y-3">
          {/*National Pokedex */}
          <p className="text-3xl flex font-sans">National No: {pokemon.id} </p>
          {/*Type*/}
          <ul className="text-3xl flex space-x-1  font-sans">
            Type :{" "}
            {pokemon.types.map((type, index) => {
              return (
                <li className="pl-1" key={index}>
                  {type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1)}
                </li>
              );
            })}
          </ul>

          {/*Abilities*/}
          <ul className="text-3xl space-y-4 space-x-0 font-sans">
            Abilities:{" "}
            {pokemon.abilities.map((ability, index) => {
              return (
                <li className="flex pt-4 font-semibold pl-1" key={index}>
                  {ability.is_hidden ? (
                    <li>
                      {" "}
                      {ability.ability.name.charAt(0).toUpperCase() +
                        ability.ability.name.slice(1)}{" "}
                      (Hidden){" "}
                    </li>
                  ) : (
                    <li>
                      {" "}
                      {ability.ability.name.charAt(0).toUpperCase() +
                        ability.ability.name.slice(1)}{" "}
                    </li>
                  )}
                </li>
              );
            })}
          </ul>
          {/*Height*/}
          <p className="text-3xl flex font-sans">
            Height : {pokemon.height / 10} m (
            {Math.round((pokemon.height / 10) * 3.281)} ft)
          </p>
          {/*Weight*/}
          <p className="text-3xl flex font-sans">
            Weight: {pokemon.weight / 10} kg
          </p>
          {/*Description*/}
          <p className="text-3xl flex font-sans">
            Description: {description.flavor_text_entries[0].flavor_text}
          </p>
        </div>
      </section>

      <div className="grid grid-cols-2 mb-5 h-full">
        <section className="Training m-1 h-full">
          <Training
            ev={pokemon.stats[0].effort}
            catch_rate={description.capture_rate}
            happiness={description.base_happiness}
            baseExp={pokemon.base_experience}
            growthRate={description.growth_rate.name}
          />
        </section>

        <section className="m-1 h-full">
          <p>{description.flavor_text}</p>
          <Breeding
            eggGroups={description.egg_groups}
            gender={description.gender_rate}
            eggCycles={description.hatch_counter}
          />
          
        </section>

        <section className="m-1 h-full">
          <BaseStats stats={pokemon.stats} />
        </section>

        <section>
          
        </section>

        

      </div>
    </div>
  );
};

export default Details;
