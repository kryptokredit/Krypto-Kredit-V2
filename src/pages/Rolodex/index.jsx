import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const Rolodex = () => {
  const [rolodex, setRolodex] = useState([]);

  useEffect(() => {
    // Load JSON data and set it to the rolodex state
    const fetchData = async () => {
      const response = await fetch("/data/rolodex.json");
      const data = await response.json();
      setRolodex(data);
    };
    fetchData();
  }, []);

  return (
    <div className='container'>
      <Card margin={10} maxWidth={1000} variant='unstyled'>
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>Address Book for all clients and vendors</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Address</Th>
                <Th>Type</Th>
                <Th>Invoice</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rolodex.map((contact) => (
                <Tr key={contact.name}>
                  <Td>{contact.name}</Td>
                  <Td>{contact.address}</Td>
                  <Td>{contact.type}</Td>
                  <Td>
                    <Button>Send</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default Rolodex;
