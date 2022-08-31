import React from "react";
import Sprite from "./Sprite";

function Actor({
  sprite,
  name,
  data,
  position = { x: 0, y: 0 },
  step = 0,
  dir = 0,
  emoji,
  message,
  playerName,
}) {
  const { h, w } = data;

  return (
    <Sprite
      name={name}
      image={sprite}
      position={position}
      data={{ x: step * w, y: dir * h, w, h }}
      emoji={emoji}
      message={message}
      playerName={playerName}
    />
  );
}

export default Actor;
