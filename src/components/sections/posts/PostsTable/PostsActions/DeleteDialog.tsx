import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface IDeleteDialogProps {
  open: boolean;
  handleClose: () => void;
}

export function DeleteDialog({ open, handleClose }: IDeleteDialogProps) {
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
        <Button variant="contained" onClick={handleClose} autoFocus>
          YES
        </Button>
      </DialogActions>
    </Dialog>
  );
}
