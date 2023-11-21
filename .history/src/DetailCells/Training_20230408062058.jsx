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
    <div className="p-5 text-3xl border rounded-lg bg-slate-300 text-left">
      <h2 className="pb-5 text-left">Training</h2>
      
      <ul className="text-left items-start">
        <li className="font-thin">EV Yield {ev}</li>
        <li className="font-thin">Catch Rate: {catch_rate}</li>
        <li className="font-thin">Base Friendship {happiness}</li>
        <li className="font-thin">Base Experience {baseExp}</li>
        <li className="flex font-thin text-left">
            Growth-Rate:
          {capitalizedArr.map((element, index) => (
            <p key={index} className="text-2xl text-left">
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
