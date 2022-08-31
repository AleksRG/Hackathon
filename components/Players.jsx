import React from "react";

function Players({ attributes }) {
  return (
    <div>
      {" "}
      {attributes?.message && (
        <div
          className="absolute flex max-h-16 min-w-[90px] max-w-[140px] items-center justify-center overflow-visible rounded-md bg-gray-200 py-1 px-1 font-mono text-xs font-semibold text-[#041836] shadow-md shadow-stone-900"
          style={{
            left: attributes?.positionX - 30,
            top: attributes?.positionY - 35,
          }}
        >
          {attributes?.message}
        </div>
      )}
      <div
        className="absolute h-8 w-8 bg-no-repeat"
        style={{
          left: attributes.positionX,
          top: attributes.positionY,
          backgroundImage: `url(sprites/skins/${attributes.sprite}.png)`,
          backgroundPosition: `-${attributes.imageX}px -${attributes.imageY}px`,
        }}
      >
        {" "}
        {!attributes.emoji && !attributes.message ? (
          !attributes.playerName.length ? (
            <p className="-mt-5 -ml-4 text-xs font-bold text-[#041836]">
              {attributes?.address.substring(0, 4)}
              ...
              {attributes?.address.substring(attributes.address.length - 4)}
            </p>
          ) : (
            <div className="-mt-5 -ml-6 w-20 text-[14px] font-bold text-[#041836]">
              <p className="m-auto flex justify-center">
                {attributes.playerName}
              </p>
            </div>
          )
        ) : !attributes.message ? (
          <p className="-mt-8 flex cursor-default items-center justify-center rounded-md bg-gray-200 px-3 py-0.5 shadow-md shadow-stone-900">
            {attributes.emoji}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Players;
