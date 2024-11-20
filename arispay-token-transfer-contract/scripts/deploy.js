const hre = require("hardhat");

async function main() {
  const TransactionManager = await hre.ethers.getContractFactory(
    "TransactionManager"
  );
  const transactionManager = await TransactionManager.deploy();

  await transactionManager.getDeployedCode();

  console.log("TransactionManager deployed to:", transactionManager.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
