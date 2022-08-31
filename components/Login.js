import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import axios from "axios";

function LogIn() {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const userData = { address: account, chain: chain.id, network: "evm" };

    const { data } = await axios.post("/api/auth/request-message", userData, {
      headers: {
        "content-type": "application/json",
      },
    });

    const message = data.message;

    const signature = await signMessageAsync({ message });

    // redirect user after success authentication to '/user' page
    const { url } = await signIn("credentials", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/game",
    });
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-800 text-center">
      <div className="mb-8 rounded-3xl bg-white/60 p-1.5 shadow-xl">
        <button
          onClick={() => handleAuth()}
          className="flex max-w-2xl items-center justify-center rounded-3xl border-gray-100  py-0.5 px-12 text-center font-mono text-lg font-semibold text-[#041836] ring-slate-300 hover:ring-1"
        >
          LogIn
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-5 w-5 rotate-180 text-green-500"
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
      </div>
    </div>
  );
}

export default LogIn;
