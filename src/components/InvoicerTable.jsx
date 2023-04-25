import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'


const InvoicerTable = () => {
    return(
      <>
         <div>
      <TableContainer>

  <Table variant='striped' colorScheme='whatsapp'>
    <TableCaption>Invoices</TableCaption>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Account</Th>
        <Th >Amount</Th>
        <Th>Due Date</Th>
        <Th>Status</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>0X2356ab4653r</Td>
        <Td>25.4</Td>
        <Td>2/26/2030</Td>
        <Td>Paid</Td>
      </Tr>
      <Tr>
        <Td>2</Td>
        <Td>0X2356ab4653r</Td>
        <Td>30.48</Td>
        <Td>2/26/2030</Td>
        <Td>Unpaid</Td>
      </Tr>
      <Tr>
        <Td>3</Td>
        <Td>0X2356ab4653r</Td>
        <Td>0.91444</Td>
        <Td>2/26/2030</Td>
        <Td>Unpaid</Td>
      </Tr>
      
    </Tbody>
  </Table>
</TableContainer>
      </div>
      </>
    )
}

export default InvoicerTable;