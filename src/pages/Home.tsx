import {
  Box,
  GridItem,
  SimpleGrid,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import FeaturedInfo from "../components/Home/FeaturedInfo";
import Chart from "../components/shared/Chart";
import NewJoinUser from "../components/shared/NewJoinUser";
import Transaction from "../components/shared/Transaction";
import { data, featureInfo, newJoin } from "../utils";

const Home = () => {
  return (
    <VStack overflow="hidden" w="full" h="full">
      <SimpleGrid
        gridColumnGap={[0, 4, 8, 8]}
        gridRowGap={2}
        columns={[1, 2, 3, 3]}
        w="full"
      >
        {featureInfo.map((info) => (
          <FeaturedInfo key={info.id} {...info} />
        ))}
      </SimpleGrid>
      <Box w="full" h="500px">
        <Chart
          title="Users Analytics"
          data={data}
          grid={true}
          dataKey={"activeUser"}
          dataKey2={"offlineUsers"}
        />
      </Box>
      <SimpleGrid gridGap={4} w="full" columns={[1, 1, 1, 3]}>
        <GridItem
          w="full"
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={useColorModeValue("lg", "dark-lg")}
          colSpan={1}
        >
          <NewJoinUser newJoin={newJoin} />
        </GridItem>
        <GridItem
          w="full"
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={useColorModeValue("lg", "dark-lg")}
          colSpan={{ base: 0, sm: 2 }}
        >
          <Transaction />
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Home;
