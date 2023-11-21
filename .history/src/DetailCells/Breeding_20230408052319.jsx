import React from "react";
import { Link } from "react-router-dom";

const Breeding = ({
  eggGroups,
  gender,
  eggCycles,
  _callback,
}) => {

  return (
    <div className="p-5 text-3xl border rounded-lg bg-slate-300 justify-center items-center text-center">
      <ul>
        <li className="font-thin">Egg Groups {eggGroups}</li>
        <li className="font-thin">Gender: {gender}</li>
        <li className="font-thin">Egg cycles {eggCycles}</li>
        <li className="font-thin">Base Experience {baseExp}</li>
        
      </ul>
    </div>
  );
};

export default Breeding;