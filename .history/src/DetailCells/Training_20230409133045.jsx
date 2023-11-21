import React from "react";

const Training = ({ ev, catch_rate, happiness, baseExp, growthRate }) => {
  const capitalizedArr = growthRate.split("-");
  const formattedGrowthRate = capitalizedArr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Filter ev array to get objects with effort value above 0
  const filteredEv = ev.filter((stat) => stat.effort > 0);

  return (
    <div className="p-4 text-3xl font-semibold border rounded-lg bg-slate-300">
      <h2 className="mb-5 text-2xl font-semibold">Training</h2>

      <ul className="text-left">
      <li className="text-base">
  EV Yield:{" "}
  {ev.filter((stat) => stat.effort > 0).map((stat) => (
    <p key={stat.stat.name}> {stat.effort} {stat.stat.name}</p>
  ))}
</li>

        <li className="text-base">Catch Rate: {catch_rate}</li>
        <li className="text-base">Base Friendship: {happiness}</li>
        <li className="text-base">Base Experience: {baseExp}</li>
        <li className="text-left text-base flex">
          <span className="mr-1">Growth Rate: </span>
          {formattedGrowthRate.map((word, index) => (
            <p
              key={index}
              className={`text-base ${
                index !== formattedGrowthRate.length - 1 ? "mr-2" : ""
              }`}
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
