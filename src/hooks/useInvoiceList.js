import { useEffect, useState } from "react";
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/" + process.env.NEXT_PUBLIC_INFURA_API_KEY
);

export default function useInvoiceList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getBlockTimestamp(blockNumber) {
    const block = await provider.getBlock(blockNumber);
    const timestamp = new Date(block.timestamp * 1000);
    const formattedDate = timestamp.toISOString().slice(0, 19).replace("T", " ");

    return formattedDate;
  }

  useEffect(() => {
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
                  invoiceCreateds {
                    id
                    idInvoice
                    blockNumber
                    date
                    dueDate
                    invoicer
                    amount
                  }
                }
              `,
          }),
        });
        const { data } = await response.json();

        const data_modified = await Promise.all(
          data.invoiceCreateds.map(async (invoice) => {
            const formattedCreateDate = invoice.date.substring(0, 8);
            const formattedDueDate = invoice.dueDate.substring(0, 8);
            const timestampCreateDate = await getBlockTimestamp(Number(formattedCreateDate));
            const timestampDueDate = await getBlockTimestamp(Number(formattedDueDate));
            const new_object = { ...invoice, createdDateMod: timestampCreateDate, dueDateMod: timestampDueDate };
            return new_object;
          })
        );

        setData(data_modified);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
