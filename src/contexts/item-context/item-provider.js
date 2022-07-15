import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ItemContext } from "./index";
import { useParams } from "react-router-dom";
import { useGetItem } from "../../api/index";

const sortOnOccurrence = (array) =>
  array.sort(
    (b, a) =>
      array.filter((v) => v === a).length - array.filter((v) => v === b).length
  );

const flattenRetailerSizes = (data) =>
  data.reduce((sizes, retailer) => sizes.concat(retailer?.sizes || []), []);

const removeDuplicateSizeObjects = (sizes) =>
  sizes.filter((value, index, self) => {
    return self.findIndex((v) => v.size === value.size) === index;
  });

const filterRetailers = (retailers, divider) =>
  retailers.filter((retailer) =>
    retailer?.sizes.find(({ size }) => size === divider)
  );

export default function ItemProvider({ children }) {
  const [filteredRetailers, setFilteredRetailers] = useState([]);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [item, setItem] = useState(undefined);

  const { category, id } = useParams();
  const { data, isLoading } = useGetItem(id);
  const loading = isLoading;

  useEffect(() => {
    if (data) {
      const sizes = flattenRetailerSizes(data?.data?.retailers);
      const mostOccurringSize = sortOnOccurrence(
        sizes.map((size) => size.size)
      ).shift();

      setItem(data?.data);
      setSelectedSize(mostOccurringSize);
      setAvailableSizes(removeDuplicateSizeObjects(sizes));
      setFilteredRetailers(
        filterRetailers(data?.data?.retailers, mostOccurringSize)
      );
    }
  }, [data]);

  const updateSelectedSize = useCallback(
    (value) => {
      setSelectedSize(value);
      setFilteredRetailers(filterRetailers(item?.retailers, value));
    },
    [item]
  );

  const value = useMemo(
    () => ({
      item,
      loading,
      selectedSize,
      availableSizes,
      filteredRetailers,
      updateSelectedSize,
      breadcrumbs: [
        { label: "Utforska", path: "/utforska" },
        { label: category, path: `/utforska/${category}` },
      ],
    }),
    [
      item,
      loading,
      category,
      selectedSize,
      availableSizes,
      filteredRetailers,
      updateSelectedSize,
    ]
  );

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
}
