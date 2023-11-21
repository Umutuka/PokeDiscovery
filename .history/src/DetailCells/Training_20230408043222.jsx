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
  // const style = type + " thumb-container";
  let string = {growthRate}
  const arr = string.split("-");

  arr.array.forEach(element => {
    element.charAt(0).toUpperCase + element.splice(1);
  });

  let growth = arr.join(" ")
  return (
    <div className="p-5 text-3xl border rounded-lg bg-slate-300 justify-center items-center text-center">
        <ul>
            <li>EV Yield {ev}</li>
            <li>Catch Rate: {catch_rate}</li>
            <li>Base Friendship {happiness}</li>
            <li>Base Experience {baseExp}</li>
            <li> {growth}</li>
        </ul>
      
    </div>
  );
};

export default Training;
