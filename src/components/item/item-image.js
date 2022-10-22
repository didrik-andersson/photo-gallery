import { Box } from "@mui/system";
import React from "react";
import { ItemImageCarousel } from "./index";
import { ItemImageContext, ItemContext } from "../../contexts/index";
import { useContext } from "../../hooks/index";
import { StyledItemImage, ItemImageWrapper } from "./styled-components";

export default function ItemImage({ toggleDialogOpen }) {
  const { activeImageIndex } = useContext(ItemImageContext);
  const { item } = useContext(ItemContext);

  return (
    <ItemImageWrapper>
      <Box>
        <StyledItemImage
          onClick={() => toggleDialogOpen()}
          src={item.images[activeImageIndex]}
        />
      </Box>
      <ItemImageCarousel images={item.images} />
    </ItemImageWrapper>
  );
}
