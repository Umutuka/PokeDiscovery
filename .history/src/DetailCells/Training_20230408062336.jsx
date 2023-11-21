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
    <div className="p-5 text-3xl border rounded-lg bg-slate-300 justify-center items-start flex flex-col">
      <h2 className="font-semibold mb-5">Training</h2>
      
      <ul className="flex flex-col">
        <li className="font-thin mb-2">EV Yield {ev}</li>
        <li className="font-thin mb-2">Catch Rate: {catch_rate}</li>
        <li className="font-thin mb-2">Base Friendship {happiness}</li>
        <li className="font-thin mb-2">Base Experience {baseExp}</li>
        <li className="flex font-thin">
            Growth-Rate:
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

export default Training;
