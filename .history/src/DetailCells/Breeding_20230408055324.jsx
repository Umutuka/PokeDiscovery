import React from "react";
import EggGroup from "./EggGroup";

const Breeding = ({ eggGroups, gender, eggCycles }) => {
  return (
<div className="p-5 text-3xl border rounded-lg bg-slate-300 justify-center items-center text-center">
  <h2 className="font-semibold mb-2">Breeding</h2>
  
  <div className="flex text-3xl flex-wrap">
    <p className="mr-2">Egg Groups:</p>
    {eggGroups.map((eggGroup) => (
      <EggGroup key={eggGroup.name} name={eggGroup.name} />
    ))}
  </div>
  <p className="text-lg">Gender: {gender}</p>
  <p className="text-lg">Egg Cycles:{eggCycles}</p>
</div>
  );
};

export default Breeding;