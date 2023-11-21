import React from "react";
import { Link } from "react-router-dom";

const ItemsThumb = ({ id, name, generation, sprite, attribute, description, _callback }) => {
  // const style = type + " thumb-container";
  return (
    <tr>
      <td className="number text-center text-lg">#0{id}</td>
      <td className="ability-name text-center">
        <img src={sprite} className="mx-auto my-auto"></img>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </td>
      <td className="text-center text-3xl">{generation.slice(11, 14).toUpperCase()}</td>
      <td className="ability-desc text-center p-1">{attribute.charAt(0).toUpperCase() + attribute.slice(1)}</td>

      <td className="ability-generation text-center text-1xl">{description}</td>

      <td className="view text-center hover:bg-white hover:cursor-pointer">
        <Link to={`/PokeDiscovery/items/${id}`}>Link</Link>
      </td>
    </tr>
  );
};

export default ItemsThumb;
