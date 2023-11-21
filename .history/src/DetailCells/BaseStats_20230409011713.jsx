import React from "react";
import StatEach from "./StatEach";

const BaseStats = ({ stats }) => {
  // Find the maximum base stat value
  const maxStat = Math.max(...stats.map(stat => stat.base_stat));

  return (
    <div className="p-1 pb-10 space-y-2 text-base font-semibold border rounded-lg bg-slate-300 text-left">
      <h2 className="text-2xl m-3 text-left mb-5">Base Stats</h2>
      <div className="flex ml-2 flex-wrap text-base">
        {stats.map(stat => (
          <div key={stat.stat.name} className="mr-2 mb-2">
            <div className="flex items-center justify-between w-full">
              <div className="mr-2 text-left w-20">{stat.stat.name}</div>
              <StatEach stat={stat.base_stat} maxStat={maxStat} />
            </div>
            <div className="h-2 w-full bg-gray-400 rounded-full">
              <div
                className={`h-2 rounded-full ${
                  stat.base_stat === maxStat
                    ? "bg-yellow-400"
                    : "bg-blue-400"
                }`}
                style={{ width: `${(stat.base_stat / maxStat) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaseStats;