import { useAccount, useWalletClient } from "wagmi";
import { Combobox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import React, { useState, Fragment } from "react";
import { JsonRpcProvider, ethers } from "ethers";

import { getERC20, classNames, expandTo18Decimals } from "@/utils/contracts";

const url = process.env.NEXT_PUBLIC_URL;

const tokens = [
  {
    id: 1,
    name: "Visage",
    address: "0x2fd323c74cBa5668a3404e4AB6Db9dB0bc9F89a9",
    imageUrl: "/TradeC0.jpg",
  },
  {
    id: 2,
    name: "VisageV2",
    address: "0xb7209552CDEE27dC0EBcdB713D4AbD3ce9dcB551",
    imageUrl: "/TradeC1.jpg",
  },
  {
    id: 3,
    name: "Dspyt",
    address: "0x1A70Fc7BbDA5442f4Afe2Db91D59584E873032eb",
    imageUrl: "/Dspyt.png",
  },
  {
    id: 4,
    name: "TestCoin",
    address: "0x95024031820Eb44D1e12509Cb63CF589A0fD559f",
    imageUrl: "/TradeCoin.png",
  },
];

export default function Transact() {
  const [query, setQuery] = useState("");
  const [handle, setHandle] = useState("");
  const [amount, setAmount] = useState(0);

  const [openTokenA, setOpenTokenA] = useState(false);
  const [tokenA, setTokenA] = useState(tokens[0]);

  const provider = new JsonRpcProvider(url);
  const { data: walletClient } = useWalletClient();

  const send = async () => {
    const resolvedAddress = await provider.resolveName(handle);
    console.log(resolvedAddress);
    const { abiERC20 } = getERC20();

    const token = new ethers.Contract(tokenA.address, abiERC20, walletClient);

    await token.transfer(resolvedAddress, expandTo18Decimals(amount), {
      gasLimit: 60000,
    });
  };

  const filteredTokens =
    query === ""
      ? tokens
      : tokens.filter((token) => {
          return token.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="overflow-hidden bg-gray-800 py-16 px-8 h-screen">
      <div className="relative mx-auto max-w-4xl">
        <div className="mx-auto flex items-center justify-center py-2 px-4">
          <div className="mt-5 flex">
            <div className="rounded-2xl mt-5 bg-gray-700 p-4">
              <div className="flex justify-center mt-2.5 items-center">
                <button
                  type="submit"
                  onClick={() => setOpenTokenA(true)}
                  className="relative inline-flex items-center justify-center right-2 rounded-md border border-transparent bg-white px-3 py-1.5 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                >
                  <img
                    className="h-6 w-6 rounded-full"
                    src={tokenA.imageUrl}
                    alt="tokenA"
                  />

                  <span className="ml-2">{tokenA.name}</span>
                  <svg
                    fill="#000000"
                    width="20px"
                    height="25px"
                    viewBox="-8.5 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>angle-down</title>{" "}
                      <path d="M7.28 20.040c-0.24 0-0.44-0.080-0.6-0.24l-6.44-6.44c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l5.84 5.84 5.84-5.84c0.32-0.32 0.84-0.32 1.2 0 0.32 0.32 0.32 0.84 0 1.2l-6.44 6.44c-0.16 0.16-0.4 0.24-0.6 0.24z"></path>{" "}
                    </g>
                  </svg>
                </button>

                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  onChange={(event) => setAmount(event.target.value)}
                  className="block rounded-md border-0 py-2  px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                  placeholder="0"
                />
              </div>

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

            {/* tokenA */}
            <Transition.Root show={openTokenA} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={setOpenTokenA}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      enterTo="opacity-100 translate-y-0 sm:scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                        <div>
                          <div className="mt-3 text-center sm:mt-5">
                            <Dialog.Title
                              as="h3"
                              className="text-base font-semibold  text-gray-900"
                            >
                              Tokens
                            </Dialog.Title>
                            <Combobox
                              as="div"
                              value={tokenA}
                              onChange={setTokenA}
                            >
                              <div className="relative mt-2">
                                <Combobox.Input
                                  className="rounded-md border-0 bg-white py-1.5 pl-2 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  onChange={(event) =>
                                    setQuery(event.target.value)
                                  }
                                  displayValue={(person) => person?.name}
                                />
                                <Combobox.Button className="absolute inset-y-0  pl-64 flex items-center rounded-r-md px-2 focus:outline-none">
                                  <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-900"
                                    aria-hidden="true"
                                  />
                                </Combobox.Button>

                                {filteredTokens.length > 0 && (
                                  <Combobox.Options className="relative z-10 mt-1 max-h-36  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {filteredTokens.map((person) => (
                                      <Combobox.Option
                                        key={person.id}
                                        value={person}
                                        className={({ active }) =>
                                          classNames(
                                            "relative cursor-default select-none py-2 pl-4 pr-12",
                                            active
                                              ? "bg-indigo-600 text-white"
                                              : "text-gray-900"
                                          )
                                        }
                                      >
                                        {({ active, selected }) => (
                                          <>
                                            <div className="flex items-center">
                                              <img
                                                src={person.imageUrl}
                                                alt=""
                                                className="h-6 w-6 flex-shrink-0  rounded-full"
                                              />
                                              <span
                                                className={classNames(
                                                  "ml-3 truncate  ",
                                                  selected && "font-semibold"
                                                )}
                                              >
                                                {person.name}
                                              </span>
                                            </div>

                                            {selected && (
                                              <span
                                                className={classNames(
                                                  "absolute inset-y-0 right-0 flex items-center pr-4",
                                                  active
                                                    ? "text-white"
                                                    : "text-indigo-600"
                                                )}
                                              >
                                                <CheckIcon
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            )}
                                          </>
                                        )}
                                      </Combobox.Option>
                                    ))}
                                  </Combobox.Options>
                                )}
                              </div>
                            </Combobox>
                          </div>
                        </div>
                        <div className="mt-5 sm:mt-6">
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={() => setOpenTokenA(false)}
                          >
                            Confirm
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
