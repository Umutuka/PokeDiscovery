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
            <li>{catch_rate}</li>
            <li>{happiness}</li>
            <li>{baseExp}</li>
            <li>{growthRate}</li>
        </ul>
      
    </div>
  );
};

export default Training;
