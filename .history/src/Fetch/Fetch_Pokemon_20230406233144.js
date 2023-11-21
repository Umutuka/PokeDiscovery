const fetchPokemon = async() => {
    const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    
    return apiRes.json();
};

export default fetchPet;