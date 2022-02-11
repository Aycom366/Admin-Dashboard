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
import SelectInputField from "../shared/SelectInputField";

interface Forms {
  productName: string;
  inStock: string;
  isActive: string;
  pic?: File;
}

const ProductEdit = () => {
  const [forms, setForms] = useState<Forms>({
    productName: "aycom366",
    inStock: "Yes",
    isActive: "Yes",
    pic: undefined,
  });

  const imageRef = useRef<HTMLInputElement>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (e.target.files as FileList)[0];
    if (file) setForms({ ...forms, pic: file });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForms({
      ...forms,
      [e.target.name]: e.target.value,
    });
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
            value={forms.productName}
            label="Product Name:"
            name="productName"
          />
          <SelectInputField
            value={forms.inStock}
            handleChange={handleChange}
            options={["Yes", "No"]}
            label="In Stock:"
          />
          <SelectInputField
            value={forms.isActive}
            handleChange={handleChange}
            options={["Yes", "No"]}
            label="Active:"
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
              onChange={(e) => handleImage(e)}
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

export default ProductEdit;
