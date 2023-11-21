
const fetchPokemon = async({ queryKey }) => {
    const id = queryKey[1];
    const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/{id or name}/`)

    return apiRes.json();
};

export default fetchPet;