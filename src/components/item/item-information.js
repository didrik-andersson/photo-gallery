import { Box, Typography } from "@mui/material";
import React from "react";
import { Retailer, SizePill } from "./index";

export default function ItemInformation({
  item,
  filteredRetailers,
  availableSizes,
  selectedSize,
  setSelectedSize,
}) {
  return (
    <Box>
      <Typography sx={{ my: 4 }} variant="h6">
        {item.title}
      </Typography>
      {filteredRetailers && (
        <Box sx={{ mb: 6, maxWidth: { md: 430 } }}>
          {filteredRetailers.map((retailer) => {
            console.log("shof");

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
