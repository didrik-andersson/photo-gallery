import { Box } from "@mui/system";
import React from "react";
import {
  useStyledComponents,
  ItemImageCarousel,
  ItemImageSlider,
} from "./index";

export default function ItemImage({
  setSelectedItemImage,
  selectedItemImage,
  item,
}) {
  const { StyledItemImage, Ratata } = useStyledComponents();

  return (
    <Box>
      <Ratata>
        <Box sx={{ maxHeight: "calc(80vh - 32px)" }}>
          <StyledItemImage src={selectedItemImage} alt="dev alt text" />
        </Box>
        <Box>
          <ItemImageCarousel
            item={item}
            setSelectedItemImage={setSelectedItemImage}
            selectedItemImage={selectedItemImage}
          />
        </Box>
      </Ratata>
      <Box sx={{ display: { sm: "none" } }}>
        <ItemImageSlider item={item} />
      </Box>
    </Box>
  );
}
