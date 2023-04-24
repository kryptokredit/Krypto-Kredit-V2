import styles from "@/styles/Header.module.css";

import { Box, Button, ButtonGroup, HStack, Link, Spacer, Stack, Text } from "@chakra-ui/react";
import { CustomConnectButton } from "./CustomConnectButton";

const Header = () => {
  return (
    <header className={styles.navbar}>
      <Link href='/'>
        <HStack>
          <img src='/logo.png' alt='Krypto Kredit logo' className={styles.logo} />
          <Text fontSize='2xl' as='b'>
            Krypto Kredit
          </Text>
        </HStack>
      </Link>
      <Spacer />
      <ButtonGroup variant='ghost' colorScheme='gray'>
        <Button size='sm'>Invoices</Button>
        <Button size='sm'>Validators</Button>
        <Button size='sm'>Profile</Button>
        <CustomConnectButton />
      </ButtonGroup>
    </header>
  );
};

export default Header;
