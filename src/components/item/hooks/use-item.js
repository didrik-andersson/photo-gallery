import { useState } from "react";

export default function useItem() {
  const [filteredRetailers, setFilteredRetailers] = useState(null);
  const [availableSizes, setAvailableSizes] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedItemImage, setSelectedItemImage] = useState(null);
  const [sizes, setSizes] = useState([]);

  const sortOnOccurrence = (array) => {
    return array.sort(
      (b, a) =>
        array.filter((v) => v === a).length -
        array.filter((v) => v === b).length
    );
  };

  const setinitialSelectedSize = async (item) => {
    await Promise.all(
      item.retailers.map(async (retailer) => {
        Object.keys(retailer.sizes).forEach((size, index) => {
          setSizes((prevState) => [
            ...prevState,
            {
              size: size,
              unit: retailer.sizes[size].unit,
              index: index,
            },
          ]);
        });
      })
    );

    let mostOccurringSize = sortOnOccurrence(
      sizes.map((size) => size.size)
    ).shift();

    setSelectedSize(mostOccurringSize);
  };

  const setUniqueAvailableSizes = () => {
    let uniqueSizes = sizes.filter((value, index, self) => {
      return self.findIndex((v) => v.size === value.size) === index;
    });
    setAvailableSizes(uniqueSizes);
  };

  return {
    filteredRetailers,
    setFilteredRetailers,
    setUniqueAvailableSizes,
    availableSizes,
    selectedSize,
    setSelectedSize,
    setinitialSelectedSize,
    selectedItemImage,
    setSelectedItemImage,
  };
}
