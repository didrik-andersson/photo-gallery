import { Box, Typography } from "@mui/material";
import React from "react";
import { ItemContext } from "../../contexts";
import { useContext } from "../../hooks";
import { Retailer, SizePill } from "./index";

export default function ItemInformation() {
  const {
    item,
    selectedSize,
    availableSizes,
    filteredRetailers,
    updateSelectedSize,
  } = useContext(ItemContext);

  return (
    <Box>
      <Typography sx={{ my: 4 }} variant="h6">
        {item.name}
      </Typography>
      {filteredRetailers && (
        <Box sx={{ mb: 6, maxWidth: { md: 430 } }}>
          {filteredRetailers.map((retailer) => {
            return (
              <Retailer
                key={retailer.name}
                retailer={retailer}
                selectedSize={selectedSize}
              />
            );
          })}
        </Box>
      )}
      <Box sx={{ display: "flex", flexWrap: "wrap", mb: 4, maxWidth: 500 }}>
        {availableSizes &&
          availableSizes.map((size) => (
            <SizePill
              key={size.size}
              size={size}
              selectedSize={selectedSize}
              setSelectedSize={updateSelectedSize}
            />
          ))}
      </Box>
      <Typography variant="subtitle2">{item.description}</Typography>
    </Box>
  );
}
