import React from "react";
import Button from "./Button";
import Hero from "./Hero";
function Main() {
  return (
    <div className="w-full">
      <div className="flex justify-around w-full items-center h-96">
        <h2 className="font-extrabold text-4xl text-[#041836] w-96">
          Create your own
          <span className=" text-pink-500"> Property</span>
        </h2>
        <div className="h-[360px] mt-10 w-[660px] rounded-3xl bg-[url('../public/frontend/good.png')] bg-cover bg-center text-center shadow-xl shadow-sky-300 items-end flex">
          {" "}
          <div className="rounded-3xl h-[130px] relative -left-20 bottom-6 bg-white/95 w-60 shadow-2xl shadow-sky-400/50">
            <div className="flex-col pt-4 space-y-2">
              <div className="flex justify-between px-4">
                <div className="w-24 bg-cyan-100/70 h-4 rounded-sm"></div>
                <div className="w-16 bg-teal-100/70 h-4 rounded-sm"></div>
              </div>
              <div className="flex justify-between px-4">
                <div className="w-20 bg-teal-100/70 h-4 rounded-sm"></div>
                <div className="flex items-center">
                  <img src="polygon.svg" className="h-5" />
                  <div className="w-8 bg-teal-100/70 h-4 rounded-sm"></div>
                </div>
              </div>
              <div className="flex justify-between border-b-2 border-cyan-200/50 pb-2 px-4">
                <div className="w-28 bg-teal-100/70 h-4 rounded-sm "></div>
              </div>
              <div className="flex justify-end px-4">
                <div className="w-20 bg-teal-100/70 h-4 rounded-sm "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around w-full items-center h-96">
        <div className="grid grid-flow-col grid-rows-2 grid-cols-4 gap-8 ">
          <div className="relative -left-4 -top-4 bg-white/30 h-16 w-16 items-center justify-center flex rounded-xl shadow-lg shadow-sky-300">
            <Hero skin={"a1"} x={0} y={64} />
          </div>
          <div className="relative -left-4 -top-4 bg-white/30 h-16 w-16 items-center justify-center flex rounded-xl shadow-lg shadow-sky-300">
            <Hero skin={"a6"} x={0} y={64} />
          </div>
          <div className="bg-white/30 h-16 w-16 items-center justify-center flex rounded-xl shadow-lg shadow-sky-300">
            <Hero skin={"a3"} x={0} y={64} />
          </div>
          <div className="bg-white/30 h-16 w-16 items-center justify-center flex rounded-xl shadow-lg shadow-sky-300">
            <Hero skin={"a5"} x={0} y={64} />
          </div>
          <div className="relative -right-4 -bottom-4 bg-white/30 h-16 w-16 items-center justify-center flex rounded-xl shadow-lg shadow-sky-300">
            <Hero skin={"a4"} x={0} y={64} />
          </div>{" "}
          <div className="relative -right-4 -bottom-4 bg-white/30 h-16 w-16 items-center justify-center flex rounded-xl shadow-lg shadow-sky-300">
            <Hero skin={"m3"} x={0} y={64} />
          </div>
          <div className="relative left-8 -bottom-8 bg-white/30 h-16 w-16 items-center justify-center flex rounded-xl shadow-lg shadow-sky-300">
            <Hero skin={"z4"} x={0} y={64} />
          </div>{" "}
          <div className="relative left-8 -bottom-8 bg-white/30 h-16 w-16 items-center justify-center flex rounded-xl shadow-lg shadow-sky-300">
            <Hero skin={"m6"} x={0} y={64} />
          </div>
        </div>
        <h2 className="font-extrabold text-4xl text-pink-500 w-96">
          Customize your
          <span className=" text-[#041836]"> Character</span>
        </h2>
      </div>
      <div className="w-full h-96 bg-pink-500 mt-10 flex justify-around text-white items-center mb-20 shadow-xl shadow-sky-300">
        <div className="w-96">
          <h3 className="text-[#041836] text-lg font-semibold">
            Web3 companies
          </h3>
          <p className="font-extrabold text-3xl">
            Find <span className="text-[#041836] "> developers </span>
            by posting your <span className="text-[#041836] ">
              {" "}
              positions{" "}
            </span>{" "}
            in the job section
          </p>
          <span className="text-[#041836] text-lg font-semibold">
            Make them easy to read, here's an example
          </span>
        </div>
        <div className="h-[460px] relative w-[660px] rounded-3xl shadow-2xl shadow-sky-500 bg-[url('../public/frontend/poly.png')]  bg-cover bg-left flex justify-around text-xl flex-col p-4"></div>{" "}
      </div>

      <div className="flex justify-around w-full items-center h-96">
        <h2 className="font-extrabold text-4xl text-pink-500 w-96">
          Use <span className="text-[#041836]"> keyboard </span> buttons for{" "}
          <span className="text-[#041836]"> movement </span>
        </h2>
        <div className="grid grid-flow-col grid-rows-3 grid-cols-3 gap-8 ">
          <div className="row-start-2 col-start-1 justify-center flex items-center">
            <Button symbol={"A"} />
          </div>
          <div className="row-start-1 col-start-2 justify-center flex items-center">
            <Button symbol={"W"} />
          </div>{" "}
          <div className="row-start-2 col-start-2">
            <div className="relative bg-white/30 h-16 w-16 items-center justify-center flex rounded-xl shadow-lg shadow-sky-300">
              <Hero skin={"a4"} x={32} y={96} />
            </div>{" "}
          </div>{" "}
          <div className="row-start-2 col-start-3 justify-center flex items-center">
            <Button symbol={"D"} />
          </div>
          <button className="row-start-3 col-start-2 ">
            <Button symbol={"S"} />
          </button>
        </div>
      </div>
      <div className="w-full h-96 bg-pink-500 mt-10 flex justify-around text-white items-center mb-20 shadow-xl shadow-sky-300">
        <div className="h-[460px] relative w-[300px] rounded-3xl shadow-2xl shadow-sky-500 bg-[url('../public/frontend/Chat.png')] bg-cover bg-top flex justify-around text-xl flex-col p-4">
          <div className="h-[70px] left-40 relative w-[360px] rounded-xl shadow-2xl shadow-sky-500 bg-[url('../public/frontend/chatPersonal.png')] bg-cover bg-center flex justify-around text-xl flex-col p-4"></div>{" "}
        </div>{" "}
        <div className="w-96">
          <h3 className="font-extrabold text-3xl">
            Group chat <span className="text-[#041836] "> channel</span> and{" "}
            <span className="text-[#041836] "> personal </span> communication
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Main;
