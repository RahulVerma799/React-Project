import { Flex,Stack,Text, Box, Icon, Grid, Divider, Button } from "@chakra-ui/react"
import { CustomCard } from "../../../Chakra/CustomCard"
import { PiCurrencyInrBold } from "react-icons/pi";
import { FaDollarSign } from "react-icons/fa";
import { Fragment } from "react";


const RecentTransaction = () => {
    const transaction = [
        {
            id:"1",
            icon:PiCurrencyInrBold ,
            text:"INR deposit",
            amount:"Rs 8,10,23",
            date:"2022-10-9 12:39"
        },
        {
            id:"2",
        icon:FaDollarSign,
        text:"BTC Sell",
        amount:"- 12.48513391 BTC",
        date:"2022-10-9 12:30"
        },
        {
            id:"3",
            icon:PiCurrencyInrBold,
            text:"INR DEPOSIT",
            amount:"Rs 81,123",
            date:"2022-10-9 12:30"
        }
    ]

  return (
    <CustomCard h="full"><Text>Transaction</Text>
    
    <Stack spacing={3}>
        {transaction.map((trans,i)=>(
           <Fragment key={trans.id} > 
           {i != 0 && <Divider />}
             <Flex gap="4">
                <Grid placeItems="center" bg="black.5" boxSize={10} borderRadius="full" >
                    <Icon as={trans.icon}/>
                </Grid>
                <Flex justify="space-between" w="full">
                    <Stack spacing={0} justify="space-between">
                        <Text textStyle="h6" color="black.80">
                            {trans.text}
                        </Text>

                        <Text fontSize="sm" color="black.80">
                            {trans.date}
                        </Text>

                    </Stack>
                    <Text fontWeight="800" fontSize="25px"> {trans.amount}</Text>
                </Flex>
            </Flex>
           </Fragment>
        ))}
        </Stack>
        <Button w="full" colorScheme="gray"> View All</Button>
    </CustomCard>
   
  )
}

export default RecentTransaction