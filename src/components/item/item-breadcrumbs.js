import { Box } from "@mui/system";
import React from "react";
import { Breadcrumbs } from "../index";

export default function ItemBreadcrumbs({ currentPosition }) {
  return (
    <Box sx={{ mb: { xs: 4, md: 0 } }}>
      <Breadcrumbs currentPosition={currentPosition} />
    </Box>
  );
}
