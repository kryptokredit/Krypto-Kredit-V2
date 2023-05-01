const { ethers } = require("ethers");

// Replace with your own provider
const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/" + process.env.NEXT_PUBLIC_INFURA_API_KEY
);

async function getBlockTimestamp(blockNumber) {
  const block = await provider.getBlock(blockNumber);
  const timestamp = new Date(block.timestamp * 1000);
  const formattedDate = timestamp.toISOString().slice(0, 10).replace("T", " ");

  return formattedDate;
}

function getBlockNumber(date) {
  // Get the time difference in seconds between the given date and the network's launch date
  const launchDate = new Date("2021-05-30T00:00:00Z"); // Polygon launch date
  const timeDifference = Math.floor((date - launchDate) / 1000); // Convert to seconds

  // Calculate the estimated block number based on the average block time of 2 seconds per block
  const blockNumber = Math.floor(timeDifference / 2);

  return blockNumber;
}

export default { getBlockTimestamp, getBlockNumber };
