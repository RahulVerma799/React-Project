import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stack,
    Text,
  } from '@chakra-ui/react'

const TranSactiontable = () => {

    const tabedata=[
        {
            amount:"+15000.00",
            status:"pending",
        },
        {
            id:"23HED#$",
            date:"2023-10-21",
            time:"07:45",
                type:{
                    name:"BTC withdraw",
                    tag:"E-tansfer"
                },
            amount:"231254",
            status:"completed"
        },
    ];

  return (
   
    <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Date And Time</Th>
        <Th>Type</Th>
        <Th> Amount</Th>
        <Th>Status</Th>
      </Tr>
    </Thead>
    <Tbody>
      {tabedata.map((data)=>(
        <Tr key={data.id}>
            <Td>{data.id}</Td>
            <Td>
                <Stack>
                    <Text>{data.date}</Text>
                    <Text>{data.time}</Text>
                </Stack>
            </Td>

            <Td>
                <Stack>
                    <Text>{data.name}</Text>
                    <Text>{data.tag}</Text>
                </Stack>
            </Td>

            <Td>
                <Stack>
                    <Text>{data.date}</Text>
                    <Text>{data.time}</Text>
                </Stack>
            </Td>
            <Td>{data.amount}</Td>
            <Td>{data.status}</Td>
        </Tr>
      ))}
    </Tbody>
    <Tfoot>
      
    </Tfoot>
  </Table>
</TableContainer>

  )
}

export default TranSactiontable