const Sinnoh = () => {
  return (
    <section className="Dex-List bg-slate-700">
      {/*Description */}
      <div className="text-white">
        <header id="Sinnoh" className="text-2xl font-bold border bg-slate-300 m-5 text-center p-5">
          Sinnoh - Generation 4
        </header>

        {/* Kanto */}

        <div className="space-y-5 font-bold flex justify-center items-center p-5 text-2xl">
          <img src="https://drive.google.com/thumbnail?id=12piWch3sGFmSezHRd-cmUxkYU7eblTb6" className="w-48 h-46"></img>

          <img src="https://drive.google.com/thumbnail?id=1AMqQsuFOO2stfgRV6WD4bl6__PuDvdFB" className="w-44 h-46"></img>
          <p>
            The Sinnoh region (Japanese: シンオウ地方 Sinnoh region), formerly known as Hisui (Japanese: ヒスイ地方 Hisui region), is a region of the Pokémon world. It is located north of Kanto,[1]
            Johto,[1] and Hoenn.[2] It is the setting of Pokémon Diamond, Pearl, Platinum, Brilliant Diamond, Shining Pearl, and Legends: Arceus; the latter explores the region's earlier history when
            it was still known as Hisui. It was the fourth core series region to be introduced.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sinnoh;
