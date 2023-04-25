import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import InvoicerInvoiceList from './InvoicerInvoiceList'

const InvoiceTabs = () => {
    return(
<div>
<Tabs variant='enclosed'>
  <TabList>
    <Tab>Unpaid</Tab>
    <Tab>Paid</Tab>
    <Tab>Outstanding</Tab>
    <Tab>All</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <InvoicerInvoiceList />
    </TabPanel>
    <TabPanel>
<InvoicerInvoiceList />
    </TabPanel>
    <TabPanel>
<InvoicerInvoiceList />
    </TabPanel>
    <TabPanel>
<InvoicerInvoiceList />
    </TabPanel>
  </TabPanels>
</Tabs>
</div>
    )


}

export default InvoiceTabs