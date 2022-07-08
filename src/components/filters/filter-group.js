import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Accordion } from "../index";
import { Box } from "@mui/system";
import useToggle from "../../hooks/use-toggle";
import { useContext } from "../../hooks";
import { ItemsContext } from "../../contexts";

const GroupOption = ({ label, count, selected, onClick }) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", py: 2 }}
      onClick={onClick}
    >
      <Box sx={{ mr: 1 }}>
        <Checkbox checked={selected} sx={{ p: 0 }} />
      </Box>
      <Box sx={{ flexGrow: 1 }}>{label}</Box>
      <Box>{count} st</Box>
    </Box>
  );
};

export default function FilterGroup({ values, title, property }) {
  const [extended, toggleExtended] = useToggle(false);
  const { filters, updateFilters } = useContext(ItemsContext);
  const sortedValues = values.sort(function (a, b) {
    return a - b;
  });

  const handleClick = (value) => {
    updateFilters(property, value);
  };

  return (
    <Accordion title={title} extended={extended} onToggle={toggleExtended}>
      {sortedValues &&
        sortedValues.map((value) => (
          <GroupOption
            key={value.label}
            label={value.label}
            count={value.count}
            selected={
              !!filters[property] && !!filters[property].includes(value.label)
            }
            onClick={() => handleClick(value.label)}
          />
        ))}
    </Accordion>
  );
}
