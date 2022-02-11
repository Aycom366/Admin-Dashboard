import { IconButton } from "@chakra-ui/react";
import { IconItems, NavbarItemsProps } from "../../utils/NavbarIcons";
import { Flex, Text } from "@chakra-ui/react";

interface IconItemsProps {
  handleClick: () => void;
  icon: NavbarItemsProps;
}

export const IconItem = ({ handleClick, icon }: IconItemsProps) => {
  return (
    <>
      <Flex alignItems="center" h="full" position="relative">
        <IconButton
          cursor="pointer"
          fontSize="1rem"
          variant="ghost"
          aria-label="open menu"
          onClick={handleClick}
          icon={<icon.icon />}
        />
        <Flex
          d={`${icon.url.startsWith("/setting") ? "none" : "block"}`}
          w="15px"
          h="15px"
          borderRadius="full"
          alignItems="center"
          justifyContent="center"
          top="10%"
          bg="red"
          left="50%"
          position="absolute"
          fontSize="15px"
          color="white"
        >
          <Text
            w="full"
            h="full"
            alignItems="center"
            justifyContent="center"
            display={"flex"}
            textAlign={"center"}
          >
            2
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default IconItems;
