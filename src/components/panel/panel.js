import * as React from "react";
import Drawer from "@mui/material/Drawer";
import PanelHead from "./panel-head";
import { Box } from "@mui/system";

export default function Panel({
  titleText,
  titleElement,
  children,
  anchor,
  open,
  toggleOpen,
  footer,
}) {
  return (
    <>
      <Drawer
        anchor={anchor}
        open={open}
        onClose={toggleOpen}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: 480, md: 560 },
            height: "100%",
          },
          display: "flex",
        }}
      >
        <PanelHead
          titleText={titleText}
          titleElement={titleElement}
          onClose={toggleOpen}
        />
        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>{children}</Box>
        {footer && <Box sx={{ width: "100%", p: 2 }}>{footer}</Box>}
      </Drawer>
    </>
  );
}
