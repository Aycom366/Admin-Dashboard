import {
  VStack,
  Heading,
  HStack,
  Avatar,
  Text,
  Button,
} from "@chakra-ui/react";
import { BsEyeFill } from "react-icons/bs";
import { NewJoinUser as newJoinuser } from "../../models";
import UserProfile from "./UserProfile";

interface INewJoinUserProps {
  newJoin: newJoinuser[];
}

const NewJoinUser = ({ newJoin }: INewJoinUserProps) => {
  return (
    <VStack
      spacing={4}
      padding={4}
      alignItems="flex-start"
      w="full"
      as="section"
    >
      <Heading fontSize="20px">New Join User</Heading>
      {newJoin.map(({ name, id, img, job }) => (
        <UserProfile key={id} name={name} img={img} job={job}>
          <Button leftIcon={<BsEyeFill />} variant="solid">
            Display
          </Button>
        </UserProfile>
      ))}
    </VStack>
  );
};

export default NewJoinUser;
