"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Stack } from "@mui/material";
import { useState } from "react";
import { DeleteDialog } from "./DeleteDialog";

interface IPostsActionsProps {
  id: string;
}

export function PostsActions({ id }: IPostsActionsProps) {
  const [action, setAction] = useState<"EDIT" | "DELETE" | null>(null);

  const onEdit = () => {
    setAction("EDIT");
  };

  const onDelete = () => {
    setAction("DELETE");
  };

  const handleClose = () => {
    setAction(null);
  };

  console.log("action::", action);

  return (
    <>
      <Stack spacing={2} direction="row">
        <IconButton aria-label="Edit Post" onClick={onEdit}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Delete Post" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Stack>
      {action === "DELETE" ? (
        <DeleteDialog open={action === "DELETE"} handleClose={handleClose} />
      ) : null}
    </>
  );
}
