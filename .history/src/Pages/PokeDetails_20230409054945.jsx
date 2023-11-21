import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Training from "../DetailCells/Training";
import Breeding from "../DetailCells/Breeding";
import BaseStats from "../DetailCells/BaseStats";
import EvolutionChain from "../DetailCells/EvolutionChain";
import getPokemonGeneration from "../DetailCells/getGeneration";
import Generation from "../DetailCells/Generation";

const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [description, setSpecies] = useState([]);
  const [generation, setGeneration] = useState(0);

  {
    /* Getting Pokemon */
  }

  const getPokemon = async () => {
    const [api1Response, api2Response, api3Response] = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`),
      fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`),
    ]);

    const api1Data = await api1Response.json();
    const api2Data = await api2Response.json();

    setPokemon(api1Data);
    setSpecies(api2Data);
    setGeneration(getPokemonGeneration(id));
  };

  {
    /* Getting Pokemon Species --> Has Description*/
  }

  useEffect(() => {
    getPokemon();
  }, []);

  if (!pokemon.id || !description.id) {
    return (
      <div>
        <p>Loading... </p>
      </div>
    );
  }

  return (
    <div className="details bg-slate-200">
      {/*Pokemon Name */}
      <h1 className="name text-black-50 text-center font-bold mt-8">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h1>

      {/* Content Bar */}

      <div className=" bg-blue-400 m-5">
        <ul className="flex flex-wrap text-center justify-center">
          <li className="p-4 border text-3xl w-full sm:w-auto">Contents</li>
          <li className="p-4 border text-3xl">
            <a href="#Information">Info</a>
          </li>
          <li className="p-4 border text-3xl">
            <a href="#Training">Training</a>
          </li>
          <li className="p-4 border text-3xl">
            <a href="#Breeding">Breeding </a>
          </li>
          <li className="p-4 border text-3xl">
            <a href="#BaseStats">Base Stats</a>
          </li>
          <li className="p-4 border text-3xl">
            <a href="#Generation">Generation</a>
          </li>
          <li className="p-4 border text-3xl">
            <a href="#Evolution-Chain">Evolution Chain</a>
          </li>
        </ul>
      </div>

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
                <ul className="flex pt-4 font-semibold pl-1" key={index}>
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
                </ul>
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
        <section id="Training" className="m-1 h-full">
          <Training
            ev={pokemon.stats[0].effort}
            catch_rate={description.capture_rate}
            happiness={description.base_happiness}
            baseExp={pokemon.base_experience}
            growthRate={description.growth_rate.name}
          />
        </section>

        <section id="Breeding" className="m-1 h-full">
          <p>{description.flavor_text}</p>
          <Breeding
            eggGroups={description.egg_groups}
            gender={description.gender_rate}
            eggCycles={description.hatch_counter}
          />
        </section>

        <section id="BaseStats" className="m-1 h-full">
          <BaseStats stats={pokemon.stats} />
        </section>

        <section id="Generation" className="m-1 h-full">
          <Generation generation={generation} />
        </section>
      </div>

      <section id="Evolution-Chain" className="m-1 mb-5 pb-10">
        <EvolutionChain
          id={pokemon.id}
          evolutionChainUrl={description.evolution_chain.url}
        />
      </section>
    </div>
  );
};

export default Details;
