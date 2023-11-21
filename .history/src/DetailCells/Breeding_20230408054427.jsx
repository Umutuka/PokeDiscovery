import React from "react";
import EggGroup from "./EggGroup";

const Breeding = ({ eggGroups, gender, eggCycles }) => {
  return (
    <div className="p-5 text-3xl border rounded-lg bg-slate-300 justify-center items-center text-center">
      <h2 className="text-xl font-semibold mb-2">Breeding</h2>
      <p>Egg Groups:</p>
      <div className="flex flex-wrap">
        {eggGroups.map((eggGroup) => (
          <EggGroup key={eggGroup.name} name={eggGroup.name} />
        ))}
      </div>
      <p>Gender:</p>
      <p>{gender}</p>
      <p>Egg Cycles:</p>
      <p>{eggCycles}</p>
    </div>
  );
};

export default Breeding;