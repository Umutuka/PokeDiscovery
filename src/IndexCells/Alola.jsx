const Alola = () => {
  return (
    <section className="Dex-List bg-slate-700">
      {/*Description */}
      <div className="text-white">
        <header id="Alola" className="text-2xl m-5 font-bold border bg-slate-300 text-center p-5">
          Alola - Generation 7
        </header>

        {/* Kanto */}

        <div className="space-y-5 font-bold flex justify-center items-center p-5 text-2xl">
          <img src="https://drive.google.com/thumbnail?id=1IOhg4BIEabyR0VAl3bYolxtoSbaB7IGg" className="w-36 h-46"></img>

          <img src="https://drive.google.com/thumbnail?id=12ogFyl1g3eziU3w25lM3AVrJ6vbTB5_M" className="w-40 h-46"></img>
          <p>
            The Alola region (Japanese: アローラ地方 Alola region) is a region of the Pokémon world. It was the seventh core series region to be introduced and is the setting of Pokémon Sun, Moon,
            Ultra Sun, and Ultra Moon. Alola is made up of five islands: the natural islands Melemele Island, Akala Island, Ula'ula Island, and Poni Island; and the artificial island Aether Paradise.
            It is a popular resort destination and attracts a lot of tourists from other regions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Alola;
