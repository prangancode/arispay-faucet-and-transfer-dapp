import { useEffect, useState } from "react";
import { ethers } from "ethers";
// import Header from "../layout/header/Header";
import ethTransaction from "../images/ethTransaction.png";
import TransactionHistory from "./TransactionHistory";
import ToastAlert from "../notification/alert/ToastAlert";

// ERC20 ABI (Application Binary Interface)
const ERC20_ABI = [
  "function transfer(address to, uint amount) public returns (bool)",
];

export default function TransactionERC() {
  const [provider, setProvider] = useState();

  useEffect(() => {
    if (window.ethereum) {
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(web3Provider);
    }
    // else {
    //   // alert(
    //   //   "MetaMask is required to use this application. Please install MetaMask."
    //   // );
    //   ToastAlert(
    //     "error",
    //     "MetaMask is required to use this application. Please install MetaMask."
    //   );
    // }
  }, []);

  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const sendTransaction = async () => {
    if (walletAddress === "") {
      ToastAlert("info", "Receiver's Wallet Address is empty!");
      return;
    } else if (amount === "") {
      ToastAlert("info", "Token Amount is empty!");
      return;
    }
    setLoading(true);
    console.log("walletAddress :>> ", walletAddress);
    console.log("amount :>> ", amount);

    try {
      const signer = await provider.getSigner();

      // Replace with your token's contract address
      // (EATL)
      // const tokenAddress = "0x280020Fdc5B692BD889544Ad66E3dC47786D0D26";

      // ARIS PAY
      const tokenAddress = "0x8E2fC77A7cc7A3d3A8Bb006aaE655475Fd171Ac0";

      // Create a contract instance
      const tokenContract = new ethers.Contract(
        tokenAddress,
        ERC20_ABI,
        signer
      );

      const transferToken = await tokenContract.transfer(
        walletAddress,
        ethers.parseUnits(amount, 18)
      );

      // Convert amount to the token's decimals (assuming 18 decimals)
      const tx = await transferToken.wait();

      // const tx = await signer.sendTransaction({
      //   to: walletAddress,
      //   value: ethers.parseUnits(amount, "ether"),
      // });
      console.log(tx);
      if (tx.status === 1) {
        setLoading(false);
        ToastAlert("success", "ARISPAY Token Transfer Successful!");
        // setTransactionData(resp.hash);
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
            src={ethTransaction}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
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
                Let’s transact ERC20 Standard ARISPAY Token
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-100">
                Experience a clean and straightforward interface that simplifies
                your crypto transactions.
              </p>
              <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                <div className="lg:flex-auto">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
                    <div>
                      <label
                        htmlFor="wallet_address"
                        className="block text-lg font-semibold leading-6 text-gray-100"
                      >
                        Enter Receiver's Wallet Address
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="wallet_address"
                          name="walletAddress"
                          type="text"
                          placeholder="Enter your wallet address (0x...)"
                          value={walletAddress}
                          onChange={(e) => setWalletAddress(e.target.value)}
                          className="block w-full rounded-lg border-0 px-3.5 py-2  shadow-md ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-indigo-200 opacity-70 placeholder:text-gray-700 text-gray-700 shadow-indigo-500/50 font-semibold"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-4">
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-lg font-semibold leading-6 text-gray-100"
                      >
                        Enter Token Amount
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="amount"
                          name="amount"
                          type="number"
                          placeholder="10 ARISPAY TOKEN"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="block w-full rounded-lg border-0 px-3.5 py-2 shadow-md ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-indigo-200 opacity-70 placeholder:text-gray-700 text-gray-700 shadow-indigo-500/50 font-semibold"
                        />
                      </div>
                    </div>
                    <div className="mt-8">
                      <button
                        disabled={loading || !provider}
                        onClick={sendTransaction}
                        type="submit"
                        className="block w-full rounded-lg bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 opacity-90 shadow-indigo-500/50 disabled:cursor-not-allowed disabled:bg-gray-500"
                      >
                        {loading
                          ? "Sending your tokens. Please wait..."
                          : "SEND TOKEN TO RECEIVER'S ADDRESS"}
                      </button>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-gray-500">
                    By submitting this form, I agree to the transfer policy of
                    ARISPAY Token (ERC20 Standard) .
                  </p>
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

      <TransactionHistory />
    </>
  );
}
