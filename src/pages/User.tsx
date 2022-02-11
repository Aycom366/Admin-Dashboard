import DataTable from "../components/shared/DataTable";
import { Column } from "react-table";
import { Avatar, HStack, IconButton, Text } from "@chakra-ui/react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { TableData } from "../models";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  const tableData: TableData[] = [
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
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
    {
      id: "1",
      name: "John Doe",
      age: "33",
      status: "Active",
      email: "bamigboye",
      transaction: 2250,
      img: "https://avatars.githubusercontent.com/u/42998943?v=4",
    },
  ];

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
    console.log(original);
  };

  const handleEdit = (original: TableData) => {
    navigate(`/user/${original.id}`);
  };

  return <DataTable columns={columns} data={tableData} />;
};

export default User;
