
import { Button, Flex, HStack, Icon, Image, Stack, Tag, Text } from "@chakra-ui/react"
import React from 'react'
import { CustomCard } from "../../../Chakra/CustomCard"

const PriceSection = () => {

  const timestapms= ["7:15","8:15","9:25","10:25","11:45"]

  return (
    <CustomCard h="full">
        <Flex justify="space-between" align="start">
            <Stack>
            
            <HStack color="black.80">
                <Text fontSize="14px">Current balance</Text>
            </HStack>
            <HStack>
            <Text textStyle="h2" fontWeight="bold">22.39401000</Text>
           </HStack>
            </Stack>
            <Stack>
            

          
           </Stack>
           
           <HStack>
            <Button>Deposit</Button>
            <Button>Withdraw</Button>
            </HStack>
           
        </Flex>
        <Image w="100%" src="/graph.svg"/>
        <HStack justify={"space-between"}>
            {timestapms.map((timestap)=>(
              <Text key={timestap}  fontSize="sm" color="black.80">{timestap}</Text>
            ))}
        </HStack>
    </CustomCard>
  )
}

export default PriceSection