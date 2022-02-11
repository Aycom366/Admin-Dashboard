import { LinkItems } from "./LinkItems";
import { data, newJoin, customerTransaction } from "./dummyData";

const featureInfo = [
  {
    id: 0,
    name: "Revenue",
    price: "$2,250",
    percentage: -11.4,
    info: "compared to last month",
  },
  {
    id: 1,
    name: "Sales",
    price: "$4,450",
    percentage: -1.4,
    info: "compared to last month",
  },
  {
    id: 2,
    name: "Cost",
    price: "$2,050",
    percentage: +2.1,
    info: "compared to last month",
  },
];

export { LinkItems, newJoin, featureInfo, data, customerTransaction };
