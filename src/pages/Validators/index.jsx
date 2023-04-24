import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Text,
  HStack,
  Flex,
  Box,
  Textarea,
  Button,
  Heading,
  Select,
  NumberInput,
  NumberInputField,
  Divider,
} from "@chakra-ui/react";

const ValidatorForm = () => {
  return (
    <div className='container'>
      <Card margin={10} maxWidth={800}>
        <CardHeader justifyContent='center'>
          <Heading size='md' textAlign='center'>
            Validator Application
          </Heading>
        </CardHeader>
        <CardBody>
          <Flex flexWrap='wrap'>
            <Box flex='1 1 100%' mb='10px'>
              <Text mb='8px'>Address:</Text>
              <Input placeholder='0x...' size='md' />
            </Box>
            <Box flex='1 1 100%' mb='10px'>
              <Text mb='8px'>Location:</Text>
              <Input placeholder='Accra, Ghana' size='md' />
            </Box>
            <Box flex='1 1 100%' mb='10px'>
              <Text mb='8px'>Description of Service:</Text>
              <Textarea placeholder='Here is a sample placeholder' />
            </Box>
          </Flex>
        </CardBody>
        <CardFooter justifyContent='center'>
          <Button colorScheme='whatsapp' variant='solid' justifyContent='center'>
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ValidatorForm;
