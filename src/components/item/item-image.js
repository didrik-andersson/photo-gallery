import { Box } from "@mui/system";
import React from "react";
import { useStyledComponents } from "./index";

export default function ItemImage({ selectedItemImage }) {
  const { StyledItemImage } = useStyledComponents();

  return (
    <Box
      sx={{
        maxHeight: "calc(80vh - 32px)",
      }}
    >
      <StyledItemImage src={selectedItemImage} alt="dev alt text" />
    </Box>
  );
}
