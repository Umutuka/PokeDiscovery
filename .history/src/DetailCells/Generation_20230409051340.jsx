import React from "react";

const Generation = ({generation}) => {
  return (
    <div className="p-1 pb-10 space-y-2 text-base font-semibold border rounded-lg bg-slate-300 text-left">
        <p className="text-center text-9xl p-32">{generation}</p>

    </div>
  );
};

export default Generation;
