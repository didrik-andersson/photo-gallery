import { Box } from "@mui/system";
import React from "react";
import { ItemContext } from "../../contexts";
import { useContext } from "../../hooks";
import { Breadcrumbs } from "../index";

export default function ItemBreadcrumbs() {
  const { item, breadcrumbs } = useContext(ItemContext);

  return (
    <Box sx={{ mb: { xs: 4, md: 0 } }}>
      <Breadcrumbs breadcrumbs={breadcrumbs} currentPosition={item.name} />
    </Box>
  );
}
