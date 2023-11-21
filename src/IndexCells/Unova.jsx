const Sinnoh = () => {
  return (
    <section className="Dex-List bg-slate-700">
      {/*Description */}
      <div className="text-white">
        <header
          id="Unova"
          className="text-2xl font-bold m-5 border bg-slate-300 text-center p-5"
        >
          Unova - Generation 5
        </header>

        {/* Kanto */}

        <div className="space-y-5 font-bold flex justify-center items-center p-5 text-2xl">
          <img
            src="Pictures/Trainers/unova_trainer.png"
            className="w-48 h-46"
          ></img>

          <img
            src="Pictures/Trainers/unovaMale_trainer.png"
            className="w-44 h-46"
          ></img>
          <p>
            The Unova region (Japanese: イッシュ地方 Isshu region) is a region
            of the Pokémon world. It is the setting of Pokémon Black and White
            and Pokémon Black 2 and White 2. It was the fifth core series region
            to be introduced. Unova is far away from the four other large
            regions, and the Pokémon which inhabit Unova are diverse and
            different from those of Kanto, Johto, Hoenn, and Sinnoh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sinnoh;
