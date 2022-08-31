import React from "react";
import { signOut } from "next-auth/react";

function LogOut() {
  return (
    <div>
      <button
        onClick={() => signOut({ redirect: "/signin" })}
        className="fixed left-52 bottom-3 flex w-40 max-w-2xl justify-center rounded-md bg-gray-900/80 px-5 py-1 font-mono font-semibold text-fuchsia-600 shadow-xl shadow-gray-700"
      >
        LogOut
      </button>
    </div>
  );
}

export default LogOut;
