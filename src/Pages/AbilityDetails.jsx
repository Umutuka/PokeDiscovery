import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AbilityPokemonCell from "../AbilityCells/AbilityPokemonCells";

const fetchAbility = async (id) => {
  const previousAbilityResponse = id - 1 > 0 ? await fetch(`https://pokeapi.co/api/v2/ability/${id - 1}/`).then((res) => res.json()) : null;
  const nextAbilityResponse = await fetch(`https://pokeapi.co/api/v2/ability/${Number(id) + 1}/`).then((res) => res.json());

  const [abilityResponse, descriptionResponse] = await Promise.all([
    fetch(`https://pokeapi.co/api/v2/ability/${id}`).then((res) => res.json()),
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((res) => res.json()),
  ]);

  const { name } = abilityResponse;

  const data = {
    ability: {
      ...abilityResponse,
      name: name.charAt(0).toUpperCase() + name.slice(1),
    },
    description: descriptionResponse,
    nextAbility: nextAbilityResponse,
    previousAbility: previousAbilityResponse,
  };

  return data;
};

const Details = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(["Ability", id], () => fetchAbility(id));

  useEffect(() => {
    console.log("dex component rendered");
    console.log({ id });
  }, []);

  if (isLoading) return <img src="https://drive.google.com/uc?export=view&id=1mSItftGDMZL57v0mloTsSLbuBv9NM_0I" className="animate-spin block m-56 ml-auto mr-auto w-1/2"></img>;

  if (error) return <p>Error: {error.message}</p>;

  const { ability, description, nextAbility, previousAbility } = data;

  return (
    <div className="details mt-5 p-5 bg-slate-200 m-5 rounded-lg">
      <h1 className="ability-name italic text-center">
        Ability Name : <span className=" font-bold">{ability.name}</span>
      </h1>

      <nav className="p-5">
        <div>
          {ability.id - 1 > 0 ? (
            <div className="relative">
              <Link to={`/Abilities/${ability.id - 1}`} className="before-dex font-bold hover:bg-slate-500 p-2 rounded-lg float-left">
                <p> {"<= #" + (ability.id - 1) + " " + previousAbility.name.charAt(0).toUpperCase() + previousAbility.name.slice(1)}</p>
              </Link>

              <Link to={`/Abilities/${ability.id + 1}`} className="before-dex font-bold hover:bg-slate-500 p-2 rounded-lg float-right">
                <p>{"#" + (ability.id + 1) + " " + nextAbility.name.charAt(0).toUpperCase() + nextAbility.name.slice(1) + "=>"}</p>
              </Link>
            </div>
          ) : (
            <Link to={`/Abilities/${ability.id + 1}`} className="before-dex font-bold hover:bg-slate-500 p-2 rounded-lg float-right">
              <p> {"# " + (ability.id + 1) + " " + nextAbility.name.charAt(0).toUpperCase() + nextAbility.name.slice(1) + "=>"}</p>
            </Link>
          )}
        </div>
      </nav>

      <div className="border rounded-lg m-5 bg-slate-500">
        <h2 className="text-center text-2xl font-bold pb-5 underline">Details</h2>
        <ul className="text-center space-y-5 text-3xl">
          <li> ID : {ability.id}</li>
          <li> Generation : {ability.generation.name.slice(11, 14).toUpperCase()}</li>
          <li> Description: {ability.effect_entries[1].effect}</li>
        </ul>
      </div>

      <div className="bg-slate-500 m-5 rounded-lg">
        <h2 className="text-center text-2xl  underline font-bold">List of Pokemon With this ability</h2>
        <div className="Pokemon-with-ab grid grid-cols-5 m-5 p-5 gap-4">
          {ability.pokemon.map((pokemonList, index) => {
            return (
              <div className="all-container gap-4 justify-center">
                <AbilityPokemonCell key={index} id={pokemonList.pokemon.url.split("/")[6]} name={pokemonList.pokemon.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
