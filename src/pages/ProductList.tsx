import DataTable from "../components/shared/DataTable";
import { Column } from "react-table";
import { Avatar, HStack, IconButton, Text } from "@chakra-ui/react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { ProductTableData, TableData } from "../models";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

const ProductList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<ProductTableData[]>([
    {
      id: "1",
      name: "Ayomide",
      stock: 33,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1kdkdlkd",
      name: "Ayomide",
      stock: 33,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1lklkelkewew",
      name: "Ayomide",
      stock: 33,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "lllrerer",
      name: "Ayomide",
      stock: 33,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "dmdmd,mdkjekj",
      name: "Ayomide",
      stock: 33,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
  ]);

  const tableData: ProductTableData[] = useMemo(() => data, [data]);

  const columns: Column<ProductTableData>[] = [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Product Name",
      accessor: "name",
      Cell: ({ row: { original } }) => (
        <HStack spacing={4} w="full">
          <Avatar size="sm" src={original.img} />
          <Text>{original.name}</Text>
        </HStack>
      ),
    },
    {
      Header: "Stock",
      accessor: "stock",
    },

    {
      Header: "Action",
      Cell: ({ row: { original } }: any) => (
        <HStack w="full">
          <IconButton
            icon={<AiFillEdit color="green" />}
            onClick={() => handleEdit(original)}
            aria-label="delete data"
          />
          <IconButton
            icon={<AiFillDelete color="red" />}
            onClick={() => handleDelete(original)}
            aria-label="delete data"
          />
        </HStack>
      ),
    },
  ];

  const handleDelete = (original: TableData) => {
    setData(data.filter((data) => data.id !== original.id));
  };

  const handleEdit = (original: TableData) => {
    navigate(`/product/${original.id}`);
  };

  return <DataTable title="Product Rows" columns={columns} data={tableData} />;
};

export default ProductList;
