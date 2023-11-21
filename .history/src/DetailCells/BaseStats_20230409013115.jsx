import React from "react";

const BaseStats = ({ stats }) => {
  // Find the maximum base stat value
  const maxStat = Math.max(...stats.map(stat => stat.base_stat));

  return (
    <div className="p-1 pb-10 space-y-2 text-base font-semibold border rounded-lg bg-slate-300 text-left">
      <h2 className="text-2xl m-3 text-left mb-5">Base Stats</h2>
      <div className="flex flex-col space-y-2">
        {stats.map(stat => (
          <div key={stat.stat.name} className="flex items-center justify-between">
            <div className="w-20">{stat.stat.name}</div>
            <div className="w-24 pl-5">
              {stat.base_stat}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-full rounded-full ${
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