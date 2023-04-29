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
import useValidatorList from "@/hooks/useValidatorList";
import ValidatorTable from "@/components/ValidatorTable";

const ValidatorTabs = () => {
  const { data, loading, error } = useValidatorList();
  console.log(data);

  return (
    <div className='container'>
      <Card margin={10} maxWidth={1000} variant='unstyled'>
        <CardHeader justifyContent='center'></CardHeader>
        <Heading size='md' textAlign='center'>
          Validator List
        </Heading>
        <Tabs mt={7} width={1000} variant='enclosed'>
          <TabList>
            <Tab>All</Tab>
            <Spacer />
            <Link href='/Validators/ValidatorForm'>
              <Button mb={1} size='md' colorScheme='whatsapp' variant='solid'>
                + Validator Form
              </Button>
            </Link>
          </TabList>
          <TabPanels>
            <TabPanel>{loading ? <div>Loading...</div> : <ValidatorTable ValidatorJson={data} />}</TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </div>
  );
};

export default ValidatorTabs;
