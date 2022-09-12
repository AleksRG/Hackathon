import React, { useEffect, useState, useRef } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import SendMessage from "./SendMessage";
import Message from "./Message.jsx";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

function Chat({ database, map, user, hero }) {
  const endOfMessagesRef = useRef(null);
  const [players, setPlayers] = useState();
  const [showSidebar, setShowSidebar] = useState(false);

  const colectionRef = collection(database, "MainChat");
  const orderedMessages = query(colectionRef, orderBy("timestamp", "asc"));

  const data = () => {
    onSnapshot(orderedMessages, (data) => {
      setPlayers(
        data.docs.map((item) => {
          return item.data();
        })
      );
    });
  };
  useEffect(() => {
    data();
  }, []);

  useEffect(() => {
    endOfMessagesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [players]);

  return (
    <div className="">
      {showSidebar ? (
        <button
          className="fixed bottom-3 -right-4 z-50 ml-52 flex h-10 w-16 cursor-pointer items-center justify-center rounded-xl bg-white/60 text-[#041836]  shadow-2xl shadow-sky-500 outline-none duration-1000 ease-in-out focus:outline-none"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
        </button>
      ) : (
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed bottom-3 right-[370px]  z-50 flex h-10 w-20 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-sky-300/40 to-transparent text-fuchsia-400 shadow-2xl shadow-sky-500 outline-none duration-1000 ease-in-out focus:outline-none"
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6 mr-5" />
        </button>
      )}

      <div
        className={`fixed top-0 -right-[430px] h-full rounded-l-2xl bg-slate-100/80 px-4 py-2 duration-1000 ease-in-out shadow-2xl shadow-sky-300 ${
          showSidebar ? "" : "-translate-x-full"
        }`}
      >
        <div className="ml-2 flex h-full w-96 space-y-2 ">
          <div className="flex w-full flex-col justify-between">
            <div className="overflow-auto overflow-y-scroll rounded-3xl bg-slate-100/80 shadow-md shadow-sky-100 ring-gray-100/60 scrollbar-hide hover:ring-2">
              <div className="space-y-8 mt-6">
                {players &&
                  players.map((message, id) => (
                    <Message key={id} message={message} hero={hero} />
                  ))}
              </div>

              <div ref={endOfMessagesRef} className="text-xs my-2 text-center">
                <p className="animate-pulse text-slate-400 font-momo">
                  Up to date!
                </p>
              </div>
            </div>
            <div className="mt-2 mb-2 flex justify-center">
              <SendMessage
                map={map}
                hero={hero}
                user={user}
                endOfMessagesRef={endOfMessagesRef}
                database={database}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
