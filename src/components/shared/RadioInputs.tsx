import {
  FormControl,
  FormLabel,
  Stack,
  Radio,
  RadioGroup,
  RadioProps,
} from "@chakra-ui/react";

interface Props extends RadioProps {
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: string[];
}

const RadioInputs = ({
  label,
  values,
  value,
  handleChange,
  ...rest
}: Props) => {
  return (
    <FormControl w="full">
      <FormLabel mb="5px">{label}</FormLabel>
      <RadioGroup>
        <Stack direction="row">
          {values.map((item, index) => (
            <Radio
              key={index}
              onChange={(e) => handleChange(e)}
              checked={value === `${item}`}
              value={item}
              {...rest}
            >
              {item}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  );
};

export default RadioInputs;
