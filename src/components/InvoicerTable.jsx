import styles from "@/styles/Table.module.css";

import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Button } from "@chakra-ui/react";

const InvoicerTable = ({ InvoiceJson }) => {
  return (
    <>
      <div>
        <TableContainer>
          <Table variant='striped' colorScheme='whatsapp'>
            <TableCaption>Invoices</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Account</Th>
                <Th>Amount</Th>
                <Th>Created Date</Th>
                <Th>Due Date</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {InvoiceJson.map((invoice) => (
                <Tr className={styles.invoiceRow} key={invoice.id}>
                  <Td>{invoice.idInvoice}</Td>
                  <Td>{`${invoice.invoicer.substring(0, 6)}...${invoice.invoicer.substring(
                    invoice.invoicer.length - 4
                  )}`}</Td>
                  <Td>{invoice.amount}</Td>
                  <Td>{invoice.createdDateMod}</Td>
                  <Td>{invoice.dueDateMod}</Td>
                  <Td>{invoice.status}</Td>
                  <Td>
                    {1 ? (
                      <Button size='sm' bgColor='#11a3ee'>
                        Pay
                      </Button>
                    ) : (
                      <Button size='sm' bgColor='#11a3ee'>
                        Sign
                      </Button>
                    )}
                  </Td>
                  {/* <Td>{invoice.status}</Td> */}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default InvoicerTable;
