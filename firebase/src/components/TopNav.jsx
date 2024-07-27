import { Box, Button, Circle, Container, Flex, Heading,HStack,Icon,Menu,MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { GrBold } from "react-icons/gr";
import { ImUserTie } from "react-icons/im";

const TopNav = ({title}) => {
  return (
    <Box bg="white">
  <HStack  maxW="70rem" h="16" justify="space-between" mx="auto">
    
        <Heading>{title}</Heading>

        <Menu>
  <MenuButton as={Button} >
    <Icon fontSize="25px" as={ImUserTie}/>
  </MenuButton>
  <MenuList>
    <MenuItem>Support</MenuItem>
    <MenuItem>Logout</MenuItem>
   
  </MenuList>
</Menu>

    
  </HStack>
  </Box>
  )
} 

export default TopNav