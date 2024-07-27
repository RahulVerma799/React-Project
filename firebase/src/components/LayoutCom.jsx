import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidenav from './Sidenav'
import TopNav from './TopNav'
import Sidedrawer from './Sidedrawer'

const LayoutCom = ({title , children}) => {
  const {isOpen,onClose,onOpen} = useDisclosure();
  return (
    <div>
         <Flex>
        <Sidenav/>
        <Sidedrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
        <Box flexGrow={1}>
        <TopNav title={title}/>
        <Container mt="5" maxW="70rem" bg="">{children}
        </Container>
        </Box>
        </Flex>
    </div>
  )
}

export default LayoutCom