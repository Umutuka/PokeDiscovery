const Kalos = () => {
  return (
    <section className="Dex-List bg-slate-700">
      {/*Description */}
      <div className="text-white">
        <header id="Kalos" className="text-2xl m-5 font-bold border bg-slate-300 text-center p-5">
          Kalos - Generation 6
        </header>

        {/* Kanto */}

        <div className="space-y-5 font-bold flex justify-center items-center p-5 text-2xl">
          <img src="https://drive.google.com/thumbnail?id=1GrMZManUBnwpBu7ryEZyrbhhWxiyk7QR" className="w-48 h-46"></img>

          <img src="https://drive.google.com/thumbnail?id=1gR6g8Luq3GC2BwNKFNffFB_jDYo0N_mM" className="w-28 h-46"></img>
          <p>
            The Kalos region (Japanese: カロス地方 Kalos region) is a region of the Pokémon world. It was the sixth core series region to be introduced and is the setting of Pokémon X and Y. It is
            shaped like a five-pointed star, with one of its biggest cities being Lumiose City in the north-central part of the region.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Kalos;
