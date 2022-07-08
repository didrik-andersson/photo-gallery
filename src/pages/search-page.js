import React from "react";
import { Box } from "@mui/system";
import { ItemList, SearchInfo, Filters } from "../components/index";
import { ItemsProvider } from "../contexts/index";
import { useParams } from "react-router-dom";
import { Gutter } from "../components/styled-components/content/index";

export default function SearchPage() {
  let { queryParam } = useParams();

  return (
    <Box>
      <ItemsProvider query={queryParam}>
        <Gutter>
          <SearchInfo searchTerm={queryParam} />
          <Box sx={{ mt: 2 }}>
            <Filters />
            <ItemList />
          </Box>
        </Gutter>
      </ItemsProvider>
    </Box>
  );
}
