import { getSession } from "next-auth/react";
import { database } from "../fireabse";
import Player from "../components/player/Player";
import LogOut from "../components/LogOut";
import { useState } from "react";
import GamePlayers from "../components/GamePlayers";
import {
  FaceSmileIcon,
  XCircleIcon,
  ArchiveBoxXMarkIcon,
  SwatchIcon,
  HomeModernIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

function Game({ user }) {
  const [map, setMap] = useState("main");
  const [emo, setEmo] = useState("");
  const [message, setMessage] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [typing, setTyping] = useState("");
  const [hero, setHero] = useState("a4");
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
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
    map === "main" ? setMap("Home") : setMap("main");
  }
  return (
    <div className="">
      {map === "main" ? (
        <div
          style={{
            left: 500,
            top: 520,
          }}
          onClick={changeMap}
          className="absolute flex h-10 w-20 animate-pulse items-center justify-center rounded-xl bg-white/50 px-2"
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
          className="absolute flex h-10 w-20 animate-pulse items-center justify-center rounded-xl bg-white/50 px-2"
        >
          {" "}
          <MapIcon className="h-6 w-6 text-pink-600" />
        </div>
      )}

      <img
        src={`/${map}.png`}
        loading="lazy"
        className="max-w-[9500px] shadow-xl shadow-sky-300"
        onClick={() => setTyping("")}
      />
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
        <div className="fixed bottom-3 flex max-w-2xl justify-center space-x-2 rounded-xl bg-gray-900/80 px-5 py-1 font-mono text-xl font-semibold text-pink-600 shadow-xl shadow-gray-700">
          {!showModal ? (
            <button
              onClick={() => setShowModal(true)}
              className="rounded-md px-2 text-xs font-semibold text-pink-600"
            >
              <FaceSmileIcon className="h-7 w-7" />
            </button>
          ) : (
            <button
              onClick={() => setShowModal(false)}
              className="px-2 text-xs font-semibold text-pink-600"
            >
              <XCircleIcon className="h-7 w-7" />
            </button>
          )}
          <input
            type="text"
            className="flex w-72 flex-grow items-center justify-center bg-transparent text-sm font-semibold text-gray-300 placeholder-gray-500 outline-none placeholder:text-center"
            value={message}
            maxLength="40"
            onFocus={() => setTyping("typing")}
            onChange={(e) => setMessage(e.target.value.toUpperCase())}
            placeholder={`What's happening?`}
          />{" "}
          <button
            onClick={clear}
            className="rounded-md px-2 text-xs font-semibold text-pink-600"
          >
            <ArchiveBoxXMarkIcon className="h-6 w-6" />
          </button>
          {showModal && (
            <>
              {" "}
              <div className="fixed bottom-14 flex h-9 items-center justify-center overflow-y-auto overflow-x-hidden rounded-xl bg-gray-900/80 px-2 outline-none focus:outline-none">
                <div className="relative mx-auto w-auto space-x-1 text-[#041836]">
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
        <div className="fixed bottom-3 left-10 flex w-40 max-w-2xl cursor-pointer justify-center rounded-xl bg-gray-900/80 px-5 py-1 font-mono font-semibold text-pink-600 shadow-xl shadow-gray-700">
          {!showModal2 ? (
            <button onClick={() => setShowModal2(true)}>UserName</button>
          ) : (
            <button onClick={() => setShowModal2(false)}>Save</button>
          )}

          {showModal2 && (
            <>
              {" "}
              <div className="fixed bottom-14 left-10 mx-auto flex w-56 flex-col space-y-2 rounded-md bg-gray-900/80 p-2">
                <input
                  className="w-full bg-transparent text-center text-sm text-gray-300 placeholder-gray-500 outline-none"
                  placeholder={`Enter your new Username`}
                  value={playerName}
                  maxLength="7"
                  onFocus={() => setTyping("typing")}
                  onChange={(e) => setNewUsername(e)}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="aboslute">
        {showSidebar ? (
          <button
            className="fixed inset-y-1/2 z-50 ml-52 h-8 w-8 cursor-pointer items-center text-pink-600 duration-1000 ease-in-out"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <SwatchIcon className="h-6 w-6" />
          </button>
        ) : (
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="fixed inset-y-1/2 -left-5 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-md bg-gray-900/80 text-pink-600 shadow-md duration-1000 ease-in-out"
          >
            <SwatchIcon className="h-6 w-6 ml-5" />
          </button>
        )}

        <div
          className={`fixed top-0 left-0 h-full w-60 rounded-r-2xl bg-gray-900/80 p-4 duration-1000 ease-in-out ${
            showSidebar ? "" : "-translate-x-full"
          }`}
        >
          <div className="ml-2 flex h-full w-44 flex-col items-center justify-center space-y-2">
            {heroes?.map((hero, id) => (
              <div
                key={id}
                className=" h-8 w-8 cursor-pointer rounded-md bg-no-repeat hover:ring-2 hover:ring-sky-600"
                onClick={() => setHero(hero)}
                style={{
                  backgroundImage: `url(sprites/skins/${hero}.png)`,
                  backgroundPosition: `-${0}px -${0}px`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <LogOut />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
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
