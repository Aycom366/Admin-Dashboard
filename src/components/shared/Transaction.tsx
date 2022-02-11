import {
  VStack,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  HStack,
  Avatar,
  Box,
  Text,
  Center,
} from "@chakra-ui/react";
import { Status } from "../../models";
import { customerTransaction } from "../../utils";

const Transaction = () => {
  const checkStatus = (status: string) => {
    if (status === Status.Pending) return "blue";
    if (status === Status.Rejected) return "red";
    if (status === Status.Approved) return "green";
  };

  const checkStatusColor = (status: string) => {
    if (status === Status.Pending) return "lightBlue";
    if (status === Status.Rejected) return "lightRed";
    if (status === Status.Approved) return "lightGreen";
  };

  return (
    <VStack overflowX="auto" spacing={4} p={4} w="full" alignItems="flex-start">
      <Heading fontSize={"2xl"}>Latest Transaction</Heading>
      <Table size="sm" variant="simple">
        <Thead>
          <Tr>
            <Th>Customer</Th>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody w="full">
          {customerTransaction.map(
            ({ date, img, amount, id, name, status }) => (
              <Tr key={id}>
                <Td>
                  <HStack w="full">
                    <Avatar size="sm" src={img} />
                    <Text>{name}</Text>
                  </HStack>
                </Td>
                <Td>{date.toLocaleDateString()}</Td>
                <Td>${amount}</Td>
                <Td>
                  <Center
                    borderRadius="lg"
                    color={checkStatusColor(status)}
                    bg={checkStatus(status)}
                    p="5px"
                  >
                    {status}
                  </Center>
                </Td>
              </Tr>
            )
          )}
        </Tbody>
      </Table>
    </VStack>
  );
};

export default Transaction;
