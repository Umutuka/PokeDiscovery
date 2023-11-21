const fetchPokemon = async() => {
    const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    const data = await Response.json();
    const pokemonList = data.results.slice(0, data.results.length).map(items => items).flat();
    return apiRes.json();
};

export default fetchPet;