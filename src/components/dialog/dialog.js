import React from "react";
import { Dialog as MuiDialog } from "@mui/material";

export default function Dialog({
  fullScreen,
  fullWidth,
  maxWidth,
  open,
  toggleFunction,
  children,
}) {
  return (
    <MuiDialog
      fullScreen={fullScreen}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      onClose={toggleFunction}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      {children}
    </MuiDialog>
  );
}
