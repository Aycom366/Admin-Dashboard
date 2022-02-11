import { HStack, Avatar, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  name: string;
  img: string;
  job: string;
  children?: React.ReactNode;
}

const UserProfile = ({ name, img, job, children }: Props) => {
  return (
    <HStack spacing={4} w="full">
      <Avatar src={img} />
      <VStack w="full" flex={1} alignItems="flex-start" spacing={0}>
        <Text fontWeight={700} fontSize="14px">
          {name}
        </Text>
        <Text fontSize="14px">{job}</Text>
      </VStack>
      {children && <>{children}</>}
    </HStack>
  );
};

export default UserProfile;
