import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import { WagmiConfig, createClient } from "wagmi";
import { mainnet, goerli, sepolia, polygonMumbai } from "wagmi/chains";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import Layout from "@/components/Layout";

const client = createClient(
  getDefaultClient({
    appName: "ConnectKit Next.js demo",
    infuraId: process.env.INFURA_API_KEY,
    // alchemyId: process.env.ALCHEMY_API_KEY,
    chains: [goerli, sepolia, polygonMumbai],
  })
);

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <WagmiConfig client={client}>
        <ConnectKitProvider theme='auto' mode='light'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ConnectKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}
