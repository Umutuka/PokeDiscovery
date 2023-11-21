import react from "react";
import './Poke_Cell.css';

const PokeCell = ( { pokeClass, name }) => {
    const { id, name } = pokemon
    return(
        <button className="poke-cell p-1">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeClass + 1}.png`} />
            <p> {pokemon.name} </p>
        </button>
    )
}

export default PokeCell