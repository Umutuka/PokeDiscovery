import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EvolutionChain = ({ id, evolutionChainUrl }) => {
  const [evolutionChain, setEvolutionChain] = useState(null);

  const fetchEvolutionChain = async () => {
    try {
      const evolutionChainResponse = await fetch(evolutionChainUrl);
      const evolutionChainData = await evolutionChainResponse.json();
      setEvolutionChain(evolutionChainData);
    } catch (error) {
      console.error("Error fetching evolution chain data:", error);
    }
  };

  useEffect(() => {
    fetchEvolutionChain();
  }, [id]);

  const getEvolutionChainRecursive = (chain) => {
    if (!chain) {
      return null;
    }

    const { species } = chain;
    const name = species.name.charAt(0).toUpperCase() + species.name.slice(1);

    const imageId = species.url.split("/").slice(-2, -1)[0];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`;

    const pokemon = {
      name: name,
      imageUrl: imageUrl,
      imageId: imageId
    };

    if (chain.evolves_to.length === 0) {
      return pokemon;
    }

    return {
      ...pokemon,
      evolvesTo: chain.evolves_to.map((evolution) =>
        getEvolutionChainRecursive(evolution)
      ),
    };
  };

  const PokemonCard = ({ name, imageUrl, imageId }) => {
    return (
      <div className="flex rounded-lg mb-2 shadow-xl items-center">
        <Link to={`/${imageId}`}>

        <img className="w-52 h-52" src={imageUrl} alt={name} />
        <p className="ml-2 text-lg font-bold">{name}</p>
        </Link>
      </div>
    );
  };

  const renderPokemon = (pokemon) => {
    return (
      <div key={pokemon.name} className="flex flex-col">
        <PokemonCard name={pokemon.name} imageUrl={pokemon.imageUrl} />
        {pokemon.evolvesTo && (
          <div className="ml-20">
            {pokemon.evolvesTo.map((evolution) => renderPokemon(evolution))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-1 pb-10 space-y-2 text-base font-semibold border rounded-lg bg-slate-300 text-left">
      <h2 className="text-2xl m-3 text-left mb-5">Evolution Chain</h2>
      {evolutionChain && renderPokemon(getEvolutionChainRecursive(evolutionChain.chain))}
    </div>
  );
};

export default EvolutionChain;
