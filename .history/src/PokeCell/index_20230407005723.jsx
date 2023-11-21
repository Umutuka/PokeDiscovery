import react from "react";
import './Poke_Cell.css';

const PokeCell = ( { pokeClass }) => {
    return(
        <button className="poke-cell p-10">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeClass + 1}.png`} />
        </button>
    )
}

export default PokeCell