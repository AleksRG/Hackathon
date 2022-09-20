import React from "react";

function Hero({ skin, x, y }) {
  return (
    <div
      className="h-8 w-8 bg-no-repeat"
      style={{
        backgroundImage: `url(./sprites/skins/${skin}.png)`,
        backgroundPosition: `-${x}px -${y}px`,
      }}
    ></div>
  );
}

export default Hero;
