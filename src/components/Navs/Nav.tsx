import {
  Avatar,
  Box,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { FiChevronDown, FiMenu } from "react-icons/fi";
import { IconItems } from "../../utils/NavbarIcons";
import { useNavigate } from "react-router-dom";
import { IconItem } from "./IconItems";
import { BsFillCloudMoonFill, BsSunFill } from "react-icons/bs";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const Nav = ({ onOpen, ...rest }: MobileProps) => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height={"50px"}
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Temi
      </Text>

      <HStack alignItems="center" spacing={0}>
        {IconItems.map((icon, index) => (
          <IconItem
            key={index}
            icon={icon}
            handleClick={() => navigate(icon.url)}
          />
        ))}
        <IconButton
          pb={{ base: 0, md: 1 }}
          cursor="pointer"
          onClick={toggleColorMode}
          variant="ghost"
          fontSize="1rem"
          aria-label="toggle color mode"
          icon={colorMode === "light" ? <BsFillCloudMoonFill /> : <BsSunFill />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton transition="all 0.3s" _focus={{ boxShadow: "none" }}>
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Nav;
