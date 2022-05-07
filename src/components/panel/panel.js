import * as React from "react";
import Drawer from "@mui/material/Drawer";

export default function Panel({
  children,
  anchor,
  open,
  toggleOpen,
  fullscreen,
}) {
  return (
    <>
      <Drawer
        anchor={anchor}
        open={open}
        onClose={toggleOpen}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", md: fullscreen ? "100%" : "auto"},
            height: "100%"
          },
        }}
      >
        {children}
      </Drawer>
    </>
  );
}
