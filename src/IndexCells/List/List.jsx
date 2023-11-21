import { useState } from "react";
import classnames from "classnames";
import DarkBlueWaves from "../../Css_Waves/DarkBlue_Waves";
import Johto from "../Johto";
import Hoenn from "../Hoenn";
import Sinnoh from "../Sinnoh";
import Unova from "../Unova";
import Kalos from "../Kalos";
import Alola from "../Alola";
import Galar from "../Galar";
import ContentBar from "../ContentBar";
import Kanto from "../Kanto";

const Navigation = ({ activeSlide, goToSlide }) => {
  return (
    <nav className="flex justify-center flex-wrap gap-3 p-2">
      {SLIDES.map((slide, index) => (
        <button
          key={slide.id}
          className={classnames(
            "px-3 py-1 text-sm text-white rounded-md",
            activeSlide === index
              ? "bg-red-500"
              : "hover:bg-gray-500 bg-gray-700"
          )}
          onClick={() => goToSlide(index)}
        >
          {slide.id}
        </button>
      ))}
    </nav>
  );
};



const SLIDES = [
  {
    id: "Kanto",
    title: "Kanto - Generation 1",
    content: <Kanto />,
  },
  {
    id: "Johto",
    title: "Johto - Generation 2",
    content: <Johto />,
  },
  {
    id: "Hoenn",
    title: "Hoenn - Generation 3",
    content: <Hoenn />,
  },
  {
    id: "Sinnoh",
    title: "Sinnoh - Generation 4",
    content: <Sinnoh />,
  },
  {
    id: "Unova",
    title: "Unova - Generation 5",
    content: <Unova />,
  },
  {
    id: "Kalos",
    title: "Kalos - Generation 6",
    content: <Kalos />,
  },
  {
    id: "Alola",
    title: "Alola - Generation 7",
    content: <Alola />,
  },
  {
    id: "Galar",
    title: "Galar - Generation 8",
    content: <Galar />,
  },
];

const List = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const goPrev = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(SLIDES.length - 1);
    }
  };

  const goNext = () => {
    if (activeSlide < SLIDES.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(0);
    }
  };

  return (
    <section className="Dex-List bg-slate-700 mb-12 ml-3 mr-2 rounded-lg min-h-max">
      {/*Description */}
      <div className="text-white">
        <h2 className="text-center text-3xl p-3 md:p-5 underline">
          PokeDiscovery Generation Information
        </h2>
      </div>

      {/* Navigation */}
      <Navigation activeSlide={activeSlide} goToSlide={goToSlide} />

      {/* Slides */}
      <div className="relative flex items-center justify-center h-4/5 md:h-3/4">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={classnames(
              "absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out",
              activeSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
            style={{ height: "80vh" }}
          >
            {slide.content}
          </div>
        ))}
        <DarkBlueWaves />
      </div>

      {/* Content bar */}

    </section>
  );
};


export default List;

