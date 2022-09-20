import React from "react";
import Hero from "./Hero";

function Footer() {
  return (
    <div className="grid grid-flow-col grid-rows-1 grid-cols-3 mb-2 relative left-20">
      <div className="row-start-1 col-start-1 left-36 relative">
        <div className="relative -top-2 right-[180px] flex max-h-16 items-center justify-center overflow-visible rounded-md bg-white py-1.5 px-1 font-mono text-sm font-semibold text-[#041836] shadow-md shadow-stone-900">
          When will it stop scrolling?
        </div>
        <Hero skin={"z5"} x={32} y={96} />
      </div>
      <div className="row-start-1 col-start-2">
        {" "}
        <div className="relative w-10 -top-2 right-1 flex items-center justify-center overflow-visible rounded-md py-1 px-1 shadow-md shadow-stone-900">
          😅
        </div>
        <Hero skin={"m9"} x={32} y={96} />
      </div>{" "}
      <div className="row-start-1 col-start-3 -left-36 relative">
        <div className="relative w-10 -top-2 right-1 flex items-center justify-center overflow-visible rounded-md py-1 px-1 shadow-md shadow-stone-900">
          🤣
        </div>
        <Hero skin={"m1"} x={32} y={96} />
      </div>
    </div>
  );
}

export default Footer;
