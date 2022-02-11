import { Input, InputProps, FormControl, FormLabel } from "@chakra-ui/react";

interface Props extends InputProps {
  label?: string;
  value?: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const BorderedInputField = ({ value, label, handleChange, ...rest }: Props) => {
  return (
    <FormControl w="full">
      <FormLabel fontSize={"14px"} color="gray.500" mb="5px" fontWeight="500">
        {label}
      </FormLabel>
      <Input
        w="full"
        value={value}
        fontSize="14px"
        height="auto"
        p="5px 10px"
        border="1.5px solid"
        borderColor="gray.500"
        _focus={{ boxShadow: "none" }}
        onChange={(e) => handleChange(e)}
        {...rest}
      />
    </FormControl>
  );
};

export default BorderedInputField;
