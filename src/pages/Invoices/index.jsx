import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Card,
  CardHeader,
  Heading,
  Button,
  Link,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import useInvoiceList from "@/hooks/useInvoiceList";
import InvoicerTable from "@/components/InvoicerTable";

const InvoiceTabs = () => {
  const { data, loading, error } = useInvoiceList();

  return (
    <Box mt={7} width={1000}  maxW={{base: '100%', md: '1000px'}} overflowX='auto'>
<div className='container'>
      <Card margin={10} maxWidth={1000} variant='unstyled'>
        <CardHeader justifyContent='center'></CardHeader>
        <Heading size='md' textAlign='center'>
          My Invoices
        </Heading>
        <Tabs mt={7} width={1000} variant='enclosed'>
          <TabList>
            <Tab>All</Tab>
            <Tab>Unsigned</Tab>
            <Tab>Paid</Tab>
            <Tab>Outstanding</Tab>
            <Spacer />
            <Link href='/Invoices/InvoiceForm'>
              <Button mb={1} size='md' colorScheme='whatsapp' variant='solid'>
                + Create an Invoice
              </Button>
            </Link>
          </TabList>
          <TabPanels>
            <TabPanel>{loading ? <div>Loading...</div> : <InvoicerTable InvoiceJson={data} />}</TabPanel>
            <TabPanel></TabPanel>
            <TabPanel>{/* <InvoicerTable InvoiceJson={data} /> */}</TabPanel>
            <TabPanel>{/* <InvoicerTable InvoiceJson={data} /> */}</TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </div>
    </Box>
    
  );
};

export default InvoiceTabs;
