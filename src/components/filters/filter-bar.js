import { Box } from "@mui/material";
import React from "react";
import { useContext } from "../../hooks";
import { ItemsContext } from "../../contexts";
import TuneIcon from "@mui/icons-material/Tune";
import { SortBy } from "./index";

export default function FilterBar({
  toggleShowFilterPanel,
  toggleShowViewPanel,
}) {
  const { selectedFiltersCount, buckets, filters } = useContext(ItemsContext);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Box
          sx={{
            border: "1px solid lightgrey",
            px: 2,
            py: 1,
            borderRadius: "25px",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
          onClick={toggleShowFilterPanel}
        >
          <TuneIcon />
          Alla filter {selectedFiltersCount > 0 && `(${selectedFiltersCount})`}
        </Box>
        {buckets &&
          buckets.map((bucket) => (
            <>
              <Box
                sx={{
                  border: `1px solid ${
                    filters[bucket.property] ? "#05a081" : "lightGrey"
                  }`,
                  px: 2,
                  py: 1,
                  borderRadius: "25px",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
                onClick={toggleShowFilterPanel}
              >
                {bucket.label}
              </Box>
            </>
          ))}

        <Box
          sx={{
            border: "1px solid lightgrey",
            px: 2,
            py: 1,
            borderRadius: "25px",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
          onClick={toggleShowFilterPanel}
        >
          Färg
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 2,
        }}
      >
        <Box
          sx={{
            ml: 0.5,
            textDecoration: "underline",
            display: "flex",
            alignItems: "center",
          }}
          onClick={toggleShowViewPanel}
        >
          Presentation
        </Box>
        <SortBy />
      </Box>
    </>
  );
}
