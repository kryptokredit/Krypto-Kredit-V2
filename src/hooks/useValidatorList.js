import { useEffect, useState } from "react";
import { ethers } from "ethers";
import getBlockTimestamp from "@/lib/web3_functions";

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/" + process.env.NEXT_PUBLIC_INFURA_API_KEY
);

export default function useValidatorList() {
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
        // console.log(data);

        setData(data.addressAddeds);
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
