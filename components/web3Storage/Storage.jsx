import React, { useEffect, useState, useRef } from "react";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { Web3Storage } from "web3.storage";
function Storage({ user }) {
  const endOfMessagesRef = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [image, setImage] = useState();
  const [a, setA] = useState();
  const [jobs, setJobs] = useState();
  const client = new Web3Storage({
    token: process.env.NEXT_PUBLIC_API_TOKEN,
  });

  async function storeFiles() {
    const file = [new File(image, user.address)];
    try {
      const cid = await client.put(file, {
        name: user.address,
      });
      setImage("");
      setA("");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    listUploads();
  }, [a, image]);

  const x = [];
  async function listUploads() {
    for await (const upload of client.list()) {
      x.push(upload);
    }
    setJobs(x);
    // console.log(jobs);
  }

  return (
    <div className="">
      {showSidebar ? (
        <button
          className="fixed bottom-16 -right-4 z-50 ml-52 flex h-10 w-16 cursor-pointer items-center justify-center rounded-xl bg-white/60 text-[#041836]  shadow-2xl shadow-sky-500 outline-none duration-1000 ease-in-out focus:outline-none"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <BuildingOffice2Icon className="h-6 w-6" />
        </button>
      ) : (
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed bottom-16 right-[370px]  z-50 flex h-10 w-20 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-sky-300/40 to-transparent text-fuchsia-400 shadow-2xl shadow-sky-500 outline-none duration-1000 ease-in-out focus:outline-none"
        >
          <BuildingOffice2Icon className="h-6 w-6 mr-5" />
        </button>
      )}

      <div
        className={`fixed top-0 -right-[430px] h-full rounded-l-2xl bg-slate-100/80 px-4 py-2 duration-1000 ease-in-out shadow-2xl shadow-sky-300 ${
          showSidebar ? "" : "-translate-x-full"
        }`}
      >
        <div className="ml-2 flex h-full w-96">
          <div className="flex w-full flex-col justify-between">
            <div className="overflow-auto overflow-y-scroll rounded-3xl  ring-gray-100/60 scrollbar-hide ">
              <div className="space-y-8 ">
                {jobs?.map((job, id) => (
                  <img
                    className="w-full "
                    key={id}
                    src={`https://${job.cid}.ipfs.w3s.link/${job.name}`}
                  />
                ))}
              </div>
              {a && (
                <img
                  src={a}
                  objectfit="cover"
                  className="rounded-lg w-60 60 items-center mt-2"
                />
              )}
              <div ref={endOfMessagesRef} className="text-xs my-2 text-center">
                <p className="animate-pulse text-slate-400 font-momo">
                  Up to date!
                </p>
              </div>
            </div>
            <div className="mt-2 mb-2 flex justify-center">
              {!image ? (
                <label className="w-40 flex flex-col font-mono items-center text-center px-5  text-[#041836] bg-slate-100/80 rounded-xl shadow-xl shadow-sky-300 cursor-pointer ">
                  <span className="py-1 leading-normal font-mono">
                    Select a file
                  </span>
                  <input
                    className="hidden"
                    type="file"
                    onChange={(e) => {
                      setImage(e.target.files);
                      setA(URL.createObjectURL(e.target.files[0]));
                    }}
                    files={image}
                  />
                </label>
              ) : (
                <button
                  onClick={storeFiles}
                  className="flex w-20 rounded-2xl px-2 py-1 font-mono font-bold text-[#041836] text-xl bg-white/5"
                >
                  store
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Storage;
