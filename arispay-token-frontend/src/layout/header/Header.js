import { useEffect, useState } from "react";
import ethIcon from "../../images/ethIcon.png";
import ARISPAYLogo from "../../images/ArisPayLogo.png";
import { ethers } from "ethers";
import { Link, useHistory } from "react-router-dom";
import cryptoIcon from "../../images/crypto.png";
import walletIcon from "../../images/wallet.png";
import ToastAlert from "../../notification/alert/ToastAlert";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Transfer token", href: "/transaction" },
  { name: "How it works?", href: "/how-it-works" },
  //   { name: "Docs", href: "#" },
  //   { name: "Company", href: "#" },
];

export default function Header() {
  const history = useHistory();
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState();

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* get provider */
        const provider = new ethers.BrowserProvider(window.ethereum);
        /* get accounts */
        const accounts = await provider.send("eth_requestAccounts", []);
        /* get signer */
        setSigner(await provider.getSigner());

        /* set active wallet address */
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
      ToastAlert("error", "Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* get provider */
        const provider = new ethers.BrowserProvider(window.ethereum);

        /* get accounts */
        const accounts = await provider.send("eth_accounts", []);
        if (accounts.length > 0) {
          /* get signer */
          setSigner(await provider.getSigner());
          /* set active wallet address */
          setWalletAddress(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect Wallet button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        localStorage.setItem("wallet_address", walletAddress);
        window.location.reload();
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  useEffect(() => {
    localStorage.setItem("wallet_address", walletAddress);
    localStorage.setItem("signer", signer);
  }, [walletAddress]);

  const handleTokenRedirect = () => {
    history.push("/token-request");
  };

  return (
    <header className="bg-indigo-900">
      <nav aria-label="Top" className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-2 lg:border-none">
          <div className="flex items-center">
            <div className="text-white font-bold">ARISPAY TOKEN</div>
            <a href="#">
              <span className="sr-only">ARISPAY</span>
              <img
                alt=""
                src={ARISPAYLogo}
                className="h-16 object-contain w-auto"
              />
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4 flex flex-row items-center">
            <div className="">
              <button
                onClick={handleTokenRedirect}
                // to="/token-request"
                className=" rounded-md border border-transparent bg-indigo-500 px-2 py-2  text-white hover:bg-opacity-75 font-semibold flex flex-row items-center"
              >
                <span className="mr-2 text-sm">GET ARISPAY TOKEN </span>{" "}
                <img
                  src={cryptoIcon}
                  alt=""
                  className="h-6 w-auto animate-spin transition-transform"
                />
              </button>
            </div>

            <button
              onClick={connectWallet}
              className="rounded-md border border-transparent bg-white px-2 py-2  font-semibold text-indigo-600 hover:bg-indigo-50 flex flex-row items-center"
            >
              {walletAddress && walletAddress.length > 0 && (
                <img src={walletIcon} alt="" className="h-6 w-auto mr-2" />
              )}
              <span className="is-link has-text-weight-bold text-sm">
                {walletAddress && walletAddress.length > 0
                  ? `CONNECTED : ${walletAddress.substring(
                      0,
                      6
                    )}...${walletAddress.substring(38)}`
                  : "CONNECT WALLET"}
              </span>
            </button>

            <div className="">
              <button className=" rounded-md border border-transparent bg-purple-400 px-3 py-2  text-white hover:bg-opacity-75 font-semibold flex flex-row items-center bg-opacity-75">
                <span className=" text-sm">SIGN IN</span>{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
