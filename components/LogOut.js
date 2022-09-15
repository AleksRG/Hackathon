import React from "react";
import { signOut } from "next-auth/react";

function LogOut() {
  return (
    <button
      onClick={() => signOut({ redirect: "/signin" })}
      className="flex w-40 justify-center rounded-xl bg-slate-100/80 px-5 py-1 font-mono text-[#041836] shadow-md shadow-sky-100"
    >
      LogOut
    </button>
  );
}

export default LogOut;
