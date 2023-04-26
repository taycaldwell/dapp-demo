import { ethers } from "hardhat";

async function main() {
  const NFT = await ethers.getContractFactory("MyNFT");

  const NFT_NAME = process.env.NFT_NAME;
  const NFT_SYMBOL = process.env.NFT_SYMBOL;
  const NFT_ROYALTY_RECIPIENT_ADDR = process.env.NFT_ROYALTY_RECIPIENT_ADDR;
  const NFT_ROYALTY_BPS = process.env.NFT_ROYALTY_BPS;

  if (!NFT_NAME) {
    console.log("NFT_NAME is required. Please update your .env");
    return;
  }
  if (!NFT_SYMBOL) {
    console.log("NFT_SYMBOL is required. Please update your .env");
    return;
  }
  if (!NFT_ROYALTY_RECIPIENT_ADDR) {
    console.log("NFT_ROYALTY_RECIPIENT_ADDR is required. Please update your .env");
    return;
  }
  if (!NFT_ROYALTY_BPS) {
    console.log("NFT_ROYALTY_BPS is required. Please update your .env");
    return;
  }

  const deployedContract = await NFT.deploy(NFT_NAME, NFT_SYMBOL, NFT_ROYALTY_RECIPIENT_ADDR, NFT_ROYALTY_BPS);

  await deployedContract.deployed();

  console.log("MyNFT deployed to:", deployedContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
