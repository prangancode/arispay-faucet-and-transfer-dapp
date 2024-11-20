import React from "react";
import howitworks from "../images/howitworks.png";
import {
  CheckCircleIcon,
} from "@heroicons/react/20/solid";

const HowItWorks = () => {
  return (
    <div className="sm:py-20 bg-gradient-to-r from-violet-100 to-violet-50">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="px-6 lg:px-8">
          <div className="mx-auto text-base leading-7 text-gray-700">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Introducing
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              New ARISPAY Token Launch & Crypto Token Transaction Management
              DApp
            </h1>
            <h1 className="mt-7 text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
              Introduction
            </h1>
            <p className="mt-6 text-xl leading-8 text-justify">
              In today's rapidly evolving technological landscape, blockchain
              technology is at the forefront of innovation, offering
              transformative solutions across various industries. Recognizing
              this potential, Ethics Advance Technology Limited (EATL) has
              embarked on an ambitious journey to integrate blockchain into our
              business operations. Our latest endeavor is the development of a
              decentralized application (DApp) dedicated to managing crypto
              token transactions, marking our entry into the blockchain space.
              This blog post provides an in-depth look at the "New ARISPAY Token
              Launch & Transaction Management DApp," which revolves around our
              custom ERC20 token, ARISPAY.
            </p>

            <h1 className="mt-7 text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
              Project Overview
            </h1>
            <p className="mt-6 text-xl leading-8 text-justify">
              The creation of the "New ARISPAY Token Launch & Transaction
              Management DApp" was a multifaceted project that spanned several
              critical phases, from research and planning to the final
              deployment. Each phase played a vital role in ensuring the
              successful launch of our DApp, leveraging cutting-edge blockchain
              technologies and development tools.
            </p>

            <h1 className="mt-7 text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
              Phase 1: Research and Planning
            </h1>
            <p className="mt-6 text-xl leading-8 text-justify">
              The foundation of any successful project lies in meticulous
              research and strategic planning. Our initial phase focused on
              exploring the most suitable blockchain platform for our DApp.
              After thorough consideration, we selected the Ethereum blockchain
              due to its robust ecosystem, extensive developer community, and
              widespread adoption. Ethereum's well-established infrastructure,
              particularly the ERC20 token standard, made it the ideal choice
              for our token-based application. <br /> <br />
              To ensure a secure and risk-free development environment, we chose
              the Sepolia Ethereum Testnet for testing. The Sepolia Testnet
              provided a controlled environment where our developers could
              experiment with the smart contracts and DApp functionalities
              without risking real assets. This phase also included the planning
              of the DApp's architecture, user interfaces, and key features,
              laying the groundwork for the subsequent stages.
            </p>

            <h1 className="mt-7 text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
              Phase 2: ARISPAY Token Creation
            </h1>

            <h1 className="mt-7 text-lg font-semibold tracking-tight text-gray-900 sm:text-lg">
              Token Specifications
            </h1>

            <p className="mt-6 text-xl leading-8 text-justify">
              The centerpiece of our DApp is the ARISPAY Token, which adheres to
              the ERC20 standard. Here are the key specifications of the ARISPAY
              Token:
            </p>

            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Token Name.
                  </strong>{" "}
                  ARISPAY Token
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Token Symbol.
                  </strong>{" "}
                  ARISPAY
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Initial Supply.
                  </strong>{" "}
                  70 Million ARISPAY
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Maximum Supply (Cap).
                  </strong>{" "}
                  100 Million ARISPAY
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Miner Reward.
                  </strong>{" "}
                  50 ARISPAY per transaction
                </span>
              </li>
            </ul>

            <h1 className="mt-7 text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
              Development Process
            </h1>

            <p className="mt-6 text-xl leading-8 text-justify">
              Creating the ARISPAY Token was a critical step that required
              precise coding and rigorous testing to ensure its functionality
              and security.
            </p>

            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    Smart Contract Development:
                  </strong>{" "}
                  The development of the ARISPAY Token smart contract was
                  executed using Solidity, a high-level programming language
                  tailored for Ethereum. We utilized the Remix IDE, an online
                  platform that offers powerful tools for writing, testing, and
                  debugging Solidity code. The ERC20 standard provided a solid
                  foundation, outlining essential functions such as total
                  supply, balance queries, and token transfers.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    Deployment:
                  </strong>{" "}
                  Following the successful testing of the smart contract within
                  the Remix IDE, we proceeded to deploy it on the Sepolia
                  Ethereum Testnet. Deployment is a crucial step that brings the
                  smart contract to life on the blockchain, making it accessible
                  and operational. To facilitate this process, we configured
                  MetaMask, a popular Ethereum wallet, enabling seamless
                  deployment and interaction with the blockchain.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    Token Installation:
                  </strong>{" "}
                  Once deployed, the ARISPAY Token was installed in the owner's
                  MetaMask account, marking the successful creation and
                  initialization of our custom token. This installation ensured
                  that the ARISPAY Token was ready for use within our DApp and
                  could be easily accessed by users.
                </span>
              </li>
            </ul>

            <h1 className="mt-7 text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
              Phase 3: Faucet Development
            </h1>

            <p className="mt-6 text-xl leading-8 text-justify">
              To encourage participation and facilitate the distribution of
              ARISPAY Tokens, we developed a faucet—a tool that allows users to
              request and receive tokens freely. The faucet serves as a reserve
              from which ARISPAY Tokens can be distributed to users, making it
              an essential component of our DApp.
            </p>

            <h1 className="mt-7 text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
              Development Process
            </h1>

            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    Smart Contract for Faucet:
                  </strong>{" "}
                  The faucet's functionality was encapsulated in a dedicated
                  smart contract. This contract managed the storage and
                  distribution of ARISPAY Tokens, ensuring that users could
                  request tokens securely and efficiently. For this phase, we
                  employed Hardhat, a versatile development environment
                  specifically designed for Ethereum. Hardhat enabled us to
                  compile, deploy, and test the faucet smart contract on the
                  Sepolia Testnet.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    Deployment and Funding:
                  </strong>{" "}
                  After successfully deploying the faucet contract, the owner's
                  account funded it with ARISPAY Tokens. This funding process
                  involved transferring a portion of the token supply to the
                  faucet, ensuring that it was ready to distribute tokens to
                  users upon request.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    Future Development:
                  </strong>{" "}
                  Although the faucet is fully operational, we plan to enhance
                  its functionality by developing a user-friendly interface.
                  This future update will allow users to claim tokens directly
                  through the DApp, streamlining the process and improving the
                  overall user experience.
                </span>
              </li>
            </ul>

            <h1 className="mt-7 text-xl font-semibold tracking-tight text-gray-900 sm:text-xl ">
              Phase 4: DApp UI Development
            </h1>

            <p className="mt-6 text-xl leading-8 text-justify">
              The user interface (UI) of the DApp is a critical aspect that
              defines how users interact with the ARISPAY Token and manage their
              transactions. Our goal was to create an intuitive and seamless UI
              that caters to both novice and experienced users.
            </p>

            <h1 className="mt-7 text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
              Faucet UI
            </h1>

            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    Functionality:
                  </strong>{" "}
                  The Faucet UI allows users to request 50 ARISPAY Tokens per
                  transaction. This feature is particularly useful for users who
                  are new to the ARISPAY Token ecosystem and want to explore its
                  functionalities without any financial commitment.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    Process:
                  </strong>{" "}
                  Upon connecting their MetaMask wallet, users can easily
                  request tokens by clicking the "Get Token" button. The tokens
                  are then transferred directly from the faucet to the user's
                  wallet.
                </span>
              </li>
            </ul>

            <h1 className="mt-7 text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
              Token Transfer Interface
            </h1>

            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    Functionality:
                  </strong>{" "}
                  The Token Transfer Interface is designed to facilitate the
                  transfer of ARISPAY Tokens to any valid Ethereum wallet
                  address. This feature is essential for users who want to send
                  tokens to others or manage their holdings across different
                  accounts.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    Additional Features:
                  </strong>{" "}
                  The interface also displays the transaction history of the
                  connected wallet, providing users with a comprehensive
                  overview of their ARISPAY Token activities. This transparency
                  is crucial for building trust and ensuring that users can
                  track their transactions easily.
                </span>
              </li>
            </ul>

            <h1 className="mt-7 text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
              Wallet Connection
            </h1>

            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    Functionality:
                  </strong>{" "}
                  A "Connect Wallet" button is integrated into the DApp,
                  allowing users to synchronize their MetaMask wallet with the
                  application. This connection is essential for enabling
                  seamless transactions and ensuring that the DApp can interact
                  with the user's wallet securely.
                </span>
              </li>
            </ul>

            <h1 className="mt-7 text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
              Tools and Technologies
            </h1>

            <p className="mt-6 text-xl leading-8 text-justify">
              The successful development of the "New ARISPAY Token Launch &
              Transaction Management DApp" was made possible by the use of
              several cutting-edge tools and technologies. Each tool played a
              vital role in different aspects of the project:
            </p>

            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    MetaMask:
                  </strong>{" "}
                  A browser-based wallet that allows users to store and manage
                  Ethereum and ERC20 tokens. MetaMask was essential for
                  deploying smart contracts and facilitating user interactions
                  with the DApp.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    Hardhat:
                  </strong>{" "}
                  A comprehensive development environment for Ethereum that
                  supports compiling, deploying, testing, and debugging smart
                  contracts. Hardhat was instrumental in developing and
                  deploying the faucet smart contract.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    React:
                  </strong>{" "}
                  A powerful JavaScript library used for building dynamic and
                  responsive user interfaces. React was the foundation of the
                  DApp's UI, enabling us to create a smooth and intuitive user
                  experience.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    ethers.js:
                  </strong>{" "}
                  A lightweight library for interacting with the Ethereum
                  blockchain and its ecosystem. Ethers.js provided the necessary
                  tools for connecting the DApp to the blockchain and managing
                  token transactions.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    Solidity:
                  </strong>{" "}
                  The programming language used to write the smart contracts for
                  the ARISPAY Token and faucet. Solidity's versatility and
                  robustness made it the ideal choice for our blockchain
                  development needs.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    Remix IDE:
                  </strong>{" "}
                  An online integrated development environment specifically
                  designed for Solidity smart contracts. Remix IDE facilitated
                  the writing, testing, and debugging of our smart contracts,
                  ensuring their reliability and security.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    VS Code:
                  </strong>{" "}
                  A popular source-code editor that provided a streamlined
                  development environment for writing and managing our project's
                  codebase.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span className="text-justify">
                  <strong className="font-semibold text-gray-900">
                    Sepolia Testnet:
                  </strong>{" "}
                  An Ethereum test network that offered a risk-free environment
                  for testing our smart contracts and DApp functionalities
                  before deployment on the mainnet.
                </span>
              </li>
            </ul>

            <h1 className="mt-7 text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
              Conclusion
            </h1>

            <p className="mt-6 text-xl leading-8 text-justify">
              The launch of the "New ARISPAY Token Launch & Transaction
              Management DApp" marks a significant milestone for Ethics Advance
              Technology Limited as we venture into the realm of blockchain
              technology. This fully functional decentralized application is
              designed to manage transactions with our custom ARISPAY Token,
              providing users with a secure, user-friendly platform to explore
              the potential of digital assets. <br /> <br />
              From the initial research and planning phase to the final
              deployment, every aspect of this project was carefully executed to
              ensure its success. Our DApp not only demonstrates our commitment
              to innovation but also sets the stage for future developments in
              the decentralized space. As we continue to explore the
              possibilities of blockchain technology, we are excited to build on
              this foundation and deliver even more groundbreaking solutions in
              the years to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
