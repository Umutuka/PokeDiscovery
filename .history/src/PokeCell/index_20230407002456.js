import react from "react";

const PokeCell = ( { pokeClass }) => {
    return(
        <button className="">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeClass + 1}.png`} />
        </button>
    )
}

export default PokeCell