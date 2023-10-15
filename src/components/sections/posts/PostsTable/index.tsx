import { DynamicTable } from "@/lib/components";
import { IPost } from "@/lib/types";

import { Chip } from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { PostsActions } from "./PostsActions";

export function PostsTable({ data }: any) {
  const columns = useMemo<ColumnDef<IPost>[]>(
    () => [
      {
        id: "title",
        accessorKey: "title",
        header: "Title",
      },
      { id: "content", accessorKey: "content", header: "Content" },
      {
        id: "published",
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
      {
        id: "actions",
        accessorKey: "id",
        header: "",
        cell: ({ cell }) => {
          const id: string = cell.getValue() as unknown as string;

          return <PostsActions id={id} />;
        },
      },
    ],
    []
  );

  return <DynamicTable<IPost> data={data} columns={columns} />;
}
