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

  return (
    <div className="p-5 text-3xl border rounded-lg bg-slate-300 justify-center items-center text-center">
        <ul>
            <li>EV Yield {ev}</li>
            <li>Catch Rate: {catch_rate}</li>
            <li>Base Friendship {happiness}</li>
            <li>Base Experience {baseExp}</li>
            <li> {growthRate.charAt(0).toUpperCase() + growthRate.splice(1)}</li>
        </ul>
      
    </div>
  );
};

export default Training;
