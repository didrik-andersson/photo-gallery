import React from "react";
import ReactDom from "react-dom";
import { DialogTitle } from "../index";
import { Divider } from "@mui/material";
import { StyledDialog, StyledBackdrop } from "./styled-components";
 
export default function Dialog({
  open,
  children,
  toggleFunction,
  title,
  maxWidth,
  maxHeight,
  opacity,
}) {
  if (!open) return null;

  const handleDialogClick = (e) => {
    e.stopPropagation();
  };

  return ReactDom.createPortal(
    <>
      <StyledBackdrop onClick={toggleFunction} opacity={opacity}>
        <StyledDialog
          onClick={handleDialogClick}
          sx={{ maxWidth: maxWidth, maxHeight: maxHeight }}
        >
          {title && (
            <>
              <DialogTitle
                id="customized-dialog-title"
                onClose={toggleFunction}
                title={title}
              />
              <Divider />
            </>
          )}
          {children}
        </StyledDialog>
      </StyledBackdrop>
    </>,
    document.getElementById("portal")
  );
}
