import { useAccount, useWalletClient } from "wagmi";
import React, { useState } from "react";
import { JsonRpcProvider } from "ethers";

import { getERC20 } from "@/utils/contracts";

const url = process.env.NEXT_PUBLIC_URL;

export default function Transact() {
  const [handle, setHandle] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");
  const [amount, setAmount] = useState(0);

  const provider = new JsonRpcProvider(url);
  // const { address } = useAccount();
  const { data: walletClient } = useWalletClient();

  const send = async () => {
    const resolvedAddress = await provider.resolveName(handle);
    const { abiERC20 } = getERC20();

    const token = new ethers.Contract(tokenAddress, abiERC20, walletClient);

    await token.transfer(resolvedAddress, expandTo18Decimals(amount), {
      gasLimit: 100000,
    });
  };

  return (
    <div className="overflow-hidden bg-gray-800 py-16 px-8 h-screen">
      <div className="relative mx-auto max-w-4xl">
        <div className="mx-auto flex items-center justify-center py-2 px-4">
          <div className="mt-5 flex">
            <div className="rounded-2xl mt-5 bg-gray-700 p-4">
              <div className="mt-4 sm:col-span-2">
                <label
                  htmlFor="number"
                  className="block text-center font-medium text-white"
                >
                  ENS Receiver
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label className="sr-only">Cryptocurrency</label>
                  </div>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    onChange={(event) => setHandle(event.target.value)}
                    className="block w-full rounded-md bg-white py-3 px-4 pl-25"
                    placeholder="vitalik.eth"
                  />
                </div>
              </div>
              <div className="mt-4 sm:col-span-2">
                <label
                  htmlFor="number"
                  className="block text-center font-medium text-white"
                >
                  Token Address
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label className="sr-only">Cryptocurrency</label>
                  </div>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    onChange={(event) => setTokenAddress(event.target.value)}
                    className="block w-full rounded-md bg-white py-3 px-4 pl-25"
                    placeholder="...."
                  />
                </div>
              </div>
              <div className="mt-4 sm:col-span-2">
                <label
                  htmlFor="number"
                  className="block text-center font-medium text-white"
                >
                  Token Amount
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label className="sr-only">Cryptocurrency</label>
                  </div>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    onChange={(event) => setAmount(Number(event.target.value))}
                    className="block w-full rounded-md bg-white py-3 px-4 pl-25"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="mt-9 flex lg:mt-2 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <a
                    onClick={() => send()}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700"
                  >
                    Send
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
