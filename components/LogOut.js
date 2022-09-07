import React from "react";
import { signOut } from "next-auth/react";

function LogOut() {
  return (
    <div>
      <button
        onClick={() => signOut({ redirect: "/signin" })}
        className="fixed left-52 bottom-3 flex w-40 max-w-2xl justify-center rounded-xl bg-slate-100/80 px-5 py-1 font-mono text-[#041836] shadow-xl shadow-sky-300"
      >
        LogOut
      </button>
    </div>
  );
}

export default LogOut;
