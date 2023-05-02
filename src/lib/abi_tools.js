const axios = require("axios");

async function getAbi(api_key, contractAddress) {
  try {
    // Make a GET request to the PolygonScan API endpoint to get the contract ABI
    const response = await axios.get(
      `https://api-testnet.polygonscan.com//api?module=contract&action=getabi&address=${contractAddress}&apikey=${api_key}`
    );

    // Parse the response and extract the ABI
    const data = response.data;
    if (data.status === "1") {
      const abi = JSON.parse(data.result);
      return abi;
    } else {
      console.log(`Failed to get ABI for contract ${contractAddress}`);
      return null;
    }
  } catch (error) {
    console.log(`Error getting ABI for contract ${contractAddress}: ${error}`);
    return null;
  }
}

module.exports = { getAbi };
