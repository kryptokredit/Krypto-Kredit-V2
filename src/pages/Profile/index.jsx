import {
  Box,
  Image,
  Avatar,
  VStack,
  Text,
  Flex,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
  CircularProgressLabel,
  Center
} from "@chakra-ui/react";

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // mock credit score, you should get this value from API or state
  const creditScore = 720;

  return (
    <Box w="full">
      <Box bg="gray.200" h="200px" pos="relative">
        <Image
          src="https://tippie.uiowa.edu/sites/tippie.uiowa.edu/files/2022-06/linkedinheaders-blue-background.jpg"
          alt="header"
          w="full"
          h="100%"
          objectFit="cover"
        />
        <Avatar
          size="2xl"
          src="/logo.png"
          pos="absolute"
          bottom="-50px"
          left="50%"
          transform="translateX(-50%)"
          border="4px solid white"
          bg="white"
        />
      </Box>
      <Flex justify="center" mt="14">
        <VStack>
          <Text fontSize="2xl" fontWeight="bold">Krypto Kredit</Text>
          <Text color="gray.500">@KryptoKredit</Text>
          <Button colorScheme="teal" onClick={onOpen}>View Credit Score</Button>
        </VStack>
      </Flex>
      <Box mt="10">
        {/* User details, tweets, etc */}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Credit Score</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <CircularProgress value={creditScore/10} color="green.400" size="120px">
                <CircularProgressLabel>{creditScore}</CircularProgressLabel>
              </CircularProgress>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Profile;
