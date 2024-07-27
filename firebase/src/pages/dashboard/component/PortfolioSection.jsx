import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react"
import { CiCircleInfo } from "react-icons/ci";
import { theme } from "../../../theme";



const PortfolioSection = () => {
  return (
    <HStack justify="space-between" bg="white" borderRadius="xl" p="6"
   
    >
        <HStack spacing={35}  align={{
        base:"flex-start",
        xl:"column",
    }}
    flexDir={{
        base:"columns",
        xl:"row",
    }}>
        <Stack>
            <HStack color="black.80">
                <Text fontSize="14px">Enter Portofolio Value</Text>
                <Icon
            as={CiCircleInfo}
            />
            </HStack >
            <Text textStyle="h2" fontWeight="bold">₹ 112,312.24</Text>
           
        </Stack>

        <Stack>
            
            <HStack color="black.80">
                <Text fontSize="14px">Wallet balance</Text>
            </HStack>
            <HStack>
            <Text textStyle="h2" fontWeight="bold">22.39401000</Text><Tag>BTC</Tag>
           </HStack>
            </Stack>
            <Stack>
            <HStack color="black.80">
                <Text fontSize="14px">.</Text>
            </HStack>

           <HStack>
            <Text textStyle="h2" fontWeight="bold">₹ 1,123</Text><Tag>INR</Tag>
           </HStack>
           </Stack>
            </HStack>
        <HStack>
            <Button>Deposit</Button>
            <Button>Withdraw</Button>
           
        </HStack>

       

    </HStack>
  )
}

export default PortfolioSection