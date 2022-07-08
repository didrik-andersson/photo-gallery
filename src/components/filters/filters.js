import React from "react";
import useToggle from "../../hooks/use-toggle";
import { FilterBar, FilterPanel } from "./index";

export default function Filters() {
  const [showFilterPanel, toggleShowFilterPanel] = useToggle(false);

  return (
    <>
      <FilterBar toggleShowFilterPanel={toggleShowFilterPanel} />
      <FilterPanel
        showFilterPanel={showFilterPanel}
        toggleShowFilterPanel={toggleShowFilterPanel}
      />
    </>
  );
}
