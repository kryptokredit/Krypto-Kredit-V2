import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  Heading,
  Button,
  Link,
  Spacer,
  Select,
  Text,
} from "@chakra-ui/react";
import useInvoiceList from "@/hooks/useInvoiceList";
import InvoicerTable from "@/components/InvoicerTable";
import Head from "next/head";
import {useState, useEffect} from 'react'



const InvoiceTabs = () => {
  const { data, loading, error } = useInvoiceList();
  const [showFullButton, setShowFullButton] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768); 
      setShowFullButton(window.innerWidth > 750); 
    }

    // event listener for window resize
    window.addEventListener('resize', handleResize);

    handleResize();
5
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <Card margin={10} maxWidth={1000}  variant='unstyled'>
          <CardHeader justifyContent='center'></CardHeader>
          <Heading size='md' textAlign='center'>
            My Invoices
          </Heading>
          <Tabs variant="soft-rounded" variantColor="green">
  <TabList>
    <Tab>Invoicer</Tab>
    <Tab>Payer</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Tabs mt={9} variant="enclosed" style={{ width: "80vw" }}>
<TabList mt={2}>
      {isSmallScreen ? (
        
        <div style={{ width: '50%' }}>
  <Select  value={selectedOption} onChange={handleSelectChange}>
    <option value="all">All</option>
    <option value="unsigned">Unsigned</option>
    <option value="unpaid">Unpaid</option>
    <option value="late">Late</option>
    <option value="paid">Paid</option>
  </Select>
</div>


      ) : (
        <>
          <Tab _hover={{ color: 'black', bg: 'green.400' }}>All</Tab>
          <Tab _hover={{ color: 'black', bg: 'green.400' }}>Unsigned</Tab>
          <Tab _hover={{ color: 'black', bg: 'green.400' }}>Unpaid</Tab>
          <Tab _hover={{ color: 'black', bg: 'green.400' }}>Late</Tab>
          <Tab _hover={{ color: 'black', bg: 'green.400' }}>Paid</Tab>
        </>
      )}

      <Spacer />
      
      {/* Rest of your code */}
  
        <Link href="/Invoices/InvoiceForm">
          <Button mb={1} size="md" colorScheme="whatsapp" variant="solid">
            {showFullButton ? '+ Create an Invoice' : <Text truncate>+</Text>}
          </Button>
        </Link>
     
    </TabList>
  <TabPanels style={{width: '80vw'}}>
    <TabPanel>
      {loading ? <div>Loading...</div> : <InvoicerTable InvoiceJson={data} />}
    </TabPanel >
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
          </div>
    </TabPanel>
    <TabPanel>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Tabs mt={9} variant="enclosed" style={{ width: "80vw" }}>
<TabList mt={2}>
      {isSmallScreen ? (
        
        <div style={{ width: '50%' }}>
  <Select  value={selectedOption} onChange={handleSelectChange}>
    <option value="all">All</option>
    <option value="unsigned">Unsigned</option>
    <option value="unpaid">Unpaid</option>
    <option value="late">Late</option>
    <option value="paid">Paid</option>
  </Select>
</div>


      ) : (
        <>
          <Tab _hover={{ color: 'black', bg: 'green.400' }}>All</Tab>
          <Tab _hover={{ color: 'black', bg: 'green.400' }}>Unsigned</Tab>
          <Tab _hover={{ color: 'black', bg: 'green.400' }}>Unpaid</Tab>
          <Tab _hover={{ color: 'black', bg: 'green.400' }}>Late</Tab>
          <Tab _hover={{ color: 'black', bg: 'green.400' }}>Paid</Tab>
        </>
      )}

      <Spacer />
      
 
  

     
    </TabList>
  <TabPanels style={{width: '80vw'}}>
    <TabPanel>
      {loading ? <div>Loading...</div> : <InvoicerTable InvoiceJson={data} />}
    </TabPanel >
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
          </div>
    </TabPanel>
  </TabPanels>
</Tabs>
        

        </Card>
      </div>
    </>
  );
};

export default InvoiceTabs;
