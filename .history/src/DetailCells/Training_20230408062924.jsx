import React from "react";

const Training = ({ ev, catch_rate, happiness, baseExp, growthRate }) => {
  const capitalizedArr = growthRate.split("-");
  const formattedGrowthRate = capitalizedArr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return (
    <div className="p-5 text-3xl border rounded-lg bg-slate-300">
      <h2 className="mb-5">Training</h2>

      <ul className="text-center">
        <li className="font-thin">EV Yield: {ev}</li>
        <li className="font-thin">Catch Rate: {catch_rate}</li>
        <li className="font-thin">Base Friendship: {happiness}</li>
        <li className="font-thin">Base Experience: {baseExp}</li>
        <li className="font-thin flex">
          <span>Growth Rate: </span>
          {formattedGrowthRate.map((word, index) => (
            <p
              key={index}
              className={`text-2xl ${index !== formattedGrowthRate.length - 1 ? 'mr-2' : ''}`}
            >
              {word}
            </p>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Training;
