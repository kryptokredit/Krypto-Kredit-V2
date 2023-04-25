import { Table, TableCaption, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function InvoicesTable() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Fetch data from API or use local data
    const data = {
      "invoices": [
        {
          "id": 1,
          "account": "0X2356ab4653r",
          "amount": 25.4,
          "due_date": "2/26/2030",
          "status": <Button size='sm' bgColor='#11a3ee'>Sign</Button>,
        },
        {
          "id": 2,
          "account": "0X2356ab4653r",
          "amount": 30.48,
          "due_date": "2/26/2030",
          "status": "Unpaid"
        },
        {
          "id": 3,
          "account": "0X2356ab4653r",
          "amount": 0.91444,
          "due_date": "2/26/2030",
          "status": "Unpaid"
        }
      ]
    };
    setInvoices(data.invoices);
  }, []);

  return (
    <Table variant="striped" colorScheme="whatsapp">
      <TableCaption>Invoices</TableCaption>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Account</Th>
          <Th>Amount</Th>
          <Th>Due Date</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {invoices.map((invoice) => (
          <Tr key={invoice.id}>
            <Td>{invoice.id}</Td>
            <Td>{invoice.account}</Td>
            <Td>{invoice.amount}</Td>
            <Td>{invoice.due_date}</Td>
            <Td>{invoice.status}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default InvoicesTable;
