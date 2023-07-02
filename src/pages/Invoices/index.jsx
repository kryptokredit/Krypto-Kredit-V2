import { Tabs, TabList, TabPanels, Tab, TabPanel, Card, CardHeader, Heading, } from "@chakra-ui/react";
import useInvoiceList from "@/hooks/useInvoiceList";
import InvoicerTab from "@/components/invoicerTab";
import PayerTab from "@/components/payerTab";
import Head from "next/head";
import { useState, useEffect } from 'react';

const InvoiceTabs = () => {
  const { data, loading, error } = useInvoiceList();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [showFullButton, setShowFullButton] = useState(true);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      setShowFullButton(window.innerWidth > 750);
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
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
        <Card margin={10} maxWidth={1000} variant='unstyled'>
          <CardHeader justifyContent='center' />
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
                <InvoicerTab 
                  isSmallScreen={isSmallScreen}
                  selectedOption={selectedOption}
                  handleSelectChange={handleSelectChange}
                  loading={loading}
                  data={data}
                  showFullButton={showFullButton}
                />
              </TabPanel>
              <TabPanel>
                <PayerTab
                  isSmallScreen={isSmallScreen}
                  selectedOption={selectedOption}
                  handleSelectChange={handleSelectChange}
                  loading={loading}
                  data={data}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </div>
    </>
  );
};

export default InvoiceTabs;
