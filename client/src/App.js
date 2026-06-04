import React, { useState } from "react";
import { ethers } from "ethers";
import contractData from "./Identity.json";

const contractAddress = "0x29EfDc621e7df6a363571879C52684d6C177bFcA";
const abi = contractData.abi;

function App() {
  const [account, setAccount] = useState("");
  const [inputData, setInputData] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Install MetaMask");
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
      setStatus("Wallet Connected ✅");
    } catch (err) {
      setStatus(err.message);
    }
  };

  const getContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    return new ethers.Contract(contractAddress, abi, signer);
  };

  const registerIdentity = async () => {
    try {
      if (!inputData) return alert("Enter data");

      setLoading(true);
      setStatus("Processing...");

      const contract = await getContract();

      const tx = await contract.registerIdentity(inputData);
      await tx.wait();

      setStatus("Identity Registered ✅");
      setInputData("");
    } catch (err) {
      setStatus(err.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyIdentity = async () => {
    try {
      if (!inputData) return alert("Enter data");

      setLoading(true);

      const contract = await getContract();
      const result = await contract.verifyIdentity(account, inputData);

      setStatus(result ? "✅ Verified" : "❌ Not Found");
    } catch (err) {
      setStatus(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-96 text-white border border-white/20">

        <h1 className="text-2xl font-bold text-center mb-6">
          🔐 Identity DApp
        </h1>

        <button
          onClick={connectWallet}
          className="w-full bg-green-500 hover:bg-green-600 py-2 rounded-lg transition"
        >
          {account ? "Connected ✅" : "Connect Wallet"}
        </button>

        {account && (
          <p className="text-xs mt-2 break-all text-gray-300">
            {account}
          </p>
        )}

        <input
          type="text"
          placeholder="Enter identity data..."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          className="w-full mt-4 p-2 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none"
        />

        <div className="flex gap-3 mt-4">
          <button
            onClick={registerIdentity}
            disabled={loading}
            className="flex-1 bg-blue-500 hover:bg-blue-600 py-2 rounded-lg transition"
          >
            Register
          </button>

          <button
            onClick={verifyIdentity}
            disabled={loading}
            className="flex-1 bg-purple-500 hover:bg-purple-600 py-2 rounded-lg transition"
          >
            Verify
          </button>
        </div>

        {loading && (
          <p className="text-yellow-300 text-center mt-4">
            ⏳ Processing...
          </p>
        )}

        {status && (
          <p className="text-center mt-4 font-semibold">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;