import React from "react";
function Sprite({ image, data, position, name, emoji, message, playerName }) {
  const { y, x } = data;

  return (
    <>
      {message && (
        <div
          className="absolute flex max-h-16 min-w-[90px] max-w-[140px] items-center justify-center overflow-visible rounded-md py-1 px-1 font-mono text-xs font-semibold text-[#041836] bg-slate-100/80 shadow-lg shadow-sky-100 "
          style={{
            left: position.x - 30,
            top: position.y - 35,
          }}
        >
          {message}
        </div>
      )}

      <div
        className="absolute h-8 w-8 bg-no-repeat"
        style={{
          left: position.x,
          top: position.y,
          backgroundImage: `url(${image})`,
          backgroundPosition: `-${x}px -${y}px`,
        }}
      >
        {!emoji && !message ? (
          !playerName ? (
            <p className="-mt-5 -ml-4 text-xs font-bold text-[#041836]">
              {name?.substring(0, 4)}
              ...
              {name?.substring(name?.length - 4)}
            </p>
          ) : (
            <div className="-mt-5 -ml-6 w-20 text-[14px] font-bold text-[#041836]">
              <p className="m-auto flex justify-center">{playerName}</p>
            </div>
          )
        ) : (
          !message && (
            <p className="-mt-9 flex cursor-default items-center justify-center rounded-md bg-slate-100/80 shadow-lg shadow-sky-100 px-3 py-0.5">
              {emoji}
            </p>
          )
        )}
      </div>
    </>
  );
}

export default Sprite;
