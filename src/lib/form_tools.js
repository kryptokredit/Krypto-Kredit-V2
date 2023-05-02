import { ethers } from "ethers";

function PrepareInvoiceData(_invoicer, _amount, _dueDate, _payer, _id) {
  const encodedValues = ethers.utils.solidityPack(
    ["address", "uint256", "uint256", "address", "uint256"],
    [_invoicer, _amount, _dueDate, _payer, _id]
  );
  console.log(encodedValues);
  const message = ethers.utils.keccak256(encodedValues);
  const arrayify_message = ethers.utils.arrayify(message);
  console.log(arrayify_message);

  return arrayify_message;
}

export default PrepareInvoiceData;
