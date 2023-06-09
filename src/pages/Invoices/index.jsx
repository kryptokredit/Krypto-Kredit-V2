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
import Head from "next/head";

const InvoiceTabs = () => {
  const { data, loading, error } = useInvoiceList();

  console.log(data);

  return (
    <>
      <Head>
        <title>Krypto Kredit | Invoices</title>
        <meta name='description' content='Krypto Kredit' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
      </Head>
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
              <Tab>Unpaid</Tab>
              <Tab>Late</Tab>
              <Tab>Paid</Tab>
              <Spacer />
              <Link href='/Invoices/InvoiceForm'>
                <Button mb={1} size='md' colorScheme='whatsapp' variant='solid'>
                  + Create an Invoice
                </Button>
              </Link>
            </TabList>
            <TabPanels>
              <TabPanel>{loading ? <div>Loading...</div> : <InvoicerTable InvoiceJson={data} />}</TabPanel>
              <TabPanel>{/* <InvoicerTable InvoiceJson={data} /> */}</TabPanel>
              <TabPanel>
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <InvoicerTable InvoiceJson={data.filter((invoice) => invoice.status === "Unpaid")} />
                )}
              </TabPanel>
              <TabPanel>
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <InvoicerTable InvoiceJson={data.filter((invoice) => invoice.status === "Late")} />
                )}
              </TabPanel>
              <TabPanel></TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </div>
    </>
  );
};

export default InvoiceTabs;
