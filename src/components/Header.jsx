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
        <Link href='/Invoices'>
          <Button size='sm'>Invoices</Button>
        </Link>
        <Link href='/Validators'>
          <Button size='sm'>Validators</Button>
        </Link>
        <Link href='/Profiles'>
          <Button size='sm'>Profile</Button>
        </Link>
        <CustomConnectButton />
      </ButtonGroup>
    </header>
  );
};

export default Header;
