const { ethers } = require("ethers");
const { assert } = require("chai");

const path = require("path");
const dotenv = require("dotenv");
const envPath = path.resolve(__dirname, "../../.env.local");
dotenv.config({ path: envPath });

const abi_VerifySignature = require("../abi/VerifySignature.json");

const provider = new ethers.providers.JsonRpcProvider(
  `https://polygon-mumbai.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_MUMBAI_API_KEY}`
);

describe("VerifySignature Contract", function () {
  it("should be equal to expected message hash", async function () {
    const contractAddress = process.env.VERIFYSIGNATURE_CONTRACT_ADDRESS;
    const contract = new ethers.Contract(contractAddress, abi_VerifySignature, provider);
    // [invoicer, amount, due_date, payer, fee]
    const msgParams = [process.env.PUBLIC_ADDRESS, "1", "35037115", process.env.PUBLIC_ADDRESS, "1"];
    const result = await contract.getMessageHash(...msgParams);
    assert.equal(result, process.env.EXPECTED_MESSAGE_HASH, "The message hash does not match the expected value.");
  });

  it("should be equal to expected message hash without verifySignature contract", async function () {
    // [invoicer, amount, due_date, payer, fee]
    const _invoicer = process.env.PUBLIC_ADDRESS;
    const _amount = "1";
    const _dueDate = "35037115"; // Unix timestamp
    const _payer = process.env.PUBLIC_ADDRESS;
    const _id = "1";

    // Encode the values using abi.encodePacked
    const encodedValues = ethers.utils.solidityPack(
      ["address", "uint256", "uint256", "address", "uint256"],
      [_invoicer, _amount, _dueDate, _payer, _id]
    );

    const message = ethers.utils.keccak256(encodedValues);
    assert.equal(message, process.env.EXPECTED_MESSAGE_HASH, "The message hash does not match the expected value.");
  });

  it("should be equal to the expected signed message hash", async function () {
    const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC);
    const account = wallet.connect(provider);
    const messageHashBytes = ethers.utils.arrayify(process.env.EXPECTED_MESSAGE_HASH);
    const signedMessageHashBytes = await account.signMessage(messageHashBytes);
    assert.equal(
      signedMessageHashBytes,
      process.env.EXPECTED_SIGNED_MESSAGE_HASH,
      "The signed message hash does not match the expected value."
    );
  });
});
