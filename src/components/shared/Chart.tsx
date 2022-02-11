import { Heading, useColorModeValue, VStack } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Props {
  title: string;
  data: any;
  dataKey: string;
  dataKey2?: string;
  grid: boolean;
}

const Chart = ({ title, data, dataKey, dataKey2, grid }: Props) => {
  return (
    <VStack
      p={{ base: "2rem 1rem", sm: "2rem" }}
      bg={useColorModeValue("white", "gray.900")}
      alignItems={"flex-start"}
      w="full"
      h="full"
      boxShadow={useColorModeValue("lg", "dark-lg")}
      as="section"
      spacing={8}
    >
      <Heading fontSize="2xl" fontWeight="bold">
        {title}
      </Heading>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid && <CartesianGrid strokeDasharray="3 3" />}

          <XAxis dataKey="name" />

          {/* Y axios */}
          <YAxis />

          {/* Tooltop */}
          <Tooltip />
          <Legend />

          {/* The line chart itself */}
          <Line
            type="monotone"
            dataKey={dataKey2}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </VStack>
  );
};

export default Chart;
