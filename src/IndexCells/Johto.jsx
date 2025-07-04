const Johto = () => {
  return (
    <section className="Dex-List bg-slate-700">
      {/*Description */}
      <div className="text-white Johto">
        <header id="Johto" className="text-2xl font-bold border bg-slate-300 m-5 text-center p-5">
          Johto - Generation 2
        </header>

        {/* Kanto */}

        <div className="space-y-5 font-bold flex justify-center items-center p-5 text-2xl">
          <img src="https://drive.google.com/thumbnail?id=1iWYPZzwzyvw8RwQnAbWqNLhRSpOzS6cS" className="w-56 h-46"></img>

          <img src="https://drive.google.com/thumbnail?id=1GZ1IX6ekHP7_XYDMjTHdoauCQF3N0UI1" className="w-40 h-46"></img>

          <p>
            The Johto region (Japanese: ジョウト地方 Johto region) is a region of the Pokémon world. Johto is located west of Kanto, which together form a joint landmass that is south of Sinnoh and
            Sinjoh Ruins. It was the second core series region to be introduced. First explored in Pokémon Gold and Silver, it is home to an additional 100 Pokémon that were not present in the
            previous games.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Johto;
