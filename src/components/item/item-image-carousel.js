import React from "react";
import { useStyledComponents } from "./index";

export default function ItemImageCarousel({
  item,
  selectedItemImage,
  setSelectedItemImage,
}) {
  const {
    ItemImageCarouselWrapper,
    ItemImageCarouselImageWrapper,
    ItemImageCarouselImage,
  } = useStyledComponents();

  const handleChangeImage = (image) => {
    if (selectedItemImage !== image) {
      setSelectedItemImage(image);
    }
  };

  return (
    <ItemImageCarouselWrapper>
      {item.images.map((image) => (
        <ItemImageCarouselImageWrapper onClick={() => handleChangeImage(image)}>
          <ItemImageCarouselImage src={image} />
        </ItemImageCarouselImageWrapper>
      ))}
    </ItemImageCarouselWrapper>
  );
}
