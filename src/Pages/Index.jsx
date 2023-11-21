import React from "react";
import BlackWaves from "../Css_Waves/Black_Waves";
import List from "../IndexCells/List/List";
import Additionals from "../Additionals";

const Index = () => {
  return (
    <div className="">
      
      <section className="flex ml-10 p-10 intro ">
        <div className="font-mono space-y-8 text-center italic pt-16 text-2xl mr-10 text-white">
          <h1 className="Welcome-text">Welcome to PokeDiscovery! </h1>

          <h2 className="Welcome-Long-Text">
            The global showcase where you can find your favourite Pokemon
            quickly and efficiently!
          </h2>
        </div>

        <img
          src="/Pictures/pokeball-cover-image.png"
          className="w-72 h-72 ml-20 justify-center items-center drop-shadow-2xl"
          alt=""
        ></img>

        
      </section>

      {/* Waves */}

      
      <section className="ml-5 mr-5">
              <List />

      </section>

      

      {/*Second Wave*/}
      


    </div>
  );
};

export default Index;
