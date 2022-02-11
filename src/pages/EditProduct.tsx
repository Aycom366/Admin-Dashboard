import {
  VStack,
  HStack,
  Spacer,
  GridItem,
  SimpleGrid,
  ListItem,
  UnorderedList,
  Button,
  Text,
  Heading,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Chart from "../components/shared/Chart";
import { data } from "../utils";
import ProductEdit from "../components/product/ProductEdit";

const EditProduct = () => {
  const navigate = useNavigate();
  return (
    <VStack p={4} as="section">
      <HStack w="full" alignItems={"center"}>
        <Heading fontSize="2rem">Edit Product</Heading>
        <Spacer />
        <Button
          onClick={() => navigate("/create-product")}
          colorScheme={"green"}
          size="sm"
          color="white"
          bg="green.500"
        >
          Create
        </Button>
      </HStack>
      <SimpleGrid
        h={{ base: "full", sm: "300px" }}
        w="full"
        gridRowGap={4}
        gridColumnGap={8}
        columns={[1, 2, 3, 3]}
      >
        <GridItem h="full" colSpan={{ base: 0, sm: 2 }} w="full">
          <Chart
            nolegend
            title="Product Analytics"
            data={data}
            grid={true}
            dataKey={"activeUser"}
            dataKey2={"offlineUsers"}
          />
        </GridItem>
        <GridItem
          p={4}
          h="full"
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={useColorModeValue("lg", "dark-lg")}
          colSpan={{ base: 0, sm: 1 }}
        >
          <UnorderedList listStyleType={"none"}>
            <ListItem
              w="full"
              alignItems="center"
              d="flex"
              mb="1rem"
              justifyContent="space-between"
            >
              <Avatar />
              <Text fontWeight="700">Airpod 2000</Text>
            </ListItem>
            <ListItem
              w="full"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontWeight="700">id:</Text>
              <Text textAlign="right">123</Text>
            </ListItem>
            <ListItem
              w="full"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontWeight="700">sales:</Text>
              <Text textAlign="right">123</Text>
            </ListItem>
            <ListItem
              w="full"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontWeight="700">active:</Text>
              <Text textAlign="right">yes</Text>
            </ListItem>
            <ListItem
              w="full"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontWeight="700">in stock:</Text>
              <Text textAlign="right">no</Text>
            </ListItem>
          </UnorderedList>
        </GridItem>
      </SimpleGrid>

      <SimpleGrid w="full" gridRowGap={4} gridColumnGap={8} columns={1}>
        <GridItem
          p={4}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={useColorModeValue("lg", "dark-lg")}
          colSpan={{ base: 0, sm: 2 }}
        >
          <ProductEdit />
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default EditProduct;
