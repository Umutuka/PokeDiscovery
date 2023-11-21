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
    const fetchEvolutionChain = async () => {
      const chainUrls = chain.map((evolution) => evolution.species.url);
      const evolutionData = [];

      for (let i = 0; i < chainUrls.length; i++) {
        const response = await fetch(chainUrls[i]);
        const data = await response.json();
        const spriteUrl = data.sprites.front_default;
        evolutionData.push({ name: data.name, spriteUrl });
      }

      setEvolutionChain(evolutionData);
    };

    fetchEvolutionChain();
  }, [chain]);

  return (
    <div className="p-1 pb-10 space-y-2 text-base font-semibold border rounded-lg bg-slate-300 text-left">
      <h2 className="text-2xl m-3 text-left mb-5">Evolution Chain</h2>
      <div className="flex ml-2 flex-wrap text-base">
        <p className="mr-2 text-left text-base">Evolves to:</p>
        {evolutionChain.map((evolution, index) => (
          <div key={index}>
            <img src={evolution.spriteUrl} alt={evolution.name} />
            <p>{evolution.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvolutionChain;
