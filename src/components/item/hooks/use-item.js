import { useState } from "react";

export default function useItem() {
  const [filteredRetailers, setFilteredRetailers] = useState(null);
  const [availableSizes, setAvailableSizes] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizes, setSizes] = useState([]);

  const sortOnOccurrence = async (array) => {
    return await array.sort(
      (b, a) =>
        array.filter((v) => v === a).length -
        array.filter((v) => v === b).length
    );
  };

  const setinitialSelectedSize = async (item) => {
    await Promise.all(
      item.retailers.map(async (retailer) => {
        retailer.sizes.forEach((size, index) => {
          setSizes((prevState) => [
            ...prevState,
            {
              size: size.size,
              unit: size.unit,
              price: size.price,
              index: index,
            },
          ]);
        });
      })
    );

    let mostOccurringSize = await sortOnOccurrence(
      sizes.map((size) => size.size)
    );
    setSelectedSize(mostOccurringSize.shift());
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
  };
}
