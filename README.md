# ARISPAY Faucet and Transfer DApp

The ARISPAY Faucet and Transfer Decentralized Application (DApp) enables users to acquire ARISPAY tokens via a faucet and transfer them to others seamlessly. This DApp is built on the Ethereum Sepolia testnet and integrates with MetaMask for user authentication and transaction signing.

## Live Application

Access the live DApp here: [ARISPAY Faucet and Transfer DApp](https://arispay-faucet-and-transfer-dapp.netlify.app/)

## Repository Structure

The project repository is organized into three main directories:

1. **arispay-token-and-faucet-contract**: Contains the smart contracts for the ARISPAY ERC20 token and the faucet mechanism.
2. **arispay-token-frontend**: Hosts the frontend code developed with React.js, facilitating user interaction with the DApp.
3. **arispay-token-transfer-contract**: Includes the smart contract responsible for handling token transfers between users.

## Smart Contracts

### ARISPAY Token Contract

The ARISPAY token is an ERC20-compliant token deployed on the Sepolia testnet. The contract defines the token's name, symbol, total supply, and standard ERC20 functionalities such as transfer and approval mechanisms.

### Faucet Contract

The faucet contract allows users to request a predefined amount of ARISPAY tokens. It includes mechanisms to prevent abuse, such as limiting the frequency of token requests per address.

### Transfer Contract

This contract manages the transfer of ARISPAY tokens between users. It ensures that transfers are executed securely and efficiently, adhering to the ERC20 standard.

## Frontend Application

The frontend is developed using React.js and provides a user-friendly interface for interacting with the ARISPAY token. Key features include:

- **Token Balance Display**: Shows the user's current ARISPAY token balance.
- **Faucet Interaction**: Allows users to request tokens from the faucet.
- **Token Transfer**: Enables users to send ARISPAY tokens to other addresses.

The application integrates with MetaMask for authentication and transaction signing, ensuring a secure and seamless user experience.

## Deployment

The smart contracts are deployed on the Ethereum Sepolia testnet. The frontend is hosted on Netlify and interacts with the deployed contracts via Web3.js.

## Getting Started

To run the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/prangancode/arispay-faucet-and-transfer-dapp.git
   ```

2. **Navigate to the frontend directory**:

   ```bash
   cd arispay-token-frontend
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`. Ensure you have MetaMask installed and connected to the Sepolia testnet.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the open-source community for providing tools and libraries that made this project possible.

---

For more details, refer to the [GitHub repository](https://github.com/prangancode/arispay-faucet-and-transfer-dapp).
