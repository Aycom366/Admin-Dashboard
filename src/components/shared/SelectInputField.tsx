import { FormControl, FormLabel, Select, SelectProps } from "@chakra-ui/react";

interface Props extends SelectProps {
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const SelectInputField = ({
  label,
  value,
  options,
  handleChange,
  ...rest
}: Props) => {
  return (
    <FormControl w="full">
      <FormLabel mb="5px">{label}</FormLabel>
      <Select
        h="35px"
        value={value}
        border="1.5px solid"
        borderColor="gray.500"
        _focus={{ boxShadow: "none" }}
        onChange={(e) => handleChange(e)}
        {...rest}
        placeholder="Select option"
      >
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInputField;
