import React from "react";

function Button({ symbol }) {
  return (
    <div className="">
      <button className="block h-16 w-16 text-center justify-center font-semibold rounded-xl shadow-lg bg-white/30 shadow-sky-300 hover:shadow-pink-400 focus:outline-none text-xl ">
        {symbol}
      </button>
    </div>
  );
}
export default Button;
