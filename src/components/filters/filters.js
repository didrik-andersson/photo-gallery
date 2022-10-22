import React from "react";
import { ItemsContext } from "../../contexts";
import { useContext } from "../../hooks";
import useToggle from "../../hooks/use-toggle";
import { FilterBar, FilterPanel } from "./index";
import ViewPanel from "./view-panel";

export default function Filters() {
  const [showFilterPanel, toggleShowFilterPanel] = useToggle(false);
  const [showViewPanel, toggleShowViewPanel] = useToggle(false);

  const { totalHits } = useContext(ItemsContext);

  if (!totalHits) {
    return null;
  }

  return (
    <>
      <FilterBar
        toggleShowFilterPanel={toggleShowFilterPanel}
        toggleShowViewPanel={toggleShowViewPanel}
      />
      <FilterPanel
        showFilterPanel={showFilterPanel}
        toggleShowFilterPanel={toggleShowFilterPanel}
      />
      <ViewPanel
        toggleShowViewPanel={toggleShowViewPanel}
        showViewPanel={showViewPanel}
      />
    </>
  );
}
