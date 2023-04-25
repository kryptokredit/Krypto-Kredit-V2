import InvoicerTableAll from '@/components/InvoicerTableAll'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Card, CardHeader, Heading, Button, Link, Flex, Spacer } from '@chakra-ui/react'

const InvoiceTabs = () => {
  return (
    <div className='container'>
      <Card margin={10} maxWidth={1000} variant='unstyled'>
        <CardHeader justifyContent='center'></CardHeader>
        <Heading size='md' textAlign='center'>
          My Invoices
        </Heading>
        <Box mt={7} width={1000}  maxW={{base: '100%', md: '1000px'}} overflowX='auto'>
          <Tabs variant='enclosed'>
            <TabList overflowX='scroll' whiteSpace='nowrap' w={{base: '100%', md: 'auto'}}>
              <Tab>Unpaid</Tab>
              <Tab>Paid</Tab>
              <Tab>Outstanding</Tab>
              <Tab>All</Tab>
              <Spacer />
              <Link href='/Invoices/InvoiceForm'>
                <Button mb={1} size='md' colorScheme='whatsapp' variant='solid'>+ Create an Invoice</Button>
              </Link>
            </TabList>
            <TabPanels>
              <TabPanel>
                <InvoicerTableAll />
              </TabPanel>
              <TabPanel>
                <InvoicerTableAll />
              </TabPanel>
              <TabPanel>
                <InvoicerTableAll />
              </TabPanel>
              <TabPanel>
                <InvoicerTableAll />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Card>
    </div>
  )
}

export default InvoiceTabs
