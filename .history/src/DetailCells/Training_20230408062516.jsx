import React from "react";

const Training = ({ ev, catch_rate, happiness, baseExp, growthRate }) => {
  const capitalizedArr = growthRate.split("-").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  const content = capitalizedArr.join(" / ");

  return (
    <div className="p-5 text-3xl border rounded-lg bg-slate-300 text-left">
      <h2 className="pb-5 text-left font-semibold">Training</h2>

      <ul className="text-left">
        <li className="font-thin">EV Yield: {ev}</li>
        <li className="font-thin">Catch Rate: {catch_rate}</li>
        <li className="font-thin">Base Friendship: {happiness}</li>
        <li className="font-thin">Base Experience: {baseExp}</li>
        <li className="font-thin flex items-center">
          <div className="flex items-center">
            <span className="mr-2">Growth Rate:</span>
            {capitalizedArr.map((word, index) => (
              <span key={index} className="text-2xl">
                {word}
                {index !== capitalizedArr.length - 1 && <span className="mx-2">/</span>}
              </span>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Training;
