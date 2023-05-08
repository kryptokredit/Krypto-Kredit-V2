import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Button, useBreakpointValue } from "@chakra-ui/react";
import styles from "@/styles/Table.module.css";
import { useState } from "react";
import InvoiceModal from "./InvoiceModal";

const InvoicerTable = ({ InvoiceJson }) => {
  const showColumns = useBreakpointValue({
    base: ["idInvoice", "amount", "status", "action"],
    md: ["idInvoice", "invoicer", "amount",  "dueDateMod", "status", "action"],
    lg: ["idInvoice", "invoicer", "amount", "createdDateMod", "dueDateMod", "status", "action"],
  });
  
  const tableWidth = useBreakpointValue({ base: "100%", md: "80%", lg: "70%"});



  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const handleRowClick = (invoice) => {
    setSelectedInvoice(invoice);
    setIsModalOpen(true);
  };
 
  return (
    <>
      <div>
      <TableContainer>
  <Table variant='striped' colorScheme='whatsapp' style={{width: tableWidth}}>
    <TableCaption>Invoices</TableCaption>
    <Thead>
      <Tr>
        {showColumns.includes("idInvoice") && <Th className={styles.idInvoice}>ID</Th>}
        {showColumns.includes("invoicer") && <Th className={styles.invoicer}>Account</Th>}
        {showColumns.includes("amount") && <Th className={styles.amount}>Amount</Th>}
        {showColumns.includes("createdDateMod") && <Th className={styles.createdDateMod}>Created Date</Th>}
        {showColumns.includes("dueDateMod") && <Th className={styles.dueDateMod}>Due Date</Th>}
        {showColumns.includes("status") && <Th className={styles.status}>Status</Th>}
        {showColumns.includes("action") && <Th className={styles.action}>Action</Th>}
      </Tr>
    </Thead>
    <Tbody>
      {InvoiceJson.map((invoice) => (
        <Tr className={styles.invoiceRow} key={invoice.id} onClick={() => handleRowClick(invoice)}>
          {showColumns.includes("idInvoice") && <Td>{invoice.idInvoice}</Td>}
          {showColumns.includes("invoicer") && (
            <Td>{`${invoice.invoicer.substring(0, 6)}...${invoice.invoicer.substring(
              invoice.invoicer.length - 4
            )}`}</Td>
          )}
          {showColumns.includes("amount") && <Td>{invoice.amount}</Td>}
          {showColumns.includes("createdDateMod") && <Td>{invoice.createdDateMod}</Td>}
          {showColumns.includes("dueDateMod") && <Td>{invoice.dueDateMod}</Td>}
          {showColumns.includes("status") && <Td>{invoice.status}</Td>}
          {showColumns.includes("action") && (
            <Td className={styles.action}>
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
          )}
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
