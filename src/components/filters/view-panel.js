import { Switch } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ItemsContext } from "../../contexts";
import { useContext } from "../../hooks";
import { Panel } from "../index";

export default function ViewPanel({ showViewPanel, toggleShowViewPanel }) {
  const { updateViewSettings, viewSettings } = useContext(ItemsContext);

  const handleSwitchChange = (event, property) => {
    updateViewSettings(property, event.target.checked);
  };

  return (
    <>
      <Panel
        open={showViewPanel}
        toggleOpen={toggleShowViewPanel}
        anchor="right"
        titleText="Presentation"
      >
        <Box sx={{ px: 2 }}>
          <Box
            sx={{
              py: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Visa produkt i en miljö
            <Switch
              checked={viewSettings["enviromentImage"]}
              onChange={(e) => handleSwitchChange(e, "enviromentImage")}
            />
          </Box>
        </Box>
      </Panel>
    </>
  );
}
