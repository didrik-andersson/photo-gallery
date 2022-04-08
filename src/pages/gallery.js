import React from "react";
import { Box } from "@mui/system";
import { ItemList, Hero } from "../components/index";
import { ItemsProvider } from "../contexts/index";
import { Gutter } from "../components/styled-components/content";

export default function Gallery() {
  return (
    <Box>
      <ItemsProvider>
        <Hero />
        <Box sx={{ my: 5 }} />
        <Gutter>
          <ItemList />
        </Gutter>
      </ItemsProvider>
    </Box>
  );
}
