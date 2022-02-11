import {
  VStack,
  HStack,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { FiCalendar, FiMail, FiMap, FiPhone, FiUser } from "react-icons/fi";
import UserProfile from "../shared/UserProfile";

const Profile = () => {
  return (
    <VStack h="full" spacing={8} alignItems={"flex-start"} w="full">
      <UserProfile
        name="Bamigboye Ayomide"
        img="https://avatars.githubusercontent.com/u/42998943?v=4"
        job="FullStack Dev"
      />
      <VStack spacing={1} w="full" alignItems="flex-start">
        <Text color="gray.500" fontWeight={700} fontSize="14px">
          Account Details
        </Text>
        <UnorderedList listStyleType={"none"}>
          <ListItem>
            <VStack spacing={2} w="full" alignItems={"flex-start"}>
              <HStack>
                <FiUser /> <Text>annabeck99</Text>
              </HStack>
              <HStack>
                <FiCalendar /> <Text>10.12.2022</Text>
              </HStack>
            </VStack>
          </ListItem>
        </UnorderedList>
      </VStack>
      <VStack spacing={1} w="full" alignItems="flex-start">
        <Text color="gray.500" fontWeight={700} fontSize="14px">
          Contact
        </Text>
        <UnorderedList listStyleType={"none"}>
          <ListItem>
            <VStack spacing={2} w="full" alignItems={"flex-start"}>
              <HStack>
                <FiPhone /> <Text>+234-81-062578884</Text>
              </HStack>
              <HStack>
                <FiMail /> <Text>bamigboyeayomide200@gmail.com</Text>
              </HStack>
              <HStack>
                <FiMap /> <Text>Ibadan, Nigeria.</Text>
              </HStack>
            </VStack>
          </ListItem>
        </UnorderedList>
      </VStack>
    </VStack>
  );
};

export default Profile;
