const fetchPokemon = async() => {
    const id = queryKey[1];
    const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)

    return apiRes.json();
};

export default fetchPet;