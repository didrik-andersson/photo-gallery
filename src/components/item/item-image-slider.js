import { Box } from "@mui/system";
import React from "react";
import { ImageSlider } from "../image-slider";
import { useStyledComponents } from "./index";

export default function ItemImageCarousel({ item }) {
  const { StyledItemImage } = useStyledComponents();

  return (
    <Box>
      <ImageSlider>
        {item.images.map((image) => (
          <StyledItemImage src={image} key={image} />
        ))}
      </ImageSlider>
    </Box>
  );
}
