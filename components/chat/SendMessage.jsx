import { useState } from "react";

import { addDoc, collection } from "firebase/firestore";
function SendMessage({ endOfMessagesRef, database, map, user, hero }) {
  const [message, setMessage] = useState("");
  const today = new Date();

  //Mesage
  function sendMessage(e) {
    e.preventDefault();
    if (!message) return;
    addDoc(collection(database, `${map}Chat`), {
      timestamp: today.toISOString(),
      address: user.address,
      message: message,
      hero: hero,
    });
    setMessage("");

    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <form className="flex h-8 w-full items-center rounded-lg bg-slate-100/80 px-2 font-mono opacity-80 shadow-lg shadow-sky-100 text-[#041836]  ring-gray-100/60 scrollbar-hide hover:ring-2">
      <input
        type="text"
        className="w-full bg-transparent text-center text-sm placeholder-gray-500 outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Type in ${map} Chat`}
      />
      <button onClick={sendMessage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1 h-6 w-6 -rotate-90 rounded-full bg-slate-100/80  p-1 ring-1 ring-slate-300 hover:opacity-75"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
}

export default SendMessage;
