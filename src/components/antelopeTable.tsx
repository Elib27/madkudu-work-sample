"use client";
import { useState } from "react";
import Link from "next/link";
import { AntelopeData } from "@/types/types";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
} from "@chakra-ui/react";
import {
  TriangleDownIcon,
  TriangleUpIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import {
  getCoreRowModel,
  useReactTable,
  createColumnHelper,
  flexRender,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper<AntelopeData>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: "Name",
    sortingFn: "alphanumeric",
  }),
  columnHelper.accessor("continent", {
    cell: (info) => info.getValue(),
    header: "Continent",
    sortingFn: "alphanumeric",
  }),
  columnHelper.accessor("weight", {
    cell: (info) => info.getValue(),
    header: "Weight",
    sortingFn: "alphanumeric",
  }),
  columnHelper.accessor("height", {
    cell: (info) => info.getValue(),
    header: "Height",
    sortingFn: "alphanumeric",
  }),
  columnHelper.accessor("horns", {
    cell: (info) => info.getValue(),
    header: "Horns",
    sortingFn: "alphanumeric",
  }),
  columnHelper.display({
    id: "link",
    cell: (props) => (
      <Link
        href={`/antelopes/${props.row.getValue("name")}`}
        className="flex items-center hover:underline"
      >
        <span className="pr-2">More</span>
        <ExternalLinkIcon />
      </Link>
    ),
    header: "Link",
    enableSorting: false,
  }),
];

export default function AntelopeTable({ data }: { data: AntelopeData[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting },
    onSortingChange: setSorting,
  });

  return (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th
                  key={header.id}
                  fontSize={18}
                  onClick={header.column.getToggleSortingHandler()}
                  cursor={header.column.getCanSort() ? "pointer" : ""}
                  userSelect="none"
                  color="#182b52"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  <chakra.span pl="2" position="absolute">
                    {header.column.getCanSort() &&
                    header.column.getIsSorted() ? (
                      header.column.getIsSorted() === "desc" ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
