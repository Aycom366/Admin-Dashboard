import {
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

interface IFeatureInfo {
  id: number;
  name: string;
  price: string;
  percentage: number;
  info: string;
}

const FeaturedInfo = ({ id, name, price, percentage, info }: IFeatureInfo) => {
  return (
    <VStack
      bg={useColorModeValue("white", "gray.900")}
      borderRadius="lg"
      cursor="pointer"
      p="2rem"
      boxShadow={useColorModeValue("lg", "dark-lg")}
      alignItems="flex-start"
      as="article"
    >
      <Heading fontSize="20px">{name}</Heading>
      <HStack spacing={4}>
        <Text fontWeight={600} fontSize="30px">
          {price}
        </Text>
        <HStack spacing={0}>
          <Text>{percentage}</Text>
          {percentage > 0 ? (
            <MdArrowUpward fontSize={"1.5rem"} color="green" />
          ) : (
            <MdArrowDownward fontSize={"1.5rem"} color="red" />
          )}
        </HStack>
      </HStack>
      <Text fontSize="15px" color="gray.500">
        Compared to last month
      </Text>
    </VStack>
  );
};

export default FeaturedInfo;
