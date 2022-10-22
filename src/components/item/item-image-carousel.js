import React from "react";
import { ItemImageContext } from "../../contexts/index";
import { useContext } from "../../hooks/index";
import {
  ItemImageCarouselWrapper,
  ItemImageCarouselImageWrapper,
  ItemImageCarouselImage,
} from "./styled-components";

export default function ItemImageCarousel({ images }) {
  const { activeImageIndex, handleImageIndexChange } =
    useContext(ItemImageContext);

  const handleChangeImage = (index) => {
    if (activeImageIndex !== index) {
      handleImageIndexChange(index);
    }
  };

  return (
    <ItemImageCarouselWrapper>
      {images.map((image, index) => (
        <ItemImageCarouselImageWrapper
          key={image + index}
          onClick={() => handleChangeImage(index)}
        >
          <ItemImageCarouselImage src={image} />
        </ItemImageCarouselImageWrapper>
      ))}
    </ItemImageCarouselWrapper>
  );
}
