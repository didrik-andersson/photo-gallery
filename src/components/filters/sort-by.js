import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { ItemsContext } from "../../contexts";
import { useContext } from "../../hooks";
import { SelectMenu } from "../index";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const sortByOptions = [
  { label: "popularitet", value: "" },
  { label: "högsta pris", value: "priceDesc" },
  { label: "lägsta pris", value: "priceAsc" },
];

export default function SortBy() {
  const { updateSortBy, sortBy } = useContext(ItemsContext);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <Box>
      <Box
        sx={{ display: "flex", alignItems: "flex-start", gap: "4px", cursor: "pointer" }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <Box>
          Sortera på{" "}
          <strong>
            {sortByOptions.find(({ value }) => value === sortBy)?.label || ""}
          </strong>
        </Box>
        <ExpandMoreIcon />
      </Box>
      <SelectMenu
        options={sortByOptions}
        anchorEl={anchorEl}
        selectedValue={sortBy}
        handleSelect={(option) => updateSortBy(option.value)}
        handleClose={() => setAnchorEl(null)}
      />
    </Box>
  );
}
