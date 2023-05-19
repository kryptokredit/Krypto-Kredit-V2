
 import styles from "@/styles/Header.module.css";
import { useState } from 'react';
import { Box, Button, ButtonGroup, HStack, Spacer, Stack, Text, Link} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { CustomConnectButton } from "./CustomConnectButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

    {/* Collapsed button for small screens */}
    <Box display={{ base: 'block', md: 'none' }} ml='auto'>
      <Button onClick={handleToggleMenu} variant="outline">
        <HamburgerIcon />
      </Button>
    </Box>

    {/* Collapsed menu */}
    <Box mt="12" display={{ base: isMenuOpen ? 'flex' : 'none', md: 'none' }} flexDirection="column">
      <Stack spacing={3} mt={20}>
        <Link href='/Invoices'>
          <Button size='sm' w="full">Invoices</Button>
        </Link>
        <Link href='/Validators'>
          <Button size='sm' w="full">Validators</Button>
        </Link>
        <Link href='/Profiles'>
          <Button size='sm' w="full">Profile</Button>
        </Link>
        <Link href='/Rolodex'>
          <Button size='sm' w="full">Rolodex</Button>
        </Link>
        <CustomConnectButton w="full" />
      </Stack>
    </Box>

    {/* Expanded menu for large screens */}
    <Box display={{ base: 'none', md: 'block' }}>
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
        <Link href='/Rolodex'>
          <Button size='sm'>Rolodex</Button>
        </Link>
        <CustomConnectButton />
      </ButtonGroup>
    </Box>
  </header>

  );
};

export default Header;

