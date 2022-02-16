import React from "react";
import { ItemImageContext } from "../../contexts/index";
import { useContext } from "../../hooks/index";
import { useStyledComponents } from "./index";

export default function ItemImageCarousel({ images }) {
  const {
    ItemImageCarouselWrapper,
    ItemImageCarouselImageWrapper,
    ItemImageCarouselImage,
  } = useStyledComponents();
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
