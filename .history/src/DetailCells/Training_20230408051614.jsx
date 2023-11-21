import React from "react";
import { Link } from "react-router-dom";

const Training = ({
  ev,
  catch_rate,
  happiness,
  baseExp,
  growthRate,
  _callback,
}) => {
  const arr = growthRate.split("-");

  const capitalizedArr = arr.map(
    (element) => element.charAt(0).toUpperCase() + element.slice(1)
  );

  return (
    <div className="p-5 font-semibold text-3xl border rounded-lg bg-slate-300 justify-center items-center text-center">
      <ul>
        <li>EV Yield {ev}</li>
        <li>Catch Rate: {catch_rate}</li>
        <li>Base Friendship {happiness}</li>
        <li className="bold">Base Experience {baseExp}</li>
        <li className="flex">
          {capitalizedArr.map((element, index) => (
            <p key={index} className="text-2xl">
              {index !== 0 && <span className="mx-2">/</span>}
              {element} {index === capitalizedArr.length - 1 && <span></span>}
            </p>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Training;
