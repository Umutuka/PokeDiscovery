import React, { useState, useEffect } from "react";
import AbilitiesThumb from "../AbilityCells/AbilitiesThumb";

const Abilities = () => {
  const [allAbilities, setAllAbilities] = useState([]);
  const [loadMore, setLoadMore] = useState(
    `https://pokeapi.co/api/v2/ability?limit=20`
  );

  const getAllAbilities = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createAbilityObject(results) {
      results.forEach(async (ability) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/ability/${ability.name}`
        );
        const data = await res.json();
        setAllAbilities((currentList) => [...currentList, data]);
        allAbilities.sort((a, b) => a.id - b.id);
      });
    }
    createAbilityObject(data.results);
  };

  useEffect(() => {
    getAllAbilities();
    console.log("Home component rendered");
  }, []);

  return (
    <div className="app-container mt-10 m-5">
      <div className=" bg-slate-300 rounded-lg">
        <h1 className="text-center font-bold pt-10">Pokemon Abilities</h1>

        <section className="border m-3 rounded-lg bg-slate-500">
          <p className="p-5 font-bold">
            Each ability from the latest generation of Pokémon games is listed
            below, along with a short description, and which generation it was
            first introduced. Click the corresponding link to see the Pokémon
            that can learn it.
          </p>{" "}
        </section>

        <section className="about-items flex grid-cols-2 m-5">
          <div className="space-y-5 text-xl">
            <h2 className="text-2xl font-bold flex ">About Items</h2>

            <p>
              {" "}
              Abilities, introduced in Generation 3 (Ruby/Sapphire), are special
              attributes given to each Pokémon that can aid them in battle. Many
              abilities act as a power-up by increasing a move or stat; others
              introduce a third-party effect like a weather condition. Some
              abilities can even hinder a Pokémon battle.
            </p>

            <p>
              {" "}
              Each Pokémon can have only one ability, however, some have the
              option of two different abilities. The choice is random and each
              ability is equally likely. There are 308 single-ability Pokémon
              and 355 dual-ability Pokémon.
            </p>

            <p className="">
              In Pokémon Black & White, a third hidden ability was introduced.
              The third ability is only available when a Pokémon is returned
              from the Dream World, a new online feature that is part of the
              Pokémon Global Link. 568 Pokémon have a Dream World ability.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold flex m-5 ">Ability List</h2>

          <table className="table-fixed w-full border-collapse">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th className="p-5">Generation</th>
                <th className="p-5">View</th>
              </tr>
            </thead>
            <tbody>
              {allAbilities.map((ability, index) => (
                <AbilitiesThumb
                  key={index}
                  id={ability.id}
                  name={ability.name}
                  generation={ability.generation.name}
                  short_effect={ability.effect_entries[1].short_effect}
                />
              ))}
            </tbody>
          </table>

          <div className="flex border rounded-lg m-5 p-5 text-2xl hover:bg-slate-200 bg-slate-600 justify-center">
            <button
              className="load-more justify-center"
              onClick={() => getAllAbilities()}
            >
              Load more
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Abilities;
