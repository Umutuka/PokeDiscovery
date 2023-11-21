const fetchAbility = async ({queryKey}) => {
    const id = queryKey[1];

    const apiRes = await fetch(`https://pokeapi.co/api/v2/ability/${id}`);

    if(!apiRes.ok){
        throw new Error(`ability/${id} fetch not ok`)
    }

    return apiRes.json()
};

export default fetchAbility;