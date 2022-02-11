import {
  VStack,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BorderedInputField from "../components/shared/BorderedInputField";
import RadioInputs from "../components/shared/RadioInputs";
import SelectInputField from "../components/shared/SelectInputField";

const CreateUser = () => {
  const [forms, setForms] = useState({
    userName: "",
    fullName: "",
    password: "",
    address: "",
    email: "",
    phone: "",
    active: "",
    gender: "",
  });

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
      <Heading fontSize="2rem">New User</Heading>
      <SimpleGrid
        gridColumnGap={8}
        gridRowGap={4}
        w="full"
        maxW="700px"
        columns={[1, 2]}
      >
        <BorderedInputField
          placeholder="john"
          label="Username"
          name="userName"
          handleChange={handleChange}
        />
        <BorderedInputField
          placeholder="john Doe"
          label="Full Name"
          name="fullName"
          handleChange={handleChange}
        />
        <BorderedInputField
          placeholder="johnDoe@gmail.com"
          label="Email"
          name="email"
          handleChange={handleChange}
        />
        <BorderedInputField
          placeholder="password"
          label="Password"
          type="password"
          name="password"
          handleChange={handleChange}
        />
        <BorderedInputField
          placeholder="+2348106257884"
          label="Phone"
          name="phone"
          handleChange={handleChange}
        />
        <BorderedInputField
          placeholder="Ibadan, Nigeria"
          label="Address"
          name="address"
          handleChange={handleChange}
        />
        <RadioInputs
          handleChange={handleChange}
          label="Gender"
          name="gender"
          values={["Male", "Female", "Other"]}
          value={forms.gender}
        />
        <SelectInputField
          value={forms.active}
          name="active"
          label="Active"
          options={["Yes", "No"]}
          handleChange={handleChange}
        />
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

export default CreateUser;
