import React, { useState } from "react";

function Balance({ user }) {
  const [matic, setMatic] = useState(0);
  const options = {
    method: "GET",
    headers: { accept: "application/json", "X-API-Key": "test" },
  };

  fetch(
    `https://deep-index.moralis.io/api/v2/${user.address}/balance?chain=mumbai`,
    options
  )
    .then((response) => response.json())
    .then(({ balance }) => {
      setMatic(balance / Math.pow(10, 18));
    })
    .catch((err) => console.error(err));

  return (
    <div className="flex justify-center w-full">
      <div className="fixed top-3 flex rounded-xl bg-slate-100/80 shadow-lg shadow-sky-100 justify-center px-8 p-1 font-mono text-[#041836]">
        {" "}
        {matic.toFixed(4)}
        <img src="polygon.svg" className="h-6" />
      </div>
    </div>
  );
}
//
export default Balance;
