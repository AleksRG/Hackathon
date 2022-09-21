import React from "react";

function Button({ symbol }) {
  return (
    <div className="flex items-center h-16 w-16 text-center justify-center font-semibold rounded-xl shadow-lg bg-white/30 shadow-sky-300 hover:shadow-pink-400 focus:outline-none text-xl cursor-pointer">
      {symbol}
    </div>
  );
}
export default Button;
