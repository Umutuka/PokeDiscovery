import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AbilityPokemonCell = ({ id, name, _callback }) => {
  const newImageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Link to={`/pokedex/${id}`} className="pokemon">
      <div className="p-5 hover:cursor-pointer hover:bg-white border rounded-lg bg-slate-300 justify-center items-center text-center">
        <div className="number">
          <small>#0{id}</small>
        </div>
        <div>{name}</div>
        <img src={newImageLink} className="pl-2 w-28 block ml-auto mr-auto"></img>
      </div>
    </Link>
  );
};

export default AbilityPokemonCell;
