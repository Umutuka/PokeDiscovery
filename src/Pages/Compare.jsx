import { useEffect, useState } from "react";
import React from "react";
import { SearchParams, TotalStats } from "../PokeCell/SearchParams";
import { SearchParams0, TotalStats0 } from "../PokeCell/SearchParams copy";

const Compare = () => {
  const [totalStats1, setTotalStats1] = useState(0);
  const [totalStats2, setTotalStats2] = useState(0);

  const handleStatsCompare = () => {
    if (totalStats1 > totalStats2) {
      console.log("Pokemon 1 has higher total stats");
    } else if (totalStats1 < totalStats2) {
      console.log("Pokemon 2 has higher total stats");
    } else {
      console.log("Both Pokemon have the same total stats");
    }
  };

  return (
    <div className="app-container mt-10">
      <div className=" bg-slate-300 m-5 rounded-lg">
        <h1 className="text-center font-bold pt-10">Pokemon Stat Comparison</h1>

        <section className="border m-3 rounded-lg bg-slate-500">
          <p className="p-5 font-bold">
            This page is to compare two different pokemons Total Stat. The Stronger pokemon of the two will end up having a trophy above their head. If it's a draw then they'll both have a question
            mark, meaning that it was a draw. Keep in mind that this is total stats only, and in a battle, tactic/typing/team-formation can prove to be more important than total stats.
          </p>{" "}
        </section>

        <section className="text-center items-center justify-center flex text-2xl">
          <div className="border flex mr-44">
            {totalStats1 > totalStats2 && totalStats1 > 0 && totalStats2 > 0 ? (
              <img src="https://drive.google.com/thumbnail?id=1owCWuwSJopGwqzxnMp38YPKAZ0IdMK-z" className="w-16 m-5"></img>
            ) : (
              <img src="https://drive.google.com/thumbnail?id=1XOMefl8l1_Pr_s1RcK_4QfDBrA-q8iXG" className="w-16 m-5"></img>
            )}
          </div>

          <div className="border flex ml-48">
            {totalStats1 < totalStats2 && totalStats1 > 0 && totalStats2 > 0 ? (
              <img src="https://drive.google.com/thumbnail?id=1owCWuwSJopGwqzxnMp38YPKAZ0IdMK-z" className="w-16 m-5"></img>
            ) : (
              <img src="https://drive.google.com/thumbnail?id=1XOMefl8l1_Pr_s1RcK_4QfDBrA-q8iXG" className="w-16 m-5"></img>
            )}
          </div>
          <div className="border flex"></div>
        </section>

        <section className="flex m-5 pb-10 mt-16 space-x-10 justify-center items-center">
          <SearchParams0 setTotalStats={setTotalStats1} />
          <img src="https://drive.google.com/thumbnail?id=1vaskWfLDyPF7B4Y_WsJ5metEaO9AO17O" className="w-20 h-20 mt-14"></img>
          <SearchParams setTotalStats={setTotalStats2} />
        </section>
      </div>
    </div>
  );
};

export default Compare;
