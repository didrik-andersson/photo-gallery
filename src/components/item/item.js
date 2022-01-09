import { Box } from "@mui/system";
import React from "react";
import { ItemImage, ItemInformation } from "./index";

export default function Item() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <ItemImage />
        <ItemInformation />
      </Box>
    </>
  );
}
