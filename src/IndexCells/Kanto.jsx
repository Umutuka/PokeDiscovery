const Kanto = () => {
  return (
    <section className="Dex-List bg-slate-700">
      {/*Description */}
      <div className="text-white Johto">
        <header id="Johto" className="text-2xl font-bold border bg-slate-300 m-5 text-center p-5">
          Kanto - Generation 1
        </header>

        {/* Kanto */}

        <div className="space-y-5 font-bold flex justify-center items-center p-5 text-2xl">
          <img src="https://drive.google.com/uc?export=view&id=163Yqqc-LLBFI-Zg32LSld6AeTwzBSZ2C" className="w-32 h-46"></img>

          <img src="https://drive.google.com/uc?export=view&id=1gf-mC4oYdvbcR_QG2ZrIJz81Uznp-ctD" className="w-40 h-46"></img>

          <p>
            The Kanto region (Japanese: カントー地方 Kanto region) is a region of the Pokémon world. Kanto is located east of Johto, which together form a joint landmass that is south of Sinnoh. Kanto
            is the setting of the first generation of games and can be explored in Generations II, III, IV, and VII.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Kanto;
