const fetchPokemon = async() => {
    const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    const data = await Response.json();
    return apiRes.json();
};

export default fetchPet;