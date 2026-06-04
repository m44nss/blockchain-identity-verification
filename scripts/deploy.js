const hre = require("hardhat");

async function main() {
  const Identity = await hre.ethers.getContractFactory("Identity");

  const contract = await Identity.deploy();

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
}

main();