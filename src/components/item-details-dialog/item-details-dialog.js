import React from "react";
import { Title, useStyledComponents, Retailers } from "./index";
import { useDialogContext } from "../../contexts";
import { Dialog } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ItemDetailsDialog({ open, itemData }) {
  const { StyledItemImage, StyledDialogContent, StyledDialogPanel } =
    useStyledComponents();
  const { toggleItemDetailsDialog } = useDialogContext();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        fullWidth
        maxWidth="xl"
        onClose={toggleItemDetailsDialog}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Title
          id="customized-dialog-title"
          onClose={toggleItemDetailsDialog}
          title={"Modal title"}
        />
        <StyledDialogContent>
          <StyledDialogPanel>
            <StyledItemImage src={itemData.img} alt={itemData.title} />
          </StyledDialogPanel>
          <StyledDialogPanel>
            <Retailers retailers={itemData.retailers} />
          </StyledDialogPanel>
        </StyledDialogContent>
      </Dialog>
    </div>
  );
}
