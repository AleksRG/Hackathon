import Head from "next/head";
import Header from "../components/frontend/Header";
import Main from "../components/frontend/Main";
import Footer from "../components/frontend/Footer";
import axios from "axios";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";

export default function Home() {
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

    const { url } = await signIn("credentials", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/game",
    });

    push(url);
  };
  return (
    <div>
      <Head>
        <title>Meta Land | Web3 space </title>
        <meta name="description" content="Build your own Web3 space today" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <div className="flex flex-col min-h-screen w-full items-center text-center">
          <Header />
          <button
            onClick={() => handleAuth()}
            className="flex rounded-2xl relative -top-6 bg-white p-1.5 shadow-xl shadow-sky-300 items-center justify-center px-16 text-center text-lg font-semibold text-[#041836] hover:scale-105 duration-100"
          >
            LogIn
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-pink-600 ml-2"
            >
              <path
                fillRule="evenodd"
                d="M10 2a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5A.75.75 0 0110 2zM5.404 4.343a.75.75 0 010 1.06 6.5 6.5 0 109.192 0 .75.75 0 111.06-1.06 8 8 0 11-11.313 0 .75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <Main />
          <Footer />
        </div>
      </main>
    </div>
  );
}
