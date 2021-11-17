import React from "react";
import { Dialog as MuiDialog } from "@mui/material";

export default function Dialog({
  fullScreen,
  fullWidth,
  children,
  toggleFunction,
  open,
}) {
  console.log(open);

  return (
    <MuiDialog
      fullScreen={fullScreen}
      fullWidth={fullWidth}
      maxWidth="xl"
      onClose={toggleFunction}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      {children}
    </MuiDialog>
  );
}
