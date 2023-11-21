const Galar = () => {
  return (
    <section className="Dex-List bg-slate-700">
      {/*Description */}
      <div className="text-white">
        <header id="Galar" className="text-2xl m-5 font-bold border bg-slate-300 text-center p-5">
          Galar - Generation 8
        </header>

        {/* Kanto */}

        <div className="space-y-5 font-bold flex justify-center items-center p-5 text-2xl">
          <img src="https://drive.google.com/uc?export=view&id=1SQguUfwLtAFly8y2PoSYtE0y33QI4TpX" className="w-44 h-46"></img>
          <img src="https://drive.google.com/uc?export=view&id=1gL2PON7Rk5uEYWK0x90Rd7OIToMuA6e3" className="w-40 h-46"></img>{" "}
          <p>
            The Galar region is an expansive region, including varied environments such as idyllic countrysides, contemporary cities, and snow-covered mountains. Galar comprises a long mainland area
            as well as an outlying island area, the Isle of Armor, east of the mainland.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Galar;
