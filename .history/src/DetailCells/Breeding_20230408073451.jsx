import React from "react";
import EggGroup from "./EggGroup";

const Breeding = ({ eggGroups, gender, eggCycles }) => {
    const malePercentage = (gender / (gender +1)) * 100
    const femalePercentage = (1 / (gender +1)) * 100

  return (
    <div className="p-1 pb-10 space-y-2 text-base font-semibold border rounded-lg bg-slate-300 text-left">
      <h2 className="text-2xl m-3 text-left mb-5">Breeding</h2>
      <div className="flex ml-2 flex-wrap text-base">
        <p className="mr-2 text-left text-base">Egg Groups:</p>
        {eggGroups.map((eggGroup) => (
          <EggGroup key={eggGroup.name} name={eggGroup.name} />
        ))}
      </div>
      <p className="text-base ml-2">Gender: {malePercentage}</p>
      <p className="text-base ml-2">Egg Cycles: {eggCycles} (Maximum {eggCycles * 255} Steps to Hatch)</p>
    </div>
  );
};

export default Breeding;