import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface IPostCreateEditDialogProps {
  handleClose: () => void;
}

export function PostCreateEditDialog({
  handleClose,
}: IPostCreateEditDialogProps) {
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="create-edit-dialog-title"
      aria-describedby="create-edit-dialog-description"
      fullWidth
    >
      <DialogTitle id="create-edit-dialog-title">Create Edit Post</DialogTitle>
      <DialogContent dividers sx={{ minHeight: "50vh" }}>
        some form fields
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          CANCEL
        </Button>
        <Button variant="contained" onClick={handleClose} autoFocus>
          SAVE
        </Button>
      </DialogActions>
    </Dialog>
  );
}
