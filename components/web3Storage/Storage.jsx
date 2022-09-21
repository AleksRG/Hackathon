import React, { useEffect, useState, useRef } from "react";
import { LinkIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { Web3Storage } from "web3.storage";
import Link from "next/link";

function Storage({ user }) {
  const endOfMessagesRef = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
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
      setPreview("");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    listUploads();
  }, [image]);

  const arr = [];
  async function listUploads() {
    for await (const upload of client.list()) {
      if (arr.includes(upload)) {
        return;
      }
      arr.push(upload);
    }
    setJobs(arr);
    // console.log(jobs);
  }

  return (
    <div>
      {showSidebar ? (
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed bottom-16 h-10 z-50 flex cursor-pointer items-center justify-center rounded-xl outline-none duration-1000 ease-in-out focus:outline-none w-20 right-[370px] bg-gradient-to-r from-sky-300/40 to-transparent text-fuchsia-400 shadow-2xl shadow-sky-500"
        >
          <BriefcaseIcon className="h-6 w-6 mr-5" />
        </button>
      ) : (
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed bottom-16 h-10 z-50 flex cursor-pointer items-center justify-center rounded-xl outline-none duration-1000 ease-in-out focus:outline-none w-16 ml-52 -right-4 bg-slate-100/80 text-[#041836] shadow-lg shadow-sky-100"
        >
          <BriefcaseIcon className="h-6 w-6 mr-5" />
        </button>
      )}

      <div
        className={`fixed top-0 -right-[430px] h-full rounded-l-2xl bg-slate-100/80 px-4 py-2 duration-1000 ease-in-out shadow-2xl shadow-sky-300 ${
          !showSidebar ? "" : "-translate-x-full"
        }`}
      >
        <div className="ml-2 flex h-full w-96 font-mono">
          <div className="flex w-full flex-col justify-between">
            <div className="overflow-auto overflow-y-scroll rounded-3xl ring-gray-100/60 scrollbar-hide">
              <div className="space-y-8 ">
                {jobs?.map((job, id) => (
                  <div
                    className="flex items-center justify-center relative"
                    key={id}
                  >
                    <Link href={`https://${job.cid}.ipfs.w3s.link/${job.name}`}>
                      <a
                        className="absolute animate-pulse text-fuchsia-400 bg-slate-100/80 p-2 text-center rounded-xl"
                        target="_blank"
                      >
                        <LinkIcon className="h-8 w-8" />
                      </a>
                    </Link>
                    <img
                      className="rounded-2xl"
                      src={`https://${job.cid}.ipfs.w3s.link/${job.name}`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
              {preview && (
                <img
                  src={preview}
                  objectfit="cover"
                  className="rounded-lg w-full items-center mt-2"
                  alt=""
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
                <label className="w-60 flex flex-col items-center text-center px-5 text-[#041836] bg-slate-100/80 rounded-xl shadow-lg shadow-sky-100 cursor-pointer">
                  <span className="py-1">Post web3 job</span>
                  <input
                    className="hidden"
                    type="file"
                    onChange={(e) => {
                      setImage(e.target.files);
                      setPreview(URL.createObjectURL(e.target.files[0]));
                    }}
                    files={image}
                  />
                </label>
              ) : (
                <button
                  onClick={storeFiles}
                  className="flex w-60 justify-center rounded-xl bg-slate-100/80 px-5 py-1 font-mono text-[#041836] shadow-xl shadow-sky-300"
                >
                  Upload
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
