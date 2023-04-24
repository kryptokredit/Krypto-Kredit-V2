import { Button, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";

const Rolodex = () => {
  return (
    <div className='container'>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Address Book for all clients and vendors</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Address</Th>
              <Th>Invoice</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Albert</Td>
              <Td>0xd00000000000000000000000000000000000000</Td>
              <Td>
                <Button>Send</Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Bill</Td>
              <Td>0xd00000000000000000000000000000000000000</Td>
              <Td>
                <Button>Send</Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Tom</Td>
              <Td>0xd00000000000000000000000000000000000000</Td>
              <Td>
                <Button>Send</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Rolodex;
