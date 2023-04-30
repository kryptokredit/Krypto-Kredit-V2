import styles from "@/styles/Main.module.css";
import { Button, Text, HStack, Grid, GridItem, Flex, Box, Link } from "@chakra-ui/react";


const Main = () => {
  return (
    <>
      <div className={styles.container} style={{ padding: '30px' }}>
  <Flex direction={{ base: 'column', md: 'row' }}>
    <div className={styles.left} flex='1'>
      <Text
        fontSize='4xl'
        bgGradient='linear(to-l, rgb(0, 191, 255), rgb(50, 205, 50))'
        bgClip='text'
        fontWeight='extrabold'
        mt={4} // add margin-top of 4
      >
        Join the future of finance, earn credit on chain for your everyday transactions
      </Text>
      <Text fontSize='1xl' mt={4}>
        Redefining Credit: A Peer-to-Peer Approach
      </Text>
      <HStack mt={4}> // add margin-top of 4
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

    <div className={styles.right} flex='1'>
      <img src='/knowledge_share.svg'></img>
    </div>
  </Flex>
</div>

<div className={styles.bottom} style={{ padding: '30px' }}>
  <Flex flexWrap='wrap' style={{ gap: "20px" }}>
    <Box flex={['0 0 100%', '1 1 40%']} p={4} style={{ border: "1px solid gray" }} borderRadius='lg'>
      <Text as='b' mb={2}>Build On-Chain Credit</Text>
      <Text mb={4}>
        Using NFT invoices recorded on the blockchain, our system provides a secure and transparent approach to
        credit-building.
      </Text>
      <Button bgColor='#11a3ee' color='white'  >Learn More</Button>
    </Box>
    <Box flex={['0 0 100%', '1 1 40%']} p={4} style={{ border: "1px solid gray" }} borderRadius='lg'>
      <Text as='b' mb={2}>Create Invoices</Text>
      <Text mb={4}>Start creating invoices to generate credit history on chain</Text>
      <Link href='/Invoices/InvoiceForm'>
      <Button colorScheme='whatsapp' >Get Started</Button>
      </Link>
     
    </Box>
    <Box flex={['0 0 100%', '1 1 40%']} p={4} style={{ border: "1px solid gray" }} borderRadius='lg'>
      <Text as='b' mb={2}>Become a Validator</Text>
      <Text mb={4}>Get rewarded by joining our validator network and confirming cash transactions</Text>
      <Button colorScheme='whatsapp'>Get Started</Button>
    </Box>
    <Box flex={['0 0 100%', '1 1 40%']} p={4} style={{ border: "1px solid gray" }} borderRadius='lg'>
      <Text as='b' mb={2}>Join KredDao</Text>
      <Text mb={4}>Oversee our validator network</Text>
      <Button bgColor='#11a3ee' color='white'>Learn More</Button>
    </Box>
  </Flex>
</div>

    </>
  );
};

export default Main;
