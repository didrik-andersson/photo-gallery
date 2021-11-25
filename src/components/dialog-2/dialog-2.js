import React from "react";
import ReactDom from "react-dom";
import { useStyledComponents } from "./index";
import { DialogTitle } from "../index";
import { Box } from "@mui/system";

export default function Dialog2({
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
          <Box sx={{ height: "100%", width: "100%" }}>
            {title && (
              <DialogTitle
                id="customized-dialog-title"
                onClose={toggleFunction}
                title={title}
              />
            )}
            {children}
          </Box>
        </StyledDialog>
      </StyledBackdrop>
    </>,
    document.getElementById("portal")
  );
}
