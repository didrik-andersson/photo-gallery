import { Box } from "@mui/material";
import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FilterBar({ toggleShowFilterPanel }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
          mb: 2,
        }}
      >
        <Box
          sx={{
            border: "1px solid lightgrey",
            px: 2,
            py: 1,
            borderRadius: 25,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
          onClick={toggleShowFilterPanel}
        >
          <FilterListIcon />
          Filter
        </Box>
        <Box
          sx={{
            // border: "1px solid lightgrey",
            py: 1,
            borderRadius: 25,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box>
            Sortera på <strong>lägsta pris</strong>
          </Box>
          <ExpandMoreIcon />
        </Box>
      </Box>
    </>
  );
}
