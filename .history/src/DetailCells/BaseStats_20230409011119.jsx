import React from "react";
import StatEach from "./StatEach";

const BaseStats = ({ stats }) => {

  return (
    <div className="p-1 pb-10 space-y-2 text-base font-semibold border rounded-lg bg-slate-300 text-left">
      <h2 className="text-2xl m-3 text-left mb-5">Base Stats</h2>
      <div className="flex ml-2 flex-wrap text-base">
        <p className="mr-2 text-left text-base">Egg Groups:</p>
        {stats.map((stats) => (
          <StatEach key={stats.name} name={stats.name} />
        ))}
      </div>

    </div>
  );
};

export default BaseStats;