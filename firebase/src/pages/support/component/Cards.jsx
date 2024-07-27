import { Flex,Stack,Icon ,Text, Card, HStack, FormControl, FormLabel, FormHelperText, Input, Button} from '@chakra-ui/react';
import { IoIosMailUnread } from "react-icons/io";

const Cards = () => {
  return (
   


    <Flex gap={6}>
      <Stack maxW="24rem">
      
        <Icon as={IoIosMailUnread} boxSize={6} color="p.purple"/>
        <Text textStyle="h1" fontWeight="medium"> Contact Us</Text>
        <Text fontSize="sm" color="black.60"> this is te way where give some feedback to your client </Text>

      </Stack>

      <Card  p="6" borderRadius="1rem" flexGrow={1}>
        <Stack spacing="6">
        <Text fontSize="sm" fontWeight="medium">
            You will receive response to the withing 24 hours
            </Text>
     

      <HStack>

          <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder='Enter the Name' />
          </FormControl>

          <FormControl>
          <FormLabel>SurName</FormLabel>
          <Input placeholder='Enter the Name' />
          </FormControl>

      </HStack>

      <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type='Email' placeholder='Enter the Email' />
          </FormControl>

          <FormControl>
          <FormLabel>Message</FormLabel>
          <Input type='Email' placeholder='Enter the Message' />
          </FormControl>

          <Button>Book a Meeting</Button>

        </Stack>
      </Card>
      
    </Flex>
 
  )
}

export default Cards