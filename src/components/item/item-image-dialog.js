import { Box } from "@mui/system";
import React from "react";
import { ItemImageSlider } from "./index";
import { Dialog } from "../index";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ItemContext } from "../../contexts";
import { useContext } from "../../hooks";

export default function ItemImageDialog({ dialogOpen, toggleDialogOpen }) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { item } = useContext(ItemContext);

  return (
    <Box>
      <Dialog
        open={dialogOpen}
        toggleFunction={toggleDialogOpen}
        title={false}
        opacity={0.8}
        maxWidth={smDown ? "calc(100vw - 50px)" : "calc(100vw - 150px)"}
      >
        <IconButton
          aria-label="close dialog"
          size="large"
          sx={{
            color: "#fff",
            position: "fixed",
            top: 10,
            right: 10,
            zIndex: 100000,
          }}
          onClick={toggleDialogOpen}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        <ItemImageSlider
          transparent
          stepper
          arrows
          activeStepColor="#6c6c6c"
          images={item.images}
          maxWidth={smDown ? "calc(100vw - 50px)" : "calc(100vw - 150px)"}
          maxHeight="calc(100vh - 150px)"
        />
      </Dialog>
    </Box>
  );
}
