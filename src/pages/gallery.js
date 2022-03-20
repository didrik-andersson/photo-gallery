import React from "react";
import { Box } from "@mui/system";
import { ItemList } from "../components/index";
import { ItemsProvider } from "../contexts/index";

export default function Gallery() {
  return (
    <Box>
      {/* <ItemsProvider> */}
      <ItemList />
      {/* </ItemsProvider> */}
    </Box>
  );
}
