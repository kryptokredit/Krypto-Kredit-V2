const { ethers } = require("ethers");

// Replace with your own provider
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/cab017eb9e574dc6af9b8519321ded93");

export async function getBlockTimestamp(blockNumber) {
  const block = await provider.getBlock(blockNumber);
  const timestamp = new Date(block.timestamp * 1000);
  const formattedDate = timestamp.toISOString().slice(0, 19).replace("T", " ");

  return formattedDate;
}

// getBlockTimestamp(16782516)
//   .then((timestamp) => {
//     console.log(`Block timestamp: ${timestamp}`);
//   })
//   .catch((error) => {
//     console.error(`Error: ${error}`);
//   });

export default getBlockTimestamp;