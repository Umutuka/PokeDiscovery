const Hoenn = () => {
  return (
    <section id="Hoenn" className="Dex-List bg-slate-700">
      {/*Description */}
      <div className="text-white">
        <header className="text-2xl font-bold border bg-slate-300 m-5 text-center p-5">Hoenn - Generation 3</header>

        {/* Kanto */}

        <div className="space-y-5 font-bold flex justify-center items-center p-5 text-2xl">
          <img src="https://drive.google.com/thumbnail?id=1zZsxNlDBtnzyZL-WBLckhNlFIFbXU6Ou" className="w-32 h-46"></img>
          <img src="https://drive.google.com/thumbnail?id=1ou4T1evhGOOzRQ6uUWm5lU0UXCvgQce2" className="w-44 h-46"></img>{" "}
          <p>
            The Hoenn region (Japanese: ホウエン地方 Hoenn region) is a region of the Pokémon world. It is located south of Sinnoh,[1] and southwest of both Kanto and Johto.[2] It is the setting of
            Pokémon Ruby, Sapphire, Emerald, Omega Ruby, and Alpha Sapphire. It was the third core series region to be introduced.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hoenn;
