import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Button } from "@chakra-ui/react";

const ValidatorTable = ({ ValidatorJson }) => {
  console.log(ValidatorJson);
  return (
    <>
      <div>
        <TableContainer>
          <Table variant='striped' colorScheme='whatsapp'>
            <TableCaption>Validators</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Account</Th>
                <Th>Location</Th>
              </Tr>
            </Thead>
            <Tbody>
              {ValidatorJson.map((validator) => (
                <Tr key={validator.id}>
                  <Td>{validator.id.substring(0, 10)}</Td>
                  {/* <Td>{`${validator.account.substring(0, 6)}...${validator.account.substring(
                    validator.account.length - 4
                  )}`}</Td> */}
                  <Td>{validator.account}</Td>
                  <Td>Accra, Ghana</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ValidatorTable;
