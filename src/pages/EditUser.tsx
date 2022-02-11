import {
  VStack,
  HStack,
  Spacer,
  GridItem,
  SimpleGrid,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Edit from "../components/User/Edit";
import Profile from "../components/User/Profile";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  return (
    <VStack p={4} as="section">
      <HStack w="full" alignItems={"center"}>
        <Heading fontSize="2rem">Edit User</Heading>
        <Spacer />
        <Button
          onClick={() => navigate("/create-user")}
          colorScheme={"green"}
          size="sm"
          color="white"
          bg="green.500"
        >
          Create
        </Button>
      </HStack>
      <SimpleGrid
        w="full"
        gridRowGap={4}
        gridColumnGap={8}
        columns={[1, 2, 3, 3]}
      >
        <GridItem
          p={4}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={useColorModeValue("lg", "dark-lg")}
          colSpan={{ base: 0, sm: 1 }}
        >
          <Profile />
        </GridItem>
        <GridItem
          p={4}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={useColorModeValue("lg", "dark-lg")}
          colSpan={{ base: 0, sm: 2 }}
        >
          <Edit />
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default EditUser;
