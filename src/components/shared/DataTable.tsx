import { useState } from "react";
import {
  Column,
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
  useRowSelect,
} from "react-table";
import {
  Table,
  Thead,
  Tbody,
  NumberDecrementStepper,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  Select,
  Tr,
  Th,
  Flex,
  VStack,
  Tooltip,
  IconButton,
  Td,
  FormControl,
  Input,
  chakra,
  useColorModeValue,
  Text,
  HStack,
  NumberInputField,
} from "@chakra-ui/react";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";
import IndeterminateCheckbox from "./IndeterminateCheckbox";

export interface DataTableProps<Data extends object> {
  data: Data[];
  columns: Column<Data>[];
}

export function DataTable<Data extends object>({
  data,
  columns,
}: DataTableProps<Data>) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    setGlobalFilter,
    state,
    nextPage,
    previousPage,
    page,
    setPageSize,
    prepareRow,
    selectedFlatRows,
    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        //a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }: any) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  //to use filtering,we need to get the filter useState in the stateproperty
  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <VStack
      p={4}
      w="full"
      spacing={4}
      alignItems="flex-start"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={useColorModeValue("sm", "dark-sm")}
    >
      <FormControl w="full" maxW={"300px"}>
        <HStack>
          <Text>Search:</Text>
          <Input
            size={"sm"}
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </HStack>
      </FormControl>
      <Table size="sm" {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}

                  <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <span style={{ fontSize: ".5rem" }}>des</span>
                      ) : (
                        <span style={{ fontSize: ".5rem" }}>asc</span>
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Flex w="full" justifyContent="space-between" m={4} alignItems="center">
        <Flex w="full">
          <Tooltip label="First Page">
            <IconButton
              aria-label="First Page"
              onClick={() => gotoPage(0)}
              isDisabled={!canPreviousPage}
              icon={<GoChevronLeft />}
              mr={4}
            />
          </Tooltip>
          <Tooltip label="Previous Page">
            <IconButton
              aria-label="Previous Page"
              onClick={previousPage}
              isDisabled={!canPreviousPage}
              icon={<HiOutlineChevronDoubleLeft />}
            />
          </Tooltip>
        </Flex>

        <HStack alignItems="center">
          <Text flexShrink="0" mr={8}>
            Page{" "}
            <Text fontWeight="bold" as="span">
              {pageIndex + 1}
            </Text>{" "}
            of{" "}
            <Text fontWeight="bold" as="span">
              {pageOptions.length}
            </Text>
          </Text>
          <Text flexShrink="0">Go to page:</Text>{" "}
          <NumberInput
            ml={2}
            mr={8}
            w={28}
            min={1}
            max={pageOptions.length}
            onChange={(value) => {
              const page = value ? Number(value) - 1 : 0;
              gotoPage(page);
            }}
            defaultValue={pageIndex + 1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Select
            w={"180px"}
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Select>
        </HStack>

        <Flex ml="1rem">
          <Tooltip label="Next Page">
            <IconButton
              aria-label="Next Page"
              onClick={nextPage}
              isDisabled={!canNextPage}
              icon={<HiOutlineChevronDoubleRight />}
            />
          </Tooltip>
          <Tooltip label="Last Page">
            <IconButton
              aria-label="Last Page"
              onClick={() => gotoPage(pageCount - 1)}
              isDisabled={!canNextPage}
              icon={<GoChevronRight />}
              ml={4}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </VStack>
  );
}

export default DataTable;
