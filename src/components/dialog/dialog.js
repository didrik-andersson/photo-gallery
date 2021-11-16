import React from "react";
import { Dialog as MuiDialog } from "@mui/material";
import { useDialog } from "./index";

export default function Dialog({
  fullScreen,
  fullWidth,
  children,
  toggleFunction,
}) {
  const { dialogOpen } = useDialog();

  console.log(dialogOpen);

  return (
    <MuiDialog
      fullScreen={fullScreen}
      fullWidth={fullWidth}
      maxWidth="xl"
      onClose={toggleFunction}
      aria-labelledby="customized-dialog-title"
      open={dialogOpen}
    >
      {children}
    </MuiDialog>
  );
}
