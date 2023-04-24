import { Button } from "@chakra-ui/react";
import { ConnectKitButton } from "connectkit";

export const CustomConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
        return (
          <Button size='sm' colorScheme='green' borderRadius='full' onClick={show}>
            {isConnected ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : "Connect Wallet"}
          </Button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
