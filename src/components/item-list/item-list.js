import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { useItemContext } from "../../contexts/index";
import { Dialog, useDialog } from "../index";

export default function ItemList() {
  const { tempData } = useItemContext();
  const { toggleDialogOpen } = useDialog();

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
              onClick={toggleDialogOpen}
            />
          ))}
      </Masonry>
      <Dialog toggleFunction={toggleDialogOpen}>
        <p>Hello lol</p>
      </Dialog>
    </Box>
  );
}
