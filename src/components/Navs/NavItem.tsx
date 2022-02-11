import { FlexboxProps, Text, Icon, Flex, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GroupLinkItems } from "../../utils/LinkItems";

interface NavItemProps extends FlexboxProps {
  link: GroupLinkItems;
  onClose: () => void;
}

export const NavItems = ({ link, onClose, ...rest }: NavItemProps) => (
  <VStack mx="4" mb={4} alignItems="flex-start" spacing={1}>
    <Text fontWeight={700} color="gray.400" fontSize="12px">
      {link.groupName}
    </Text>
    {link.child.map(({ name, icon, url }, index) => (
      <Link
        key={index}
        to={url}
        onClick={onClose}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <Flex
          w="full"
          fontSize={"15px"}
          align="center"
          borderRadius="sm"
          role="group"
          py="2px"
          cursor="pointer"
          _hover={{
            bg: "gray.200",
            color: "black",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="15px"
              _groupHover={{
                color: "black",
              }}
              as={icon}
            />
          )}
          {name}
        </Flex>
      </Link>
    ))}
  </VStack>
);
