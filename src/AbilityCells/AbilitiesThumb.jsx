import React from "react";
import { Link } from "react-router-dom";

const AbilitiesThumb = ({ id, name, generation, short_effect, _callback }) => {
  // const style = type + " thumb-container";
  return (
    <tr>
      <td className="number text-center text-2xl">#0{id}</td>
      <td className="ability-name text-center">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </td>
      <td className="ability-desc text-center p-1">{short_effect}</td>

      <td className="ability-generation text-center text-2xl">
        {generation.slice(11, 14).toUpperCase()}
      </td>

      
        <td className="view p-16 text-center hover:bg-white"><Link to={`/Abilities/${id}`} >Link</Link></td>
      
    </tr>
  );
};

export default AbilitiesThumb;
