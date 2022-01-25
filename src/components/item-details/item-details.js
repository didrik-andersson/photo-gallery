import { Box } from "@mui/system";
import { useStyledComponents, ItemInformation } from "./index";
import { DialogTitle } from "../index";
import { Typography } from "@mui/material";
import { useRef, useState } from "react";

export default function ItemDetails({ toggleFunction, item }) {
  const { StyledItemImage } = useStyledComponents();
  const [itemImageHeight, setItemImageHeight] = useState(0);
  const itemImage = useRef(null);

  return (
    <Box sx={{ display: "flex", maxHeight: "calc(100vh - 140px)" }}>
      <figure style={{ margin: 0 }}>
        <StyledItemImage
          src={item.images[0]}
          alt="test"
          ref={itemImage}
          onLoad={() => setItemImageHeight(itemImage.current.height)}
        />
      </figure>
      <Box
        sx={{ maxWidth: 400, overflowY: "auto", maxHeight: itemImageHeight }}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={toggleFunction}
          title={item.title}
        />
        <ItemInformation retailers={item.retailers} />
      </Box>
    </Box>
  );
}
