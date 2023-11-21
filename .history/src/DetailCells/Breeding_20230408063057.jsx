import React from "react";
import EggGroup from "./EggGroup";

const Breeding = ({ eggGroups, gender, eggCycles }) => {
  return (
    <div className="p-1 text-base font-semibold border rounded-lg bg-slate-300 justify-center items-center text-center">
      <h2 className="text-2xl m-4 text-left mb-5">Breeding</h2>
      <div className="flex text-base">
        <p className="mr-2">Egg Groups:</p>
        {eggGroups.map((eggGroup) => (
          <EggGroup key={eggGroup.name} name={eggGroup.name} />
        ))}
      </div>
      <p className="text-base">Gender: {gender}</p>
      <p className="text-base">Egg Cycles: {eggCycles}</p>
    </div>
  );
};

export default Breeding;