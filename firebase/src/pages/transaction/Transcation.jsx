import { Button, Card, Flex, Tag } from "@chakra-ui/react"
import LayoutCom from "../../components/LayoutCom"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TranSactiontable from "./Component/TranSactiontable";

const Transcation = () => {

  const tabs=[
    {
      name:"All",
      count:349,
    },

    {
      name:"Deposit",
      count:349,
    },

    {
      name:"Withdraw",
      count:349,
    },

    {
      name:"Trade",
      count:349,
    },
  ]


  return (
    <LayoutCom> 
      <Flex justify="end" mt="6"> 
        <Button >
        Expert CSV</Button>
         </Flex>
      <Card mt="2"> 

      <Tabs>
  <TabList py="4">
    {tabs.map((tab)=>(
      <Tab key={tab.name} display="flex" gap="4" >{tab.name}
      <Tag colorScheme="gray" borderRadius="full">{tab.count}</Tag></Tab>
    ))}
  </TabList>

  <TabPanels>
    <TabPanel>
      <TranSactiontable/>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Card>
      </LayoutCom>
  )
};

export default Transcation