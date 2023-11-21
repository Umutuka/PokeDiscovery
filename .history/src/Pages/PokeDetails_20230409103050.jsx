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
  const previousPokemonResponse =
    id - 1 > 0
      ? await fetch(`https://pokeapi.co/api/v2/pokemon/${id - 1}/`).then(
          (res) => res.json()
        )
      : null;
  const nextPokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id + 1}/`
  ).then((res) => res.json());

  const [pokemonResponse, descriptionResponse] = await Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json()),
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`).then((res) =>
      res.json()
    ),
  ]);

  const { name } = pokemonResponse;
  const { generation } = getPokemonGeneration(id);

  const data = {
    pokemon: {
      ...pokemonResponse,
      name: name.charAt(0).toUpperCase() + name.slice(1),
    },
    description: descriptionResponse,
    generation,
    nextPokemon: nextPokemonResponse,
    previousPokemon: previousPokemonResponse,
  };

  return data;
};

const Details = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(["pokemon", id], () =>
    fetchPokemon(id)
  );

  useEffect(() => {
    console.log("dex component rendered");
    console.log({ id });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const { pokemon, previousPokemon, nextPokemon, description, generation } =
    data;

  return (
    <div className="details bg-slate-200">
      {/*Pokemon Name */}
      <h1 className="name text-black-50 text-center font-bold mt-8">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h1>

      {/* DEX NAV */}

      <nav>
        <div>
          {pokemon.id - 1 > 0 ? (
            <div>
              <Link to={`/${pokemon.id - 1}`} className="before-dex float-left">
                <p>{previousPokemon.name}</p>
              </Link>

              <Link
                to={`/${pokemon.id + 1}`}
                className="before-dex float-right"
              >
                <p> Yo</p>
              </Link>
            </div>
          ) : (
            <Link to={`/${Math.Num(pokemon.id) + 1}`} className="before-dex float-right">
              <p> Yo</p>
            </Link>
          )}
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
