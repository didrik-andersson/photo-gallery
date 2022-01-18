import { Box } from "@mui/system";
import React from "react";

export default function SizePill({ size, selectedSize, setSelectedSize }) {
  return (
    <Box
      sx={{
        py: 1,
        px: 2,
        mr: 1,
        mb: 1,
        border: selectedSize === size.size ? "solid 1px #000" : "none",
        background: "#f4f5f9",
        borderRadius: 25,
        cursor: "pointer",
      }}
      onClick={() => setSelectedSize(size.size)}
    >
      {size.size} {size.unit}
    </Box>
  );
}
