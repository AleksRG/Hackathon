import React from "react";

function Header() {
  return (
    <div className=" w-full">
      {" "}
      <div className="bg-pink-500 w-full flex flex-col justify-center py-20 shadow-xl text-white shadow-sky-300">
        {" "}
        <div className="font-bold text-xl text-white my-4">
          <p>
            Welcome to <span className="text-[#041836]">Meta Land</span>
            {" -"} meet web3 developers, investors and enthusiasts
          </p>{" "}
          <h1 className="font-extrabold text-6xl ">
            Build your own<span className="text-[#041836]"> Web3</span> space
            today
          </h1>
        </div>{" "}
        <div className=" m-4 flex justify-center ">
          <div
            className="h-8 w-8 bg-no-repeat"
            style={{
              backgroundImage: `url(./sprites/skins/a4.png)`,
              backgroundPosition: `-${0}px -${64}px`,
            }}
          ></div>{" "}
          This project is still under development, please use the
          <a className="text-[#041836] font-bold px-2"> Polygon Mumbai </a>{" "}
          testnet
        </div>
      </div>
    </div>
  );
}

export default Header;
