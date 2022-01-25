import React from "react";
import { useStyledComponents } from "./index";

export default function ItemImageCarousel({ item, setSelectedItemImage }) {
  const {
    ItemImageCarouselWrapper,
    ItemImageCarouselImageWrapper,
    ItemImageCarouselImage,
  } = useStyledComponents();

  return (
    <ItemImageCarouselWrapper>
      {item.images.map((image) => (
        <ItemImageCarouselImageWrapper
          onClick={() => setSelectedItemImage(image)}
        >
          <ItemImageCarouselImage src={image} />
        </ItemImageCarouselImageWrapper>
      ))}
    </ItemImageCarouselWrapper>
  );
}
