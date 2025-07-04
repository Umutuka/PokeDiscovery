import { useState } from "react";

const TotalStats = ({ pokemonData }) => {
  if (!pokemonData) {
    return null;
  }

  return pokemonData.stats.reduce((acc, stat) => acc + stat.base_stat, 0);
};

const SearchParams = ({ setTotalStats }) => {
  const [selected, setSelected] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${selected.toLowerCase()}`);
    const data = await res.json();
    setPokemonData(data);

    const totalStats = TotalStats({ pokemonData: data });
    setTotalStats(totalStats);
  };

  return (
    <div className="search-params text-center">
      <form onSubmit={handleSubmit}>
        <label htmlFor="selectedPoke" className="bg-slate-300 rounded-xl">
          <input id="selectedPoke" value={selected} placeholder="Name" onChange={(e) => setSelected(e.target.value)} className="border rounded-lg pt-2 text-2xl mb-2" />

          <button>
            <img src="https://drive.google.com/thumbnail?id=1no3dfojKSfFdB25lrya6jmVZlwleKYUs" className="w-8 hover:animate-spin"></img>
          </button>
        </label>
      </form>

      <div className="border rounded-lg shadow-xl bg-slate-300 justify-center items-center text-center">
        {pokemonData && (
          <div>
            <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
            <img className="w-48 mx-auto " src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            <p>Total Stats: {<TotalStats pokemonData={pokemonData} />}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { SearchParams, TotalStats };
