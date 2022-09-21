import { database } from "../fireabse";
import Player from "../components/player/Player";
import Balance from "../components/player/Balance";
import LogOut from "../components/LogOut";
import { useState } from "react";
import GamePlayers from "../components/game/GamePlayers";
import Storage from "../components/web3Storage/Storage";
import Chat from "../components/chat/Chat";
import Buldings from "../components/payments/Buldings";
import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";

import {
  FaceSmileIcon,
  XCircleIcon,
  ArchiveBoxXMarkIcon,
  HomeModernIcon,
  MapIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

function Game({ user }) {
  const [map, setMap] = useState("Main");
  const [emo, setEmo] = useState("");
  const [message, setMessage] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [typing, setTyping] = useState("");
  const [hero, setHero] = useState("a4");
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const emogies = [
    "😃",
    "💜",
    "🖐️",
    "🧠",
    "💯",
    "😈",
    "🪀",
    "🤑",
    "👏",
    "🐹",
    "😋",
    "💩",
    "😎",
    "💣",
    "⭐",
    "🎃",
  ];
  const heroes = [
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "m1",
    "m2",
    "m3",
    "m4",
    "m5",
    "m6",
    "m7",
    "m8",
    "m9",
    "z1",
    "z2",
    "z3",
    "z4",
    "z5",
  ];
  function setNewUsername(e) {
    setPlayerName(e.target.value);
  }
  function clear() {
    setEmo("");
    setMessage("");
    setTyping("");
  }
  function changeMap() {
    map === "Main" ? setMap("Home") : setMap("Main");
  }

  return (
    <div>
      {map === "Main" ? (
        <div
          style={{
            left: 500,
            top: 500,
          }}
          onClick={changeMap}
          className="absolute flex cursor-pointer h-10 w-20 animate-pulse items-center justify-center rounded-xl bg-white/50 px-2"
        >
          {" "}
          <HomeModernIcon className="h-6 w-6" />
        </div>
      ) : (
        <div
          style={{
            left: 0,
            top: 260,
          }}
          onClick={changeMap}
          className="absolute cursor-pointer flex h-10 w-20 animate-pulse items-center justify-center rounded-xl bg-white/50 px-2"
        >
          {" "}
          <MapIcon className="h-6 w-6 text-pink-600" />
        </div>
      )}
      <div className="">
        {" "}
        <img
          src={`/${map}.png`}
          loading="lazy"
          className="max-w-[9500px] shadow-xl shadow-sky-300"
          onClick={() => setTyping("")}
          alt=" "
        />
      </div>
      <Buldings database={database} map={map} user={user} />
      <Balance user={user} />
      <Storage user={user} />
      <Chat database={database} user={user} map={map} hero={hero} />
      <GamePlayers database={database} user={user} map={map} />
      <Player
        database={database}
        hero={hero}
        emoji={emo}
        message={message}
        typing={typing}
        user={user}
        playerName={playerName}
        map={map}
      />

      <div className="flex h-screen w-full items-center justify-center">
        {" "}
        <div className="fixed bottom-3 flex max-w-2xl justify-center space-x-2 rounded-xl bg-slate-100/80 px-5 py-1 font-mono text-xl font-semibold text-pink-600 shadow-lg shadow-sky-100">
          {!showModal ? (
            <button
              onClick={() => setShowModal(true)}
              className="rounded-md px-2 text-xs font-semibold text-[#041836]"
            >
              <FaceSmileIcon className="h-7 w-7" />
            </button>
          ) : (
            <button
              onClick={() => setShowModal(false)}
              className="px-2 text-xs font-semibold text-[#041836]"
            >
              <XCircleIcon className="h-7 w-7" />
            </button>
          )}
          <input
            type="text"
            className="flex w-72 flex-grow  font-normal items-center justify-center bg-transparent  text-sm text-[#041836] placeholder-gray-500 outline-none font-mono placeholder:text-center "
            value={message}
            maxLength="40"
            onFocus={() => setTyping("typing")}
            onChange={(e) => setMessage(e.target.value.toUpperCase())}
            placeholder={`What's happening?`}
          />{" "}
          <button
            onClick={clear}
            className="rounded-md px-2 text-xs font-semibold text-[#041836]"
          >
            <ArchiveBoxXMarkIcon className="h-6 w-6" />
          </button>
          {showModal && (
            <>
              {" "}
              <div className="fixed bottom-14 flex h-9 items-center justify-center overflow-y-auto overflow-x-hidden rounded-xl bg-slate-100/80  px-2 outline-none focus:outline-none ">
                <div className="relative mx-auto w-auto space-x-1">
                  {emogies.map((emo, id) => (
                    <button key={id} onClick={() => setEmo(emo)}>
                      {emo}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="aboslute">
        {showSidebar ? (
          <button
            className="fixed bottom-3 z-50 flex h-10 w-20 cursor-pointer items-center justify-center rounded-xl outline-none duration-1000 ease-in-out focus:outline-none bg-gradient-to-l from-sky-300/40 to-transparent text-fuchsia-400 left-48 shadow-sky-500 shadow-2xl"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <PaintBrushIcon className={`h-5 w-5 ml-4`} />
          </button>
        ) : (
          <button
            className="fixed bottom-3 z-50 flex h-10 w-20 cursor-pointer items-center justify-center rounded-xl outline-none duration-1000 ease-in-out focus:outline-none
                bg-white/60 shadow-lg shadow-sky-100 text-[#041836] -left-8"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <PaintBrushIcon className={`h-5 w-5 ml-4`} />
          </button>
        )}

        <div
          className={`fixed top-0 left-0 h-full w-60 rounded-r-2xl bg-slate-100/80 p-4 duration-1000 ease-in-out shadow-2xl shadow-sky-300 ${
            showSidebar ? "" : "-translate-x-full"
          }`}
        >
          <div className="ml-2 flex w-44 flex-col items-center space-y-2 justify-between h-full">
            {heroes?.map((hero, id) => (
              <div
                key={id}
                className="h-8 w-8 min-h-12 cursor-pointer rounded-md bg-no-repeat"
                onClick={() => setHero(hero)}
                style={{
                  backgroundImage: `url(sprites/skins/${hero}.png)`,
                  backgroundPosition: `-${0}px -${0}px`,
                }}
              ></div>
            ))}

            <input
              className="flex w-40 justify-center rounded-xl bg-slate-100/80 px-5 py-1 font-mono text-[#041836] placeholder:text-[#041836] shadow-md shadow-sky-100 placeholder:text-center outline-none text-center"
              placeholder={`UserName`}
              value={playerName}
              maxLength="7"
              onFocus={() => setTyping("typing")}
              onChange={(e) => setNewUsername(e)}
            />

            <LogOut />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const token = await getToken(context);
  console.log("SESSION", session);
  console.log("JWT", token);

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
}

export default Game;
