import { Box } from "@mui/system";
import React from "react";
import { useStyledComponents, ItemImageCarousel } from "./index";
import { ItemImageContext } from "../../contexts/index";
import { useContext } from "../../hooks/index";
import { useTheme } from "@mui/material/styles";

export default function ItemImage({ item, toggleDialogOpen }) {
  const { StyledItemImage, ItemImageWrapper } = useStyledComponents();
  const { activeImageIndex } = useContext(ItemImageContext);

  return (
    <ItemImageWrapper>
      <Box>
        <StyledItemImage
          alt="dev alt text"
          onClick={() => toggleDialogOpen()}
          src={item.images[activeImageIndex]}
        />
      </Box>
      <ItemImageCarousel images={item.images} />
    </ItemImageWrapper>
  );
}
