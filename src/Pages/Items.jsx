import React, { useState, useEffect } from "react";
import ItemsThumb from "../ItemsCells/ItemsThumb";

const Items = () => {
  const [Items, setItems] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/item?limit=30"
  );

  const getAllItems = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createItemsObject(results) {
      results.forEach(async (item) => {
        const res = await fetch(`https://pokeapi.co/api/v2/item/${item.name}`);
        const data = await res.json();
        await setItems((currentList) => [...currentList, data]);
      });
    }
    createItemsObject(data.results);
  };

  useEffect(() => {
    getAllItems();
    console.log("Home component rendered");
  }, []);

  return (
    <div className="app-container mt-10">
      <div className=" bg-slate-300 m-5 rounded-lg">
        <h1 className="text-center pt-10 font-bold p-5">
          Pokémon Items
        </h1>

        <section className="border m-3 rounded-lg bg-slate-500">
          <p className="p-5 font-bold">
            The itemdex section provides details on all the items throughout the
            Pokémon series. We list the items' effects as well as the location
            they can be found in the games.
          </p>{" "}
          <p className="p-5 font-bold">
            {" "}
            This section is very much a work in progress. I still have a lot to
            add!
          </p>
        </section>

        <section className="about-items flex grid-cols-2 m-5">
          <div className="space-y-5 text-xl">
            <h2 className="text-2xl font-bold flex ">About Items</h2>

            <p>
              {" "}
              Items are another staple of the Pokémon franchise. They are
              objects to be collected and used for specific purposes, including
              progressing through the game's storyline, Pokémon capture, healing
              your Pokémon, helping Pokémon in battle, improving their stats and
              even evolving Pokémon.{" "}
            </p>

            <p>
              {" "}
              Generation 1 introduced a small set of items that could be used on
              Pokémon, plus several key items. The bag had a limited space and
              so items needed to be stored in the PC when the bag got full.
            </p>

            <p className="">
              Generation 2 introduced the concept of held items - items that
              Pokémon can hold to gain added effects during battles, such as
              increasing a move's power. New PokéBalls that could be created
              from Apricorns that grow naturally in the wild. The bag now had
              different pockets to categorize items (Items, Balls, Key Items,
              TMs/HMs).
            </p>

            <p className="flex">
              {" "}
              <img src="/Pictures/item-img.png" className="h-72 w-96"></img>
              Generation 3 greatly expanded on the concept of Berries that was
              added in Generation 2. They grow in the wild and can be used for
              HP restoration, status healing and for Pokéblocks. Such an example
              of this would be Oran berries.
              <br /> <br />
              Generation 4 made no changes to general item mechanics, though it
              did introduce some new items - such as Choice Scarf and Life Orb -
              that are now very popular in competitive battles.
              <br /> <br />
              In Generation 5, there was a major change to TMs: they can now be
              used infinitely. Berries do not grow natively in Unova, but can be
              obtained from the Pokémon Dream World and transferred to the game.
              Notable new items include Gems - hold items that enhance moves of
              a specific type, but are then consumed.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-2xl p-5 mb-5">Item List</h2>

          <div className="all-container justify-center">
            <table className="table-fixed w-full border-collapse">
              <thead className=" p-5">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Generation</th>
                  <th className="p-5">Attribute</th>
                  <th className="p-5">Description</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {Items.map((itemList) => (
                  <ItemsThumb
                    key={itemList.id}
                    id={itemList.id}
                    name={itemList.name}
                    generation={itemList.game_indices[0].generation.name}
                    sprite={itemList.sprites.default}
                    attribute={itemList.attributes[0].name}
                    description={itemList.effect_entries[0].short_effect}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex border rounded-lg m-5 p-5 text-2xl hover:bg-slate-200 bg-slate-600 justify-center">
            <button
              className="load-more justify-center"
              onClick={() => getAllItems()}
            >
              Load more
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Items;
