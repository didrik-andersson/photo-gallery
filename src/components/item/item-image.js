import { Box } from "@mui/system";
import React from "react";
import { useStyledComponents } from "./index";

export default function ItemImage({ item }) {
  const { StyledItemImage } = useStyledComponents();

  return (
    <Box
      sx={{
        height: { md: "80vh" },
      }}
    >
      <StyledItemImage src={item.img} alt="dev alt text" />
    </Box>
  );
}
