import React, { useState, useMemo } from "react";
import { ItemImageContext } from "./index";

export default function ItemImageProvider(props) {
  const { children } = props;
  const [activeImageIndex, setactiveImageIndex] = useState(0);

  const handleNextImageIndex = () => {
    setactiveImageIndex((prevactiveImageIndex) => prevactiveImageIndex + 1);
  };

  const handlePrevImageIndex = () => {
    setactiveImageIndex((prevactiveImageIndex) => prevactiveImageIndex - 1);
  };

  const handleImageIndexChange = (slide) => {
    setactiveImageIndex(slide);
  };

  const value = useMemo(
    () => ({
      activeImageIndex,
      handleNextImageIndex,
      handlePrevImageIndex,
      handleImageIndexChange,
    }),
    [activeImageIndex]
  );

  return (
    <ItemImageContext.Provider value={value}>
      {children}
    </ItemImageContext.Provider>
  );
}
