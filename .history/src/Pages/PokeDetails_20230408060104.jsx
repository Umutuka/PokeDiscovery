import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Training from "../DetailCells/Training";
import Breeding from "../DetailCells/Breeding";

const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [description, setSpecies] = useState([]);

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

  useEffect(() => {
    getPokemon();
    getPokemonStatus();
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
          <ul className="text-3xl text-center space-y-4 space-x-2 font-sans">
            Abilities:{" "}
            {pokemon.abilities.map((ability, index) => {
              return (
                <li className="flex font-semibold pl-1" key={index}>
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

      <div className="flex">
  <section className="Training m-5 flex-1">
    <Training
      ev={pokemon.stats[0].effort}
      catch_rate={description.capture_rate}
      happiness={description.base_happiness}
      baseExp={pokemon.base_experience}
      growthRate={description.growth_rate.name}
    />
  </section>

  <section className="m-5 flex-1">
    <p>{description.flavor_text}</p>
    <Breeding
      eggGroups={description.egg_groups}
      gender={description.capture_rate}
      eggCycles={description.base_happiness}
    />
  </section>
</div>


    </div>
  );
};

export default Details;
