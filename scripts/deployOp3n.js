const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  const contractFactory = await ethers.getContractFactory("Op3n");
  const contract = await contractFactory.deploy();
  await contract.deployed();

  console.log(`Deployed to address: ${contract.address}`);

  const nft = await contract.getNFT();
  console.log(`NFT address at ${nft}`);
  const message = JSON.stringify({ Op3n: contract.address, NFT: nft }, null, 2);

  fs.writeFileSync("../contracts.json", message);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
