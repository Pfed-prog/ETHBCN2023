import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover bg-center bg-[url('/XDC.png')]">
        <div className="mx-auto max-w-2xl">
          <div className="xl:pb-32 pb-10 text-center">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-48">
              <div className="sm:text-center lg:text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-100 to-sky-500 ">
                    Visage Finance
                  </span>{" "}
                </h1>
                <p className="mt-3 font-bold text-base text-white text-center sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg  md:text-xl lg:mx-0">
                  <strong>
                    Welcome to Visage Finance, where your personalized DeFi
                    journey on the XDC network begins.
                  </strong>
                </p>

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center ">
                  <div className="rounded-md shadow">
                    <Link
                      href="/pool"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Pool
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/exchange"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-500 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Exchange
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="isolate bg-gradient-to-tl">
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-5 pb-32 mt-4 sm:pb-40">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Personalized{" "}
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 ">
                    DeFi Experience{" "}
                  </span>
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-900 sm:text-center">
                  <strong>
                    With Visage Finance, you're not just another wallet address.
                    Our platform lets you connect your XDC wallet to your ENS,
                    allowing you to send and receive assets using your ENS
                    handle with XDC efficiency.
                  </strong>
                </p>

                <div className="mt-1 relative overflow-hidden  flex items-center justify-center">
                  <Image
                    alt=""
                    src="/photo1.jpg"
                    width="340"
                    height="340"
                    className="justify-center flex items-center"
                  />
                </div>

                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-center sm:text-5xl">
                  <strong>Secure Environment</strong>
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-900 sm:text-center">
                  <strong>
                    We value security and trust in the DeFi space. Visage
                    Finance provides the ability to synchronize user reputation
                    between the XDC and Ethereum networks. This not only
                    promotes a safer DeFi experience, but it also increases
                    trust and confidence among users and stakeholders within the
                    ecosystem.
                  </strong>
                </p>

                <div className="mt-1 relative overflow-hidden flex items-center justify-center">
                  <Image
                    alt=""
                    src="/Logo.png"
                    width="340"
                    height="340"
                    className="justify-center flex items-center"
                  />
                </div>

                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-center sm:text-5xl">
                  <strong>Join the Future of DeFi</strong>
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-900 sm:text-center">
                  <strong>
                    Join Visage Finance and embark on a personalized DeFi
                    journey. Send, receive, and manage your assets in a way
                    that's uniquely yours. Because in the world of DeFi, we
                    believe that you should be more than just a wallet address.
                    With Visage Finance, DeFi has a human face.
                  </strong>
                </p>

                <div className="mt-6">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-5xl">
                    <strong>Pool</strong>
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-black sm:text-center">
                    <strong>What Is an</strong>
                    <span className="font-extrabold  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 sm:text-center">
                      {" "}
                      Automated Market Maker?
                    </span>
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-900 sm:text-center">
                    <strong>
                      Automated market makers incentivize users to become
                      liquidity providers in exchange for a share of transaction
                      fees and free tokens.
                    </strong>
                  </p>

                  <div className="mt-3 relative overflow-hidden flex items-center justify-center">
                    <Image
                      alt=""
                      src="/photo5.jpg"
                      width="350"
                      height="350"
                      className="justify-center flex items-center"
                      allowFullScreen
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-x-4 justify-center">
                    <div className=" sm:mb-8 sm:flex sm:justify-center">
                      <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 bg-gradient-to-br from-pink-400 to-red-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        <span className="text-gray-900 ">
                          <Link
                            href="/pool"
                            className="font-semibold  text-white"
                          >
                            View our pool
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-5xl">
                    Token Exchange
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-black sm:text-center">
                    <strong>Do you want to</strong>
                    <span className="font-extrabold  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 sm:text-center">
                      {" "}
                      exchange cryptocurrency?
                    </span>
                  </p>

                  <div className="mt-4 relative overflow-hidden flex items-center justify-center">
                    <Image
                      alt=""
                      src="/photo3.jpg"
                      width="340"
                      height="350"
                      className="justify-center flex items-center"
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-x-4 justify-center">
                    <div className=" sm:mb-8 sm:flex sm:justify-center">
                      <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 bg-gradient-to-br from-pink-400 to-red-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        <span className="text-gray-900">
                          <Link
                            href="/exchange"
                            className="font-semibold text-white"
                          >
                            View our Exchange
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
