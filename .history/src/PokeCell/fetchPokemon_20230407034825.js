const fetchPet = async ({queryKey}) => {
    const id = queryKey[1];

    const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon?id=`${id});

    if(!apiRes.ok){
        throw new Error(`pokedetails/${id} fetch not ok`)
    }

    return await apiRes.json()
}