import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Retailer, SizePill } from "./index";
import { Breadcrumbs } from "../index";

export default function ItemInformation({ item }) {
  const [filteredRetailers, setFilteredRetailers] = useState(null);
  const [availableSizes, setAvailableSizes] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const setinitialSelectedSize = async () => {
    let sizes = [];
    let sizesWithUnit = [];

    await Promise.all(
      item.retailers.map(async (retailer) => {
        Object.keys(retailer.sizes).forEach((size) => {
          sizes.push(size);
          sizesWithUnit.push({ size: size, unit: retailer.sizes[size].unit });
        });
      })
    );

    let mostOccurringSize = sizes
      .sort(
        (b, a) =>
          sizes.filter((v) => v === a).length -
          sizes.filter((v) => v === b).length
      )
      .shift();

    let uniqueSizes = sizesWithUnit.filter((value, index, self) => {
      return self.findIndex((v) => v.size === value.size) === index;
    });

    setAvailableSizes(uniqueSizes);
    setSelectedSize(mostOccurringSize);
  };

  useEffect(() => {
    setinitialSelectedSize();

    return () => {
      setAvailableSizes(null);
      setSelectedSize(null);
    };
  }, []);

  useEffect(() => {
    if (selectedSize && item.retailers) {
      setFilteredRetailers(
        item.retailers.filter((retailer) =>
          Object.keys(retailer.sizes).includes(selectedSize)
        )
      );
    }
  }, [selectedSize, item.retailers]);

  return (
    <Box sx={{ pl: { md: 5 } }}>
      {/* <Breadcrumbs /> */}
      <Typography sx={{ my: 4 }} variant="h6">
        {item.title}
      </Typography>
      {filteredRetailers && (
        <Box sx={{ mb: 6, maxWidth: 430 }}>
          {filteredRetailers.map((retailer) => (
            <Retailer
              key={retailer.name}
              retailer={retailer}
              selectedSize={selectedSize}
            />
          ))}
        </Box>
      )}
      <Box sx={{ display: "flex", flexWrap: "wrap", mb: 4, maxWidth: 550 }}>
        {availableSizes &&
          availableSizes.map((size) => (
            <SizePill
              key={size.size}
              size={size}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          ))}
      </Box>
      <Typography variant="subtitle2">
        Denna är riktigt fin måste jag säga, har letat länge efter något
        liknande. Denna är riktigt fin måste jag säga, har letat länge efter
        något liknande.Denna är riktigt fin måste jag säga, har letat länge
        efter något liknande.Denna är riktigt fin måste jag säga, har letat
        länge efter något liknande.Denna är riktigt fin måste jag säga, har
        letat länge efter något liknande.Denna är riktigt fin måste jag säga,
        har letat länge efter något liknande.
      </Typography>
    </Box>
  );
}
