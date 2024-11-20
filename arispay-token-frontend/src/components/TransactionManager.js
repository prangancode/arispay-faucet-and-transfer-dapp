import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import TransactionManagerJson from "../utils/TransactionManager/TransactionManager.json";
import MyEtherscanProvider from "../utils/MyEtherscanProvider";
import Header from "../layout/header/Header";

const transactionManagerAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

const TransactionManager = () => {
  const [account, setAccount] = useState(null);
  const [Signer, setSigner] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (window.ethereum) {
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(web3Provider);
    } else {
      alert(
        "MetaMask is required to use this application. Please install MetaMask."
      );
    }
  }, []);

  useEffect(() => {
    window.ethereum.on("accountsChanged", () => {
      window.location.reload();
    });
  }, []);

  const connectWallet = async () => {
    if (provider) {
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);
      const signer = await provider.getSigner();
      setSigner(signer);
      console.log("signer", signer);
      const transactionManagerContract = new ethers.Contract(
        transactionManagerAddress,
        TransactionManagerJson.abi,
        signer
      );
      setContract(transactionManagerContract);
    }
  };

  console.log("contract :>> ", contract);
  console.log("account :>> ", account);

  const sendTransaction = async () => {
    if (contract && account) {
      // try {
      //   console.log("Receiver:", receiver); // Debugging receiver address
      //   console.log("Amount (ETH):", amount); // Debugging amount

      //   // Check if the receiver address is valid
      //   if (!ethers.isAddress(receiver)) {
      //     alert("Invalid receiver address");
      //     return;
      //   }

      //   // Check if the receiver address is not the same as the sender's address
      //   if (receiver.toLowerCase() === account.toLowerCase()) {
      //     alert("Receiver address cannot be the same as sender address");
      //     return;
      //   }

      //   const tx = await contract.sendTransaction(receiver, {
      //     value: ethers.parseEther(amount),
      //   });

      //   await tx.wait();
      //   alert("Transaction successful");
      //   loadTransactions();
      // } catch (error) {
      //   console.error("Error sending transaction:", error);
      //   alert("Error sending transaction: " + error.message);
      // }
      const tx = await Signer.sendTransaction({
        to: receiver,
        value: ethers.parseUnits(amount, "ether"),
      });
      console.log(tx);
    }
  };

  const loadTransactions = async () => {
    // if (contract && account) {
    //   console.log("loading transactions");
    //   try {
    //     // Convert the account address to a checksummed address
    //     const checksummedAccount = ethers.getAddress(account);
    //     console.log("account loaded", checksummedAccount);

    //     const contractWithSigner = contract.connect(Signer);

    //     // Fetch transactions using the checksummed account address
    //     const txs = await contractWithSigner.getTransactions(
    //       checksummedAccount
    //     );
    //     console.log("txs :>> ", txs);

    //     if (Array.isArray(txs) && txs.length > 0) {
    //       setTransactions(txs);
    //     } else if (Array.isArray(txs) && txs.length === 0) {
    //       console.log("No transactions found.");
    //       setTransactions([]);
    //     } else {
    //       console.error("Unexpected response format:", txs);
    //     }
    //   } catch (error) {
    //     console.error("Error loading transactions:", error);
    //     alert("Error loading transactions: " + error.message);
    //   }
    // }

    const myEtherScanInstance = new MyEtherscanProvider(
      "sepolia",
      "3F3C3WXW84FFPQNJ1AJBSSS7T48AXIFS1I"
    );
    myEtherScanInstance
      .getHistory(account)
      .then(setTransactions)
      .catch(console.error);
  };

  console.log("transactions :>> ", transactions);
  return (
    <div className="App">
      <Header />
      <h1>Web3 Transaction Management</h1>
      {!account ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <div>
          <div>
            <input
              type="text"
              placeholder="Receiver Address"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
            />
            <input
              type="text"
              placeholder="Amount (ETH)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={sendTransaction}>Send Transaction</button>
          </div>
          <div>
            <h2>Transactions</h2>
            <button onClick={loadTransactions}>Load Transactions</button>
            <ul>
              {transactions?.map((tx, index) => (
                <li key={index}>
                  {/* {tx.from} sent {ethers.formatEther(tx.amount)} ETH to{" "} */}
                  {tx.from} sent {tx.value} ETH to {tx.to} at{" "}
                  {/* {new Date(tx.timestamp * 1000).toLocaleString()} */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionManager;
