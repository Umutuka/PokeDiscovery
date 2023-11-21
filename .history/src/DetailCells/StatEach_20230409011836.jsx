import React from "react";

const StatEach = ({ stat, maxStat }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="mr-2 text-right w-12"></div>
      <div className="h-2 w-36 bg-gray-400 rounded-full">
        <div
          className={`h-2 rounded-full ${
            stat === maxStat ? "bg-yellow-400" : "bg-blue-400"
          }`}
          style={{ width: `${(stat / maxStat) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default StatEach;