import { useState } from "react";

function useWalk(maxSteps, x, y) {
  const [position, setPosition] = useState({
    x: x,
    y: y,
  });
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);

  const directions = {
    s: 0,
    a: 1,
    d: 2,
    w: 3,
  };

  const stepSize = 16;
  const modifier = {
    s: { x: 0, y: stepSize },
    a: { x: -stepSize, y: 0 },
    d: { x: stepSize, y: 0 },
    w: { x: 0, y: -stepSize },
  };

  function walk(dir) {
    setDir((prev) => {
      if (directions[dir] === prev) move(dir);
      return directions[dir];
    });
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
  }

  function move(dir) {
    setPosition((prev) => ({
      x: prev.x + modifier[dir].x >= 0 ? prev.x + modifier[dir].x : prev.x,
      y: prev.y + modifier[dir].y >= 0 ? prev.y + modifier[dir].y : prev.y,
    }));
  }

  return {
    walk,
    dir,
    step,
    position,
  };
}
export default useWalk;
