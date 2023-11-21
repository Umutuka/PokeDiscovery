import React from "react";
import EggGroup from "./EggGroup";

const Breeding = ({ eggGroups, gender, eggCycles }) => {
    return (
      <div className="bg-gray-100 p-5 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Breeding</h2>
        <ul className="text-lg">
          <li>Egg Groups: {eggGroups}</li>
          <li>Gender: {gender === 1 ? "Male Only" : gender === 2 ? "Female Only" : "Genderless"}</li>
          <li>Egg Cycles: {eggCycles}</li>
        </ul>
      </div>
    );
  };
  
  export default Breeding;