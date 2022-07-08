import React from "react";
import { Panel } from "../index";
import { ItemsContext } from "../../contexts";
import { useContext } from "../../hooks";
import FilterGroup from "./filter-group";
import { Box } from "@mui/system";

export default function FilterPanel({
  showFilterPanel,
  toggleShowFilterPanel,
}) {
  const { buckets } = useContext(ItemsContext);

  return (
    <>
      <Panel
        open={showFilterPanel}
        toggleOpen={toggleShowFilterPanel}
        anchor="right"
        titleText="Filtrera"
        divider={false}
      >
        <Box sx={{ px: 2 }}>
          {buckets &&
            buckets.map((bucket) => (
              <FilterGroup
                key={bucket?.property}
                values={bucket?.values}
                title={bucket?.label}
                property={bucket?.property}
              />
            ))}
        </Box>
      </Panel>
    </>
  );
}
