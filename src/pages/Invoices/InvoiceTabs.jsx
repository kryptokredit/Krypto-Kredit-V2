import InvoicerTable from '@/components/InvoicerTable'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Card, CardHeader, Heading, Button, Link } from '@chakra-ui/react'


const InvoiceTabs = () => {
    return(
  <div className='container'>
     <Card margin={10} maxWidth={1000} variant='unstyled'>
        <CardHeader justifyContent='center'></CardHeader>
<Heading size='md' textAlign='center'>
            My Invoices
          </Heading>
          <div justify='end'>
          <Link  href='/Invoices/InvoiceForm'> <Button size='md' width={170} colorScheme='whatsapp' variant='solid' justifyContent='center'>
           + Create an Invoice
          </Button></Link>
          </div>
          
         
        
<Tabs mt={10} width={1000} variant='enclosed'>
  <TabList >
    <Tab>Unpaid</Tab>
    <Tab>Paid</Tab>
    <Tab>Outstanding</Tab>
    <Tab>All</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <InvoicerTable />
    </TabPanel>
    <TabPanel>
<InvoicerTable />
    </TabPanel>
    <TabPanel>
<InvoicerTable />
    </TabPanel>
    <TabPanel>
<InvoicerTable />
    </TabPanel>
  </TabPanels>
</Tabs>
</Card>
      </div>




 

    )


}

export default InvoiceTabs