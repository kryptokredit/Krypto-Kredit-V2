import styles from "@/styles/Header.module.css";
import { useState } from 'react';
import { Box, Button, ButtonGroup, HStack, Spacer, Stack, Text, Link } from "@chakra-ui/react";
import { CustomConnectButton } from "./CustomConnectButton";

 

const toggleMenu = () => {
  setMenuVisible(!menuVisible);
}

const Header = () => {

  const [menuVisible, setMenuVisible] = useState(false);
  
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
    <div className={`${styles.menu} ${menuVisible ? styles.menuVisible : ''}`}>
      <Link href='#' className='toggleButton' onClick={toggleMenu}>
        <span class='bar'></span>
        <span class='bar'></span>
        <span class='bar'></span>
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
        <CustomConnectButton className={styles.menu_item} />
      </ButtonGroup>
    </div>
  </header>
  );
};

export default Header;
