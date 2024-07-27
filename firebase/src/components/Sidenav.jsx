import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import Dashboard from "../pages/dashboard/Dashboard";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";


const Sidenav = () => {

    const navBar =[
        {
            icon:RxDashboard,
            text:"Dashboard",
            link:"/",
        },
        {
            icon:GrTransaction,
            text:"Transaction",
            link:"/transaction"
        },
        {
            icon:MdOutlineSupportAgent,
            text:"Support",
            link:"/Support"
        },
    ];
  return (
    <>
    <Stack bg="white" justify="space-between" boxShadow="sm" maxW="18rem" h="100vh"
    display={{
        base:"none",
        lg:"flex",
    }}
    >
        <Box>
        <Heading textAlign="center" fontSize="20px" pt="3.5rem">React Project</Heading>
        <Box mt="6" mx="3">
       {navBar.map((nav)=>(
        <Link to={nav.link} key={nav.text} > 
        <HStack
        borderRadius="10px"
        key={nav.text} py="3" px="4" _hover={{
            bg:"#f3f3f7",
            color:"#171717",
            border:"#",
            
            transform:"scale(1.1)"

        }}
        color="#8998a4"
        >
            <Icon as={nav.icon}/>
            <Text fontSize="14px">{nav.text}</Text>

        </HStack> </Link>
       
       ))}

       </Box>
       </Box>


       <Box>
       
        <HStack
        borderRadius="10px"
         py="3" px="4" _hover={{
            bg:"#f3f3f7",
            color:"#171717",
            border:"#"

        }}
        color="#8998a4"
        >

            <Icon as={MdOutlineSupportAgent}/>
            <Text fontSize="14px" > Support</Text>

        </HStack>
       
       </Box>
    </Stack>
    </>
  )
}

export default Sidenav