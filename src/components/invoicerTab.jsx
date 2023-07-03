import { 
    Tabs, 
    TabList, 
    Tab, 
    TabPanels, 
    TabPanel, 
    Button, 
    Select, 
    Text, 
    Link, 
    Spacer 
  } from "@chakra-ui/react";
  import InvoicerTable from './InvoicerTable';
  
  const InvoicerTab = ({ isSmallScreen, selectedOption, handleSelectChange, loading, data, showFullButton }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Tabs mt={9} variant="enclosed" style={{ width: "80vw" }}>
          <TabList mt={2}>
            {isSmallScreen ? (
              <div style={{ width: '50%' }}>
                <Select value={selectedOption} onChange={handleSelectChange}>
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
  
            <Link href="/Invoices/InvoiceForm">
              <Button mb={1} size="md" colorScheme="whatsapp" variant="solid">
                {showFullButton ? '+ Create an Invoice' : <Text truncate>+</Text>}
              </Button>
            </Link>
          </TabList>
          <TabPanels style={{width: '80vw'}}>
            <TabPanel>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <InvoicerTable 
                  InvoiceJson={
                    selectedOption === 'all'
                    ? data
                    : data.filter((invoice) => invoice.status.toLowerCase() === selectedOption)
                  } 
                />
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    );
  };
  
  export default InvoicerTab;
  