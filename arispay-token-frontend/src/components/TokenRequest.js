import React, { useEffect, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { ethers } from "ethers";
import Header from "../layout/header/Header";
import ethTokenRequest from "../images/ethTokenReqBg.png";
import { AuthUser } from "../utils/AuthUser";
import FaucetContract from "../ethereum/Faucet";
import ToastAlert from "../notification/alert/ToastAlert";

const TokenRequest = () => {
  const [provider, setProvider] = useState(null);
  const [transactionData, setTransactionData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(web3Provider);
    }
    // else {
    //   alert(
    //     "MetaMask is required to use this application. Please install MetaMask."
    //   );
    // }
  }, []);

  const getARISPAYHandler = async () => {
    if (!AuthUser.getUserWalletAddress()) {
      ToastAlert("warning", "Connect your wallet first!");
      return;
    }
    setLoading(true);
    setTransactionData("");
    try {
      const signer = await provider.getSigner();
      const faucetContractProvider = FaucetContract(provider);
      const fcContractWithSigner = faucetContractProvider.connect(signer);
      const resp = await fcContractWithSigner.requestTokens();
      const receipt = await resp.wait();

      if (receipt.status === 1) {
        setLoading(false);
        ToastAlert("success", "Operation succeeded - enjoy your tokens!");
        setTransactionData(resp.hash);
      } else {
        setLoading(false);
        ToastAlert("error", "Transaction failed after waiting for receipt");
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
      if (err.code === "ACTION_REJECTED") {
        ToastAlert("warn", "Transaction was rejected by the user.");
      } else if (
        err.reason ===
        "Insufficient time elapsed since last withdrawal - try again later."
      ) {
        ToastAlert(
          "error",
          "Insufficient time elapsed since last withdrawal - try again later."
        );
      } else if (err.receipt?.status === 0) {
        ToastAlert("error", "Transaction failed during request");
      }
    }
  };

  return (
    <>
      {/* <Header /> */}
      <div className="bg-gray-900">
        <div className="relative isolate overflow-hidden pt-14">
          <img
            alt=""
            src={ethTokenRequest}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-xl lg:max-w-4xl">
              <h2 className="text-5xl font-bold tracking-tight text-white">
                ARISPAY Token delivered straight to your wallet address.
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-100">
                Fast and reliable ERC20 Standard Token. You will receive 50
                ARISPAY/request completely free.
              </p>
              <div className="rounded-md bg-yellow-50 p-4 mt-8 mx-auto max-w-6xl opacity-70">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <InformationCircleIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-400"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">
                      Token Address : 0x8E2fC77A7cc7A3d3A8Bb006aaE655475Fd171Ac0
                    </h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        Import ARISPAY Token to your Crypto Wallet form this
                        above token contract Address.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                <div className="lg:flex-auto">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
                    <div>
                      <label
                        htmlFor="wallet_address"
                        className="block text-lg font-semibold leading-6 text-gray-100"
                      >
                        My Connected Wallet Address
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="wallet_address"
                          name="walletAddress"
                          type="text"
                          placeholder="Enter your wallet address (0x...)"
                          defaultValue={AuthUser.getUserWalletAddress()}
                          disabled={true}
                          className="block w-full rounded-md border-0 px-3.5 py-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6  placeholder:leading-3 bg-indigo-200 opacity-70 font-semibold shadow-lg shadow-purple-500/50"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <button
                        disabled={loading}
                        onClick={getARISPAYHandler}
                        type="submit"
                        className="block w-full rounded-lg bg-cyan-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white  hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 disabled:bg-gray-400 disabled:cursor-not-allowed opacity-90 shadow-md shadow-emerald-500/40"
                      >
                        {loading
                          ? "Processing your tokens. Please wait..."
                          : "GET 50 ARISPAY TOKENS"}
                      </button>
                    </div>

                    {transactionData && (
                      <>
                        <div className="rounded-md bg-blue-50 p-4 mt-10">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <InformationCircleIcon
                                aria-hidden="true"
                                className="h-5 w-5 text-blue-400"
                              />
                            </div>
                            <div className="ml-3 flex-1 md:flex md:justify-between">
                              <p className="text-sm text-blue-700 font-semibold">
                                Transaction Hash :{" "}
                                <span className="font-bold">
                                  {transactionData}
                                </span>
                              </p>
                              <p className="mt-3 text-sm md:ml-6 md:mt-0">
                                <a
                                  href={`https://sepolia.etherscan.io/tx/${transactionData}`}
                                  target="_blank"
                                  className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
                                >
                                  Details
                                  <span aria-hidden="true"> &rarr;</span>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenRequest;
