import DataTable from "../components/shared/DataTable";
import { Column } from "react-table";
import { Avatar, HStack, IconButton, Text } from "@chakra-ui/react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { TableData } from "../models";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

const User = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<TableData[]>([
    {
      id: "1",
      name: "Ayomide",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "2",
      name: "Ayomide",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "2",
      name: "Ayomide",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "lkdkdslkdslk",
      name: "Ayomide",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "kdlkdlkds",
      name: "Ayomide",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "kdlkdleoieiewioewkds",
      name: "Ayomide",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "kdldkdkdkdlkds",
      name: "Ayomide",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "klkklrlkrlkreer",
      name: "Ayomide",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
  ]);

  const tableData: TableData[] = useMemo(() => data, [data]);

  const columns: Column<TableData>[] = [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
      Cell: ({ row: { original } }) => (
        <HStack spacing={4} w="full">
          <Avatar size="sm" src={original.img} />
          <Text>{original.name}</Text>
        </HStack>
      ),
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Transaction",
      accessor: "transaction",
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
    navigate(`/user/${original.id}`);
  };

  return <DataTable title="User Rows" columns={columns} data={tableData} />;
};

export default User;
