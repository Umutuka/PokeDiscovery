import react from "react";
import './Poke_Cell.css';

const PokeCell = ( { pokeClass , name }) => {
    return(
        <button className="poke-cell p-1">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeClass}.png`} />
            <p> {name} </p>
        </button>
    )
}

export default PokeCell