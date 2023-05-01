const { ethers } = require("ethers");
const { assert } = require("chai");
const path = require("path");
const dotenv = require("dotenv");

const envPath = path.resolve(__dirname, "../../.env.local");
dotenv.config({ path: envPath });

const provider = new ethers.providers.JsonRpcProvider(
  `https://polygon-mumbai.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_MUMBAI_API_KEY}`
);

describe("Environment and Connection", function () {
  it("should return an environment variable", async function () {
    assert.isDefined(process.env.NEXT_PUBLIC_ALCHEMY_MUMBAI_API_KEY, "environment variable is undefined");
  });

  it("should connect to the chain and get current block", async function () {
    const result = await provider.getBlockNumber();
    assert.isNumber(result, "getBlockNumber did not return a number");
  });

  it("should .env.local public address match mnemonic address", async function () {
    const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC);
    const account = wallet.connect(provider);
    assert.equal(process.env.PUBLIC_ADDRESS, account.address, "addresses do not match");
  });

  it("should connect to an account that has a balance", async function () {
    const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC);
    const account = wallet.connect(provider);
    const balance = await account.getBalance();
    const ethBalance = ethers.utils.formatEther(balance);
    assert.isAbove(Number(ethBalance), 0, "This account does not have a balance");
  });

  it("should connect to subgraphs and pull a non-zero record count", async function () {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.thegraph.com/subgraphs/name/luiscmogrovejo/factory-graph", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
                query {
                    addressAddeds {
                        blockNumber
                        blockTimestamp
                        id
                        transactionHash
                        account
                      }
                }
              `,
          }),
        });
        const { data } = await response.json();

        setData(data.addressAddeds);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
      console.log(data);
      assert.isDefined(data, "This subgraph has no records");
    };
  });
});
