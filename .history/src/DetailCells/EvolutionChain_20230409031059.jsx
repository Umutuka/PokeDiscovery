import React, { useState, useEffect } from "react";

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

    if (chain.evolves_to.length === 0) {
      return <p key={name}>{name}</p>;
    }

    return (
      <div key={name}>
        <p>{name}</p>
        <div className="ml-4">
          {chain.evolves_to.map((evolution) =>
            getEvolutionChainRecursive(evolution)
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="p-1 pb-10 space-y-2 text-base font-semibold border rounded-lg bg-slate-300 text-left">
      <h2 className="text-2xl m-3 text-left mb-5">Evolution Chain</h2>
      {evolutionChain && getEvolutionChainRecursive(evolutionChain.chain)}
    </div>
  );
};

export default EvolutionChain;
