import {
  Heading,
  VStack,
  Flex,
  Button,
  Square,
  Img,
  HStack,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import InputField from "../shared/InputField";

interface Forms {
  userName: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  pic?: File;
}

const Edit = () => {
  const [forms, setForms] = useState<Forms>({
    userName: "aycom366",
    fullName: "ayomide bamigboye",
    email: "bamigboyeayomide200@gmail.com",
    phone: "+234-81-062578884",
    address: "Ibadan, Nigeria",
    pic: undefined,
  });

  const imageRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    if (e.target.type === "file") {
      const file: File = (e.target.files as FileList)[0];
      if (file) setForms({ ...forms, pic: file });
    } else {
      setForms({
        ...forms,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <VStack spacing={4} alignItems="flex-start" w="full" as="section">
      <Heading fontSize="1.5rem">Edit</Heading>
      <SimpleGrid
        gridRowGap={4}
        gridColumnGap={8}
        columns={[1, 1, 2]}
        h="full"
        w="full"
      >
        <VStack h="full" w="full">
          <InputField
            handleChange={handleChange}
            value={forms.userName}
            label="Username:"
            name="userName"
          />
          <InputField
            handleChange={handleChange}
            value={forms.fullName}
            label="Full Name:"
            name="fullName"
          />
          <InputField
            handleChange={handleChange}
            value={forms.email}
            label="Email:"
            name="email"
          />
          <InputField
            handleChange={handleChange}
            value={forms.phone}
            label="Phone:"
            name="phone"
          />
          <InputField
            handleChange={handleChange}
            value={forms.address}
            label="Address:"
            name="address"
          />
        </VStack>
        <Flex
          margin={{ base: "auto 0 0 auto" }}
          maxW={{ base: "full", sm: "200px" }}
          w="full"
          alignItems={"flex-end"}
          justifyContent={"space-between"}
          h="full"
          flexDirection={"column"}
        >
          <HStack
            mb={4}
            w={{ base: "full", sm: "auto" }}
            justifyContent={{ base: "center", sm: "flex-end" }}
          >
            <Square overflow="hidden" borderRadius="10px" size="100px">
              <Img
                w="full"
                h="full"
                objectFit="cover"
                alt="userName"
                src={
                  forms.pic
                    ? URL.createObjectURL(forms.pic)
                    : "https://avatars.githubusercontent.com/u/42998943?v=4"
                }
              />
            </Square>
            {/* the input file area */}
            <input
              ref={imageRef}
              name="pic"
              onChange={(e) => handleChange(e)}
              style={{ display: "none" }}
              type="file"
              multiple={false}
              accept="image/*"
            />
            <IconButton
              onClick={() => imageRef.current?.click()}
              aria-label="Upload Img"
              icon={<FiUpload />}
            />
          </HStack>

          <Button w="full" size="xs" bg="blue.500" colorScheme="blue">
            Update
          </Button>
        </Flex>
      </SimpleGrid>
    </VStack>
  );
};

export default Edit;
