"use client";

import { Button } from "@mui/material";
import { useState } from "react";
import { PostCreateEditDialog } from "../PostCreateEditDialog";

export function PostCreateButton() {
  const [showDialog, setShowDialog] = useState(false);

  const toggleShowDialog = () => {
    setShowDialog((prevShowDialog) => !prevShowDialog);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={toggleShowDialog}
        sx={{ maxWidth: "250px" }}
      >
        New Post
      </Button>
      {showDialog ? (
        <PostCreateEditDialog handleClose={toggleShowDialog} />
      ) : null}
    </>
  );
}
