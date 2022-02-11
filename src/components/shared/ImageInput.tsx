import { Input, InputProps, FormControl, FormLabel } from "@chakra-ui/react";

interface Props extends InputProps {
  label?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageInput = ({ label, value, handleChange, ...rest }: Props) => {
  return (
    <FormControl w="full">
      <FormLabel fontSize={"14px"} color="gray.500" mb="0" fontWeight="500">
        {label}
      </FormLabel>
      <Input
        type="file"
        {...rest}
        border={"none"}
        h="auto"
        borderBottom="1px solid"
        borderBottomColor="gray.500"
        _focus={{ boxShadow: "none" }}
        padding="0px 0px 3px 0px"
        _hover={{ borderBottomColor: "gray.500" }}
        fontSize="14px"
        borderRadius="0"
        onChange={(e) => handleChange(e)}
        {...rest}
      />
    </FormControl>
  );
};

export default ImageInput;
