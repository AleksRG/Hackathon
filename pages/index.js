import Head from "next/head";
import LogIn from "../components/Login";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Hackathon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LogIn />
      </main>
    </div>
  );
}
