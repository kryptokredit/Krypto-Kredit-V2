const { ethers } = require("ethers");

// Replace with your own provider
console.log(process.env.NEXT_PUBLIC_INFURA_API_KEY);
const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/" + process.env.NEXT_PUBLIC_INFURA_API_KEY
);

async function getBlockTimestamp(blockNumber) {
  const block = await provider.getBlock(blockNumber);
  const timestamp = new Date(block.timestamp * 1000);
  const formattedDate = timestamp.toISOString().slice(0, 10).replace("T", " ");

  return formattedDate;
}

function dateToBlockHeight(date, evmName) {
  const evm = evms[evmName];
  if (!evm) {
    throw new Error(`Unknown EVM '${evmName}'`);
  }
  const timestamp = Math.floor(date.getTime() / 1000); // Convert date to Unix timestamp
  const blockHeight = Math.floor((timestamp - evm.startTime) / evm.blockTime); // Calculate block height
  return blockHeight;
}

// Example usage
const date = new Date("2023-03-30");
for (const evmName of Object.keys(evms).slice(0, 10)) {
  const blockHeight = dateToBlockHeight(date, evmName);
  console.log(`${evmName} block height: ${blockHeight}`);
}

// export default getBlockTimestamp;
