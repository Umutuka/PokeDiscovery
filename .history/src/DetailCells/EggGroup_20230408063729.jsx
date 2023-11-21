import React from "react";

const EggGroup = ({ name }) => {
  return (
    <div className="px-2 py-1 float-left bg-gray-300 rounded-md text-gray-800 mr-2 mb-2">
      {name}
    </div>
  );
};

export default EggGroup;