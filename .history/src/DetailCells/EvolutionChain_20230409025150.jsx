import React, { useState, useEffect } from "react";

const EvolutionChain = ({ chain }) => {
  return (
    <div className="p-1 pb-10 space-y-2 text-base font-semibold border rounded-lg bg-slate-300 text-left">
      <h2 className="text-2xl m-3 text-left mb-5">Evolution Chain</h2>
      <div className="flex ml-2 flex-wrap text-base">
        <p className="mr-2 text-left text-base">Evolves to:</p>
        {chain && chain.map((evolution, index) => (
          <p key={index}>{evolution.species.name}</p>
        ))}
      </div>
    </div>
  );
};

export default EvolutionChain;
