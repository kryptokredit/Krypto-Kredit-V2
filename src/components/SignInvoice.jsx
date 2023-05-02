import * as React from "react";
import { useSignMessage } from "wagmi";
import { verifyMessage } from "ethers/lib/utils";
import { ethers } from "ethers";
import { Button } from "@chakra-ui/react";

// const provider = new ethers.providers.JsonRpcProvider(
//   `https://polygon-mumbai.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_MUMBAI_API_KEY}`
// );

const SignInvoice = () => {
  //   const contractAddress = process.env.VERIFYSIGNATURE_CONTRACT_ADDRESS;
  //   const contract = new ethers.Contract(contractAddress, abi_VerifySignature, provider);
  //   // [invoicer, amount, due_date, payer, fee]
  //   const msgParams = [process.env.PUBLIC_ADDRESS, "1", "35037115", process.env.PUBLIC_ADDRESS, "1"];

  const recoveredAddress = React.useRef();
  const { data, error, isLoading, signMessage } = useSignMessage({
    onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      const address = verifyMessage(variables.message, data);
      recoveredAddress.current = address;
    },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
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

        signMessage({ hashedMessage });
      }}
    >
      {/* <label htmlFor='message'>Enter a message to sign</label>
      <textarea id='message' name='message' placeholder='The quick brown fox…' /> */}
      <Button colorScheme='whatsapp' variant='solid' justifyContent='center'>
        <button disabled={isLoading}>{isLoading ? "Check Wallet" : "Sign Message"}</button>
      </Button>

      {data && (
        <div>
          <div>Recovered Address: {recoveredAddress.current}</div>
          <div>Signature: {data}</div>
        </div>
      )}

      {error && <div>{error.message}</div>}
    </form>
  );
};

export default SignInvoice;
