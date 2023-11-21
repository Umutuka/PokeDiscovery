import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const fetchItem = async (id) => {
  const previousItemResponse = id - 1 > 0 ? await fetch(`https://pokeapi.co/api/v2/item/${id - 1}/`).then((res) => res.json()) : null;
  const nextItemResponse = await fetch(`https://pokeapi.co/api/v2/item/${Number(id) + 1}/`).then((res) => res.json());

  const itemResponse = await fetch(`https://pokeapi.co/api/v2/item/${id}/`).then((res) => res.json());

  const { name } = itemResponse;

  const data = {
    item: {
      ...itemResponse,
      name: name.charAt(0).toUpperCase() + name.slice(1),
    },
    nextItem: nextItemResponse,
    previousItem: previousItemResponse,
  };

  return data;
};

const ItemDetails = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(["item", id], () => fetchItem(id));

  useEffect(() => {
    console.log("dex component rendered");
    console.log({ id });
  }, []);

  if (isLoading) return <img src="https://drive.google.com/uc?export=view&id=1mSItftGDMZL57v0mloTsSLbuBv9NM_0I" className="animate-spin block m-56 ml-auto mr-auto w-1/2"></img>;

  if (error) return <p>Error: {error.message}</p>;

  const { item, nextItem, previousItem } = data;

  return (
    <div className="details mt-5 p-5 bg-slate-200 m-5 rounded-lg">
      <h1 className="ability-name items-center justify-center flex italic">
        <img className="w-20" src={item.sprites.default}></img> <span className=" font-bold">{item.name} (item)</span>
      </h1>

      <nav className="p-5">
        <div>
          {item.id - 1 > 0 ? (
            <div className="relative">
              <Link to={`/items/${item.id - 1}`} className="before-dex font-bold hover:bg-slate-500 p-2 rounded-lg float-left">
                <p> {"<= #" + (item.id - 1) + " " + previousItem.name.charAt(0).toUpperCase() + previousItem.name.slice(1)}</p>
              </Link>

              <Link to={`/items/${item.id + 1}`} className="before-dex font-bold hover:bg-slate-500 p-2 rounded-lg float-right">
                <p>{"#" + (item.id + 1) + " " + nextItem.name.charAt(0).toUpperCase() + nextItem.name.slice(1) + "=>"}</p>
              </Link>
            </div>
          ) : (
            <Link to={`/items/${item.id + 1}`} className="before-dex font-bold hover:bg-slate-500 p-2 rounded-lg float-right">
              <p> {"# " + (item.id + 1) + " " + nextItem.name.charAt(0).toUpperCase() + nextItem.name.slice(1) + "=>"}</p>
            </Link>
          )}
        </div>
      </nav>

      <div className="border rounded-lg m-5 p-5 bg-slate-500">
        <h2 className="text-center text-2xl font-bold pb-5 underline">Details</h2>

        <ul className="text-2xl space-y-5">
          <li>Description : {item.effect_entries[0].effect}</li>
          <li>Other Description : {item.flavor_text_entries[0].text}</li>
        </ul>
      </div>

      <div className="bg-slate-500 mt-8 rounded-lg"></div>
    </div>
  );
};

export default ItemDetails;
