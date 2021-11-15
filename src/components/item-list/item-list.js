import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { useDialogContext, useItemContext } from "../../contexts/index";

export default function ItemList() {
  const { toggleItemDetailsDialog } = useDialogContext();
  const { tempData } = useItemContext();

  return (
    <Box sx={{ mx: "auto", maxWidth: 1200, overflow: "hidden" }}>
      <Masonry columns={{ xs: 2, sm: 4 }} spacing={1}>
        {tempData &&
          tempData.map((item, index) => (
            <img
              key={item.title + index}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={() => toggleItemDetailsDialog(item.title)}
            />
          ))}
      </Masonry>
    </Box>
  );
}
