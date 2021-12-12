import React from "react";
import ReactDom from "react-dom";
import { useStyledComponents } from "./index";
import { DialogTitle } from "../index";
import { Divider } from "@mui/material";

export default function Dialog({
  open,
  children,
  toggleFunction,
  title,
  maxWidth,
}) {
  const { StyledDialog, StyledBackdrop } = useStyledComponents();

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <StyledBackdrop onClick={toggleFunction}>
        <StyledDialog sx={{ maxWidth: maxWidth }}>
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
