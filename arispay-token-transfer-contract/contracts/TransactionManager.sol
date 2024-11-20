// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract TransactionManager {
    struct Transaction {
        address sender;
        address receiver;
        uint amount;
        uint timestamp;
    }

    mapping(address => Transaction[]) public userTransactions;

    event TransactionMade(
        address indexed sender,
        address indexed receiver,
        uint amount
    );

    function sendTransaction(address receiver) external payable {
        require(msg.value > 0, "Amount must be greater than zero");
        // require(receiver != address(0), "Receiver address cannot be zero");

        Transaction memory newTransaction = Transaction(
            msg.sender,
            receiver,
            msg.value,
            block.timestamp
        );
        userTransactions[msg.sender].push(newTransaction);

        // Transfer the Ether to the receiver
        (bool sent, ) = receiver.call{value: msg.value}("");
        require(sent, "Failed to send Ether");

        emit TransactionMade(msg.sender, receiver, msg.value);
    }

    function getTransactions(address user)
        public
        view
        returns (Transaction[] memory)
    {
        return userTransactions[user];
    }
}
