import { DynamicTable } from "@/lib/components";
import { IPost } from "@/lib/types";
import { Chip } from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

export function PostsTable({ data }: any) {
  const columns = useMemo<ColumnDef<IPost>[]>(
    () => [
      { accessorKey: "title", header: "Title" },
      { accessorKey: "content", header: "Content" },
      {
        accessorKey: "published",
        header: "Published",
        cell: ({ cell }) => {
          const isPublished: boolean = cell.getValue() as unknown as boolean;

          return (
            <Chip
              label={isPublished ? "YES" : "NO"}
              color={isPublished ? "success" : "error"}
              sx={{ minWidth: "60px" }}
            />
          );
        },
      },
    ],
    []
  );

  return <DynamicTable<IPost> data={data} columns={columns} />;
}
