import React from "react";
import EggGroup from "./EggGroup";

const Breeding = ({ eggGroups, gender, eggCycles }) => {
  return (
    <div>
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