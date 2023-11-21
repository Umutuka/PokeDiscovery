import React from "react";

const StatEach = ({ name, stat  }) => {
  return (
    <div className="px-2 py-0 bg-blue-300 rounded-md text-gray-800 mr-2 mb-2 text-base">
      {name} | {stat}
    </div>
  );
};

export default StatEach;