import React from "react";
import { Link } from "react-router-dom";

import React from "react";

const Training = (props) => {
  return (
    <div className="training">
      <h2 className="text-gray-50 text-center font-bold italic mt-5 text-3xl font-sans">
        Training
      </h2>
      <ul className="text-3xl text-center space-y-4 space-x-2 font-sans">
        <li>Effort Value (EV): {props.ev}</li>
        <li>Catch Rate: {props.catch_rate}</li>
        <li>Base Happiness: {props.happiness}</li>
        <li>Base Experience: {props.baseExp}</li>
        <li>Growth Rate: {props.growthRate}</li>
      </ul>
    </div>
  );
};

export default Training;
