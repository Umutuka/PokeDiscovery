import react from "react";
import './Poke_Cell.css';

const PokeCell = ( { pokeClass }) => {
    return(
        <button className="poke-cell border p-5">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeClass + 1}.png`} />
        </button>
    )
}

export default PokeCell