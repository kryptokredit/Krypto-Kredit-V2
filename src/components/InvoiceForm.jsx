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
} from "@chakra-ui/react";

const InvoiceForm = () => {
  return (
    <div>
      <Card margin={10} maxWidth={800}>
        <CardHeader justifyContent='center'>
          <Heading size='md' textAlign='center'>
            Create an Invoice
          </Heading>
        </CardHeader>
        <CardBody>
          <Flex flexWrap='wrap'>
            <Box flex='1 1 100%'>
              <Text mb='8px'>Amount:</Text>
              <HStack>
                <Select placeholder='USDC'>
                  <option value='ETH'>ETH</option>
                </Select>
                <Input ml='2' placeholder='Amount' />
              </HStack>
            </Box>
            <Box flex='1 1 50%'>
              <Text mb='8px'>Due Date:</Text>
              <Input placeholder='Select Date and Time' size='md' type='datetime-local' />
            </Box>
            <Box flex='1 1 50%'>
              <Text mb='8px'>Late Fee:</Text>
              <NumberInput step={0.01}>
                <NumberInputField placeholder='Late Fee' />
              </NumberInput>
            </Box>
            <Box flex='1 1 50%'>
              <Text mb='8px'>Payer Address:</Text>
              <Input placeholder='0x...' />
            </Box>
            <Box flex='1 1 50%'>
              <Text mb='8px'>Validator Address:</Text>
              <Input placeholder='0x...' />
            </Box>
            <Box flex='1 1 50%'>
              <Text mb='8px'>Description of Service:</Text>
              <Textarea placeholder='Here is a sample placeholder' />
            </Box>
          </Flex>
          <CardFooter justifyContent='center'>
            <Button colorScheme='whatsapp' variant='solid' justifyContent='center'>
              Submit
            </Button>
          </CardFooter>
        </CardBody>
      </Card>
    </div>
  );
};

export default InvoiceForm;
