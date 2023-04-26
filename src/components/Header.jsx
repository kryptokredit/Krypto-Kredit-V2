import styles from "@/styles/Header.module.css";

import { Box, Button, ButtonGroup, HStack, Spacer, Stack, Text, Link } from "@chakra-ui/react";
import { CustomConnectButton } from "./CustomConnectButton";

const Header = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>
        <Link href='/'>
          <HStack>
            <img className={styles.logo} src='/logo.png' alt='Krypto Kredit logo' />
            <Text className={styles.logoText}>Krypto Kredit</Text>
          </HStack>
        </Link>
      </div>
      <div className={styles.menu}>
        <Link href='#' className='toggleButton'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </Link>
        <ButtonGroup variant='ghost' colorScheme='gray'>
          <Link className='navbarLinks' href='/Invoices'>
            <Button size='sm'>Invoices</Button>
          </Link>
          <Link className='navbarLinks' href='/Validators'>
            <Button size='sm'>Validators</Button>
          </Link>
          <Link className='navbarLinks' href='/Profiles'>
            <Button size='sm'>Profile</Button>
          </Link>
          <Link className='navbarLinks' href='/Rolodex'>
            <Button size='sm'>Rolodex</Button>
          </Link>
          <CustomConnectButton />
        </ButtonGroup>
      </div>
    </header>
  );
};

export default Header;
