import { useAccount } from "wagmi";
import React, { useState, Fragment } from "react";
import { JsonRpcProvider } from "ethers";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Profile() {
  const [handle, setHandle] = useState("vitalik.eth");
  const url = process.env.NEXT_PUBLIC_URL;

  const provider = new JsonRpcProvider(url);

  const [show, setShow] = useState(false);

  const { address } = useAccount();

  const check = async () => {
    var resolvedAddress = await provider.resolveName(handle);

    console.log(resolvedAddress);
    if (address === resolvedAddress) {
      setShow(true);
    }
  };

  return (
    <>
      <div className="overflow-hidden bg-gray-800 py-16 px-8 h-screen">
        <div className="relative mx-auto max-w-4xl">
          <div className="mx-auto flex items-center justify-center py-2 px-4">
            <div className="mt-5 flex">
              <div className="rounded-2xl mt-5  bg-gray-700 p-4">
                <div className="mt-4 sm:col-span-2">
                  <label
                    htmlFor="number"
                    className="block text-center font-medium text-white"
                  >
                    Enter your ENS Handle
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
                      onClick={() => check()}
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700"
                    >
                      Check
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      className="h-6 w-6 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">
                      Successful Connection!
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      This is your ENS!
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
