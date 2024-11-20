import { useState } from "react";
import { AuthUser } from "../utils/AuthUser";
import MyEtherscanProvider from "../utils/MyEtherscanProvider";
import { ethers } from "ethers";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import ToastAlert from "../notification/alert/ToastAlert";

const statuses = {
  1: "text-green-400 bg-green-400/10",
  0: "text-rose-400 bg-rose-400/10",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const viewTransactions = async () => {
    if (!AuthUser.getUserWalletAddress()) {
      ToastAlert("warning", "Connect your wallet first!");
      return;
    }
    try {
      setLoading(true);

      const myEtherScanInstance = new MyEtherscanProvider(
        "sepolia",
        "3F3C3WXW84FFPQNJ1AJBSSS7T48AXIFS1I"
      );

      const transactions = await myEtherScanInstance.getHistory(
        AuthUser.getUserWalletAddress()
      );

      setTransactions(transactions);
    } catch (error) {
      setLoading(false);
      // console.error(error.message);
      ToastAlert("error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-800 py-10">
      <div className="flex flex-row justify-between items-center">
        <h2 className="px-4 text-lg font-semibold leading-7 text-white sm:px-6 lg:px-8">
          Transactions List for the connected wallet
        </h2>
        <button
          onClick={viewTransactions}
          type="button"
          className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20 sm:px-6 lg:px-8 mr-4"
        >
          {loading
            ? "Loading Transactions..."
            : transactions.length > 0
            ? "Reload Transactions"
            : "View Transactions"}
        </button>
      </div>

      {transactions && transactions.length > 0 ? (
        <table className="mt-6 w-full whitespace-nowrap text-left">
          <colgroup>
            <col className="w-full sm:w-2/12" />
            <col className="lg:w-2/12" />
            <col className="lg:w-2/12" />
            <col className="lg:w-1/12" />
            <col className="lg:w-1/12" />
            <col className="lg:w-1/12" />
            <col className="lg:w-1/12" />
            <col className="lg:w-1/12" />
          </colgroup>
          <thead className="border-b border-white/10 text-sm leading-6 text-white">
            <tr>
              <th
                scope="col"
                className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
              >
                Hash
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
              >
                From
              </th>
              <th
                scope="col"
                className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20"
              >
                To
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
              >
                Value
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
              >
                Txreceipt_Status
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
              >
                Gas Used
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
              >
                Block No
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
              >
                Timestamp
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {transactions &&
              transactions.length !== 0 &&
              transactions
                .sort((a, b) => b.timeStamp - a.timeStamp)
                .map((transaction) => (
                  <tr key={transaction.hash}>
                    <a
                      href={`https://sepolia.etherscan.io/tx/${transaction.hash}`}
                      target="_blank"
                    >
                      <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                        <div className="flex items-center gap-x-4">
                          <div className="truncate text-sm font-medium leading-6 text-white underline underline-offset-4">
                            {transaction.hash &&
                              transaction.hash.substring(0, 4)}
                            ...{transaction.hash.substring(56)}
                          </div>
                        </div>
                      </td>
                    </a>
                    <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                      {transaction.from && transaction.from.substring(0, 6)}...
                      {transaction.from.substring(34)}
                    </td>
                    <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                      {transaction.to && transaction.to.substring(0, 6)}...
                      {transaction.to.substring(34)}
                    </td>
                    <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                      <div className="flex gap-x-3">
                        <div className="font-mono text-sm leading-6 text-gray-400">
                          {/* {ethers.formatEther(transaction.value)} */}
                          {Number(
                            ethers.formatEther(transaction.value)
                          ).toFixed(8)}
                        </div>
                        <div className="rounded-md bg-gray-700/40 px-1 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-white/10">
                          ETH
                        </div>
                      </div>
                    </td>
                    <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                      <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                        {/* <time dateTime={item.dateTime} className="text-gray-400 sm:hidden">
                      {item.date}
                    </time> */}
                        <div
                          className={classNames(
                            statuses[transaction.txreceipt_status],
                            "flex-none rounded-full p-1"
                          )}
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        </div>
                        <div className="hidden text-white sm:block">
                          {transaction.txreceipt_status &&
                          transaction.txreceipt_status === "0"
                            ? "Failed"
                            : "Success"}
                        </div>
                      </div>
                    </td>
                    <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                      {transaction.gasUsed}
                    </td>
                    <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                      {transaction.blockNumber}
                    </td>
                    <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                      {new Intl.DateTimeFormat("en-CA", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })
                        .format(new Date(transaction.timeStamp * 1000))
                        .replace(",", "/")
                        .replace(" ", "")}
                    </td>
                  </tr>
                ))}
            {transactions?.length === 0 && (
              <>
                <tr>
                  <td
                    colSpan="8"
                    className="text-center py-6 text-lg font-medium text-gray-400"
                  >
                    NO DATA FOUND
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      ) : (
        <>
          <div className="rounded-md bg-white/10 hover:bg-white/20 p-4 mx-auto max-w-6xl mt-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <InformationCircleIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-blue-400"
                />
              </div>
              <div className="ml-3 flex-1 md:flex md:justify-between">
                <p className="text-sm text-white font-medium">
                  Please click on the above 'View Transactions' Button to see
                  the Transactions History Data of your connected wallet
                  account.
                </p>
                {/* <p className="mt-3 text-sm md:ml-6 md:mt-0">
                <a href="#" className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
                  Details
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </p> */}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
