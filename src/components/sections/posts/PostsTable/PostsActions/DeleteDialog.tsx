import { withMutate } from "@/lib/query";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { UseMutationResult } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";

type IDeleteDialogProps = UseMutationResult & {
  id: string;
  open: boolean;
  handleClose: () => void;
};

function DeleteDialogComponent({
  id,
  open,
  handleClose,
  mutateAsync,
  isLoading,
}: IDeleteDialogProps) {
  const handleDelete = async () => {
    await mutateAsync(
      { id },
      {
        onSuccess(_data, _variables, _context) {
          enqueueSnackbar({
            message: "post deleted",
            variant: "success",
          });

          handleClose();
        },
      }
    );
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
      fullWidth
    >
      <DialogTitle id="delete-dialog-title">Delete Post</DialogTitle>
      <DialogContent dividers sx={{ minHeight: "20vh" }}>
        <DialogContentText id="delete-dialog-description">
          Do you want to delete this Post?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          NO
        </Button>
        <Button
          variant="contained"
          onClick={handleDelete}
          autoFocus
          disabled={isLoading}
        >
          YES
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export const DeleteDialog = withMutate(
  "/posts",
  "DELETE"
)(DeleteDialogComponent);
