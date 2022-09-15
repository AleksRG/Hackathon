import { React, useState } from "react";
import { ethers } from "ethers";
function Buy() {
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
  async function handleSubmit() {
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: "0.01",
      addr: addressTo,
    });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      {" "}
      <button onClick={handleSubmit} className="w-40 h-9 bg-lime-500">
        Buy
      </button>
    </div>
  );
}

export default Buy;
