import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  StyledButtonContainer,
  StyledDialogActions,
} from "./DialogInvoice.styled";

const DialogInvoice = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRedirectHome = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <StyledButtonContainer>
        <Button variant="outlined" onClick={handleClickOpen} color="error">
          Cancel
        </Button>
      </StyledButtonContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Do you want to abort this action?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By aborting this action you will loose all data that you input
          </DialogContentText>
        </DialogContent>
        <StyledDialogActions>
          <Button onClick={(e) => handleClose(e)}>Cancel</Button>
          <Button onClick={handleRedirectHome} autoFocus color="error">
            Leave
          </Button>
        </StyledDialogActions>
      </Dialog>
    </>
  );
};

export default DialogInvoice;
