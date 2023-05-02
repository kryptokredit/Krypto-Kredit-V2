const blockTime = 15; // Ethereum mainnet block time in seconds
const startTime = 1231006505; // Unix timestamp of the Bitcoin genesis block

function dateToBlockHeight(date) {
  const timestamp = Math.floor(date.getTime() / 1000); // Convert date to Unix timestamp
  const blockHeight = Math.floor((timestamp - startTime) / blockTime); // Calculate block height
  return blockHeight;
}

// Example usage
const endOfApril30 = new Date("2023-04-30T23:59:59.000Z"); // End of April 30, 2023 in UTC
const startOfApril30 = new Date("2023-04-30T00:00:00.000Z"); // Start of April 30, 2023 in UTC
const startBlockHeight = dateToBlockHeight(startOfApril30); // Block height at the start of April 30
const blocksPerDay = Math.round((24 * 60 * 60) / blockTime); // Estimated number of blocks mined per day
const endBlockHeight = startBlockHeight + blocksPerDay; // Block height at the end of April 30
const endTimestamp = endBlockHeight * blockTime + startTime; // Unix timestamp when the block will be mined
const endBlockDate = new Date(endTimestamp * 1000); // Date object representing when the block will be mined
console.log(`The block at the end of April 30, 2023 will be mined on ${endBlockDate.toISOString()}`);
console.log(`block will be ${startBlockHeight}`);
