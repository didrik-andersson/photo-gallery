import * as React from "react";
import Drawer from "@mui/material/Drawer";
import PanelHead from "./panel-head";
import { Divider } from "@mui/material";

export default function Panel({
  titleText,
  titleElement,
  children,
  anchor,
  open,
  toggleOpen,
  divider = true,
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
        }}
      >
        <PanelHead
          titleText={titleText}
          titleElement={titleElement}
          onClose={toggleOpen}
        />
        {divider && <Divider sx={{ mb: 2 }} />}
        {children}
      </Drawer>
    </>
  );
}
