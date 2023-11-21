import React, { useState, useEffect } from "react";


const EvolutionChain = ({ pokemonId }) => {
    const [evolutionChain, setEvolutionChain] = useState([]);
  
    useEffect(() => {
      const fetchEvolutionChain = async () => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/evolution-chain/${pokemonId}`
        );
        const data = await response.json();
        setEvolutionChain(data.chain);
      };
  
      fetchEvolutionChain();
    }, [pokemonId]);

    if (!evolutionChain.id) {
      return (
        <div>
          <p>Loading... </p>
        </div>
      );
    }

    
  
    const renderEvolutionChain = (chain) => {
      if (!chain) {
        return null;
      }
  
      const { species, evolves_to } = chain;
  
      return (
        <div className="flex flex-row justify-between items-center">
          <div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${species.url
                .split("/")
                .slice(-2, -1)}${
                species.name === "nidoran-f" ? "-f" : ""
              }.png`}
              alt={species.name}
              className="w-20 h-20"
            />
            <p className="text-center capitalize">{species.name}</p>
          </div>
          {evolves_to.length > 0 && (
            <div className="mx-8">
              <p className="text-center text-2xl font-bold">→</p>
            </div>
          )}
          {evolves_to.map((evolution) => {
            return renderEvolutionChain(evolution);
          })}
        </div>
      );
    };
  
    return (
      <div className="my-4">
        <h2 className="text-2xl font-bold mb-2">Evolution Chain</h2>
        {renderEvolutionChain(evolutionChain)}
      </div>
    );
  };
  
  export default EvolutionChain;