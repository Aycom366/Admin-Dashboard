import {
  Box,
  BoxProps,
  Text,
  Flex,
  CloseButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { LinkItems } from "../utils/LinkItems";
import { NavItems } from "./Navs/NavItem";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      transition="all .5s ease"
      {...rest}
    >
      <Flex
        mb={4}
        h="50px"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Temi
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      {LinkItems.map((link, index) => (
        <NavItems onClose={onClose} key={index} link={link} />
      ))}
    </Box>
  );
};

export default SidebarContent;
