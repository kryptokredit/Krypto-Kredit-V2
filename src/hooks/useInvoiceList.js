import { useEffect, useState } from "react";
import { ethers } from "ethers";
import getBlockTimestamp from "@/lib/web3_functions";

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/" + process.env.NEXT_PUBLIC_INFURA_API_KEY
);

export default function useInvoiceList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

            const dueDate = new Date(timestampDueDate);
            const today = new Date("2023-03-10");

            const status = dueDate < today ? "Late" : "Unpaid";

            const new_object = {
              ...invoice,
              createdDateMod: timestampCreateDate,
              dueDateMod: timestampDueDate,
              status: status,
            };
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
