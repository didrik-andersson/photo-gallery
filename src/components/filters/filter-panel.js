import React from "react";
import { Panel } from "../index";
import { ItemsContext } from "../../contexts";
import { useContext } from "../../hooks";
import { Box } from "@mui/system";
import FilterPanelGroup from "./filter-panel-group";
import FilterPanelFooter from "./filter-panel-footer";

export default function FilterPanel({
  showFilterPanel,
  toggleShowFilterPanel,
}) {
  const { buckets } = useContext(ItemsContext);

  return (
    <Panel
      open={showFilterPanel}
      toggleOpen={toggleShowFilterPanel}
      anchor="right"
      titleText="Filtrera"
      footer={<FilterPanelFooter closePanel={toggleShowFilterPanel} />}
    >
      <Box sx={{ px: 2 }}>
        {buckets &&
          buckets.map((bucket, index) => (
            <FilterPanelGroup
              key={bucket?.property}
              values={bucket?.values}
              title={bucket?.label}
              property={bucket?.property}
              lastGroup={buckets.length - 1 === index}
            />
          ))}
      </Box>
    </Panel>
  );
}
