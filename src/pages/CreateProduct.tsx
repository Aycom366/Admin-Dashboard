import {
  VStack,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BorderedInputField from "../components/shared/BorderedInputField";
import ImageInput from "../components/shared/ImageInput";
import SelectInputField from "../components/shared/SelectInputField";
import { ProductModel } from "../models";

const CreateProduct = () => {
  const [forms, setForms] = useState<ProductModel>({
    productName: "",
    inStock: "",
    active: "",
    pic: undefined,
  });

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
    <VStack
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={useColorModeValue("lg", "dark-lg")}
      p={4}
      w="full"
      h="full"
      as="section"
      alignItems="flex-start"
    >
      <Heading fontSize="2rem">New Product</Heading>
      <SimpleGrid
        gridColumnGap={8}
        gridRowGap={4}
        w="full"
        maxW="500px"
        columns={1}
      >
        <BorderedInputField
          placeholder="john"
          label="Product Name"
          name="productName"
          handleChange={handleChange}
        />
        <BorderedInputField
          placeholder="price"
          label="Price"
          name="price"
          handleChange={handleChange}
        />
        <BorderedInputField
          placeholder="123"
          label="Stock"
          name="inStock"
          handleChange={handleChange}
        />
        <SelectInputField
          value={forms.active}
          name="active"
          label="Active"
          options={["Yes", "No"]}
          handleChange={handleChange}
        />
        <ImageInput name="pic" label="Image" handleChange={handleImage} />
      </SimpleGrid>
      <Button
        color="white"
        size="sm"
        w="full"
        maxW="200px"
        bg="blue.700"
        colorScheme="blue"
      >
        Create
      </Button>
    </VStack>
  );
};

export default CreateProduct;
