import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  doc,
  updateDoc,
} from "firebase/firestore";
import { ethers } from "ethers";

function Buldings({ database, map }) {
  const colectionRef = collection(database, "Builds");
  const orderedMessages = query(colectionRef);
  const [plots, setPlots] = useState();
  const addressTo = "0x334F7ECa5db95a427f7296A3B55390Ac80F04B02";
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const startPayment = async ({ setError, setTxs, ether, addr }) => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);
      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether),
      });
      console.log({ ether, addr });
      console.log("tx", tx);
      setTxs([tx]);
    } catch (err) {
      setError(err.message);
    }
  };

  async function handleSubmit(x, y, id, price) {
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: "0.1",
      addr: addressTo,
    });
    const building = doc(database, "Bilds", id);
    updateDoc(building, {
      price: 0,
    });
    console.log(x, y, id);
  }

  const data = () => {
    onSnapshot(orderedMessages, (data) => {
      setPlots(
        data.docs.map((item) => {
          return item.data();
        })
      );
    });
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      {" "}
      {plots &&
        map == "Main" &&
        plots.map((plot, id) =>
          plot.price > 0 ? (
            <button
              className="flex space-x-1  w-40 px-2 h-16 justify-around items-center absolute bg-white/60 rounded-3xl shadow-xl shadow-sky-100 font-mono"
              onClick={() =>
                handleSubmit(plot.x, plot.y, plot.address, plot.price)
              }
              key={id}
              style={{
                left: plot.x,
                top: plot.y,
              }}
            >
              <span>Build </span>
              <img src="polygon.svg" className="h-5" />
              <span>{plot.price}</span>
            </button>
          ) : (
            <img
              key={id}
              src={`${plot.image}`}
              className="absolute"
              style={{
                left: plot.x,
                top: plot.y,
              }}
            />
          )
        )}
    </div>
  );
}

export default Buldings;
