import { Box } from "@mui/system";
import React from "react";
import { Breadcrumbs } from "../index";

export default function ItemBreadcrumbs({ item }) {
  return (
    <Box sx={{ mb: { xs: 4, md: 0 } }}>
      <Breadcrumbs />
    </Box>
  );
}
