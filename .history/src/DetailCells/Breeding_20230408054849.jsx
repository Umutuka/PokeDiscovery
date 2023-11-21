import React from "react";
import EggGroup from "./EggGroup";

const Breeding = ({ eggGroups, gender, eggCycles }) => {
  return (
    <div className="p-5 text-3xl border rounded-lg bg-slate-300 justify-center items-center text-center">
      <h2 className="text-xl font-semibold mb-2">Breeding</h2>
      
      <div className="flex flex-wrap">
        <p>Egg Groups:</p>
        {eggGroups.map((eggGroup) => (
          <EggGroup key={eggGroup.name} name={eggGroup.name} />
        ))}
      </div>
      <p>Gender: {gender}</p>
      
      <p>Egg Cycles:{eggCycles}</p>
      
    </div>
  );
};

export default Breeding;