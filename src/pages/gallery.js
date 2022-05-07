import React from "react";
import { Box } from "@mui/system";
import { ItemList, Hero } from "../components/index";
import { ItemsProvider } from "../contexts/index";
import { Gutter } from "../components/styled-components/content";

export default function Gallery() {
  return (
    <Box>
      <ItemsProvider>
        <Hero
          searchBar
          title="Posters"
          body="Sök efter poster motiv från 24 olika hemsidor på ett ställe. Eller
            bläddra bland i våra kollage för att få inspiration! Vi länkar till
            butiken som säljer postern så du enkelt kan köpa dina favoriter."
        />
        <Box sx={{ my: 8 }} />
        <Gutter>
          <ItemList />
        </Gutter>
      </ItemsProvider>
    </Box>
  );
}
