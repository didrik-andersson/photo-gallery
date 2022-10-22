import { Box } from "@mui/material";
import React from "react";
import { ItemsContext } from "../../contexts";
import { useContext } from "../../hooks";
import Button from "../../components/styled-components/button";

export default function FilterPanelFooter({ closePanel }) {
  const { totalHits, resetFilters, selectedFiltersCount } =
    useContext(ItemsContext);

  return (
    <Box>
      {selectedFiltersCount > 0 && (
        <>
          <Button rounded full tone="soft" onClick={resetFilters}>
            Rensa filter
          </Button>
          <Box sx={{ my: 1 }} />
        </>
      )}
      <Button rounded full onClick={closePanel}>
        Visa {totalHits} {totalHits > 1 ? "träffar" : "träff"}
      </Button>
    </Box>
  );
}
