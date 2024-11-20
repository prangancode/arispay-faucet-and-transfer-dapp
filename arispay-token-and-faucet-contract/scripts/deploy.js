const hre = require("hardhat");

async function main() {
  const ArisPayToken = await hre.ethers.getContractFactory("ArisPayToken");
  const arispayToken = await ArisPayToken.deploy(100000000, 50);

  await arispayToken.deployed();

  console.log("ArisPay Token deployed: ", arispayToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
