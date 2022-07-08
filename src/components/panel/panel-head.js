import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function PanelHead({ titleText, titleElement, onClose }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          px: 2,
          height: 70,
          alignItems: "center",
        }}
      >
        {titleText && (
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            {titleText}
          </Typography>
        )}
        {titleElement && <Box sx={{ flexGrow: 1 }}>{titleElement}</Box>}

        <Box>
          <IconButton
            color="inherit"
            aria-label="stäng sorteringslista"
            onClick={onClose}
            sx={{ p: 0 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}
