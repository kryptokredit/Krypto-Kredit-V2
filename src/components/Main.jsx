import styles from "@/styles/Main.module.css";
import { Button, Text, HStack, Grid, GridItem, Flex, Box } from "@chakra-ui/react";

const Main = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <Text
            fontSize='4xl'
            bgGradient='linear(to-l, rgb(0, 191, 255), rgb(50, 205, 50))'
            bgClip='text'
            fontWeight='extrabold'
          >
            Join the future of finance, earn credit on chain for your everyday transactions
          </Text>
          <Text fontSize='1xl'>Redefining Credit: A Peer-to-Peer Approach</Text>
          <HStack>
            <a href='https://www.google.com'>
              <Button colorScheme='whatsapp' variant='solid'>
                Get Started
              </Button>
            </a>
            <a href='https://krypto-kredit.gitbook.io/krypto-kredit-litepaper/'>
              <Button colorScheme='whatsapp' variant='outline'>
                Learn More
              </Button>
            </a>
          </HStack>
        </div>
        <div className={styles.right}>
          <img src='/knowledge_share.svg'></img>
        </div>
      </div>
      <div className={styles.bottom}>
        <Flex flexWrap='wrap' style={{ gap: "10px" }}>
          <Box flex='1 1 40%' p={4} style={{ border: "1px solid gray" }} borderRadius='lg'>
            <Text as='b'>Build On-Chain Credit</Text>
            <Text>
              Using NFT invoices recorded on the blockchain, our system provides a secure and transparent approach to
              credit-building.
            </Text>
            <Button>Go somewhere</Button>
          </Box>
          <Box flex='1 1 40%' p={4} style={{ border: "1px solid gray" }} borderRadius='lg'>
            <Text as='b'>Create Invoices</Text>
            <Text>Start creating invoices to generate credit history on chain</Text>
            <Button>Go somewhere</Button>
          </Box>
          <Box flex='1 1 40%' p={4} style={{ border: "1px solid gray" }} borderRadius='lg'>
            <Text as='b'>Become a Validator</Text>
            <Text>Get rewarded by joining our validator network and confirming cash transactions</Text>
            <Button>Go somewhere</Button>
          </Box>
          <Box flex='1 1 40%' p={4} style={{ border: "1px solid gray" }} borderRadius='lg'>
            <Text as='b'>Join KredDao</Text>
            <Text>Oversee our validator network</Text>
            <Button>Go somewhere</Button>
          </Box>
        </Flex>
      </div>
    </>
  );
};

export default Main;
