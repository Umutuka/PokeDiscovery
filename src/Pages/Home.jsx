import React, { useState, useEffect } from "react";
import PokemonThumb from "../PokeCell/PokeThumb";
// import Navbar from "../Navbar";

const Pokedex = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
    console.log("Home component rendered");
  }, []);

  return (
    <div className="app-contaner m-5 opacity-100">
      <div className="pokemon-container mt-10 rounded-lg bg-slate-300">
        <h1 className="text-center font-bold pt-10">Pokemon Evolution</h1>

        <section className="border m-3 rounded-lg bg-slate-500">
          <p className="p-5 font-bold">
            The Pokédex section has a wealth of information on all the Pokémon
            creatures from the entire game series. On the main list pages you
            can see the various Pokemon Appearances along with its name and
            typing. Click a Pokémon's name to see a detailed page with Pokédex
            data, descriptions , sprites, evolutions, ability and more!
          </p>{" "}
        </section>

        <section className="about-items flex grid-cols-2 m-5">
          <div className="space-y-5 text-xl">
            <h2 className="text-2xl font-bold flex ">About Pokemon Stats</h2>

            <p>
              {" "}
              Every Pokémon creature has an array of stats. HP (Hit Points) is a
              Pokémon's life force. If your Pokémon's HP hits zero, it faints
              and is no longer usable in battle (it can still use Hidden
              Machines, though). The Speed stat decides which Pokémon will make
              the first move in battle. This stat can be critical in long
              battles.
            </p>

            <p>
              {" "}
              Attack and Special Attack measure the strength of moves used by
              your Pokémon; the higher this is, the more damage you will do to
              opponents. Attack corresponds to moves in the Physical category,
              while Special Attack corresponds to Special moves.
            </p>

            <p className="">
              Similarly, Defense and Special Defense measure the ability to take
              attacks from other Pokémon; the higher the stat is, the fewer Hit
              Points will be lost when attacked. Defense corresponds to moves in
              the Physical category, while Special Defense corresponds to
              Special moves.
            </p>

            <p className="font-bold">
              Note: prior to Diamond/Pearl, the Physical and Special categories
              related to Pokémon types, not the individual moves. See the
              attack-dex for full information.
            </p>
          </div>
        </section>

        <section>

        <h2 className="text-2xl font-bold flex m-5 ">National Pokedex</h2>


        <div className="all-container p-5 grid grid-cols-5 gap-4">
          {allPokemons.map((pokemonStats, index) => (
            <PokemonThumb
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.home.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />
          ))}
        </div>
        <div className="flex border rounded-lg m-5 p-5 text-2xl hover:bg-slate-200 bg-slate-600 justify-center">
          <button
            className="load-more justify-center"
            onClick={() => getAllPokemons()}
          >
            Load more
          </button>
        </div>
        </section>
      </div>
    </div>
  );
};

export default Pokedex;
