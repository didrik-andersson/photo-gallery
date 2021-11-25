import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useItemContext } from "../../contexts/index";
import {
  Dialog,
  useDialog,
  ItemDetails,
  ItemDetails2,
  Dialog2,
  useDialog2,
} from "../index";

export default function ItemList() {
  const { loading, getItems, getItem, items, item } = useItemContext();
  const { toggleDialogOpen, dialogOpen } = useDialog2();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Box sx={{ mx: "auto", maxWidth: 1200, overflow: "hidden" }}>
      {items && (
        <Masonry columns={{ xs: 2, sm: 4 }} spacing={1}>
          {items.map((item) => (
            <img
              key={item.id}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={() => {
                toggleDialogOpen();
                getItem(item.id);
              }}
            />
          ))}
        </Masonry>
      )}
      {item && (
        // <Dialog
        //   fullScreen={fullScreen}
        //   maxWidth="lg"
        //   // fullWidth={false}
        //   open={dialogOpen}
        //   toggleFunction={toggleDialogOpen}
        // >
        //   {/* <ItemDetails toggleFunction={toggleDialogOpen} item={item} /> */}
        //   <ItemDetails2 item={item} toggleFunction={toggleDialogOpen} />
        // </Dialog>
        <Dialog2
          open={dialogOpen}
          toggleFunction={toggleDialogOpen}
          title={item.title}
          maxWidth={1200}
        >
          {/* <img
            src={item.img}
            alt="test"
            // height="100%"
            // width="100%"
            style={{ objectFit: "contain", display: "block" }}
          /> */}
          <div style={{ background: "blue", height: "100%" }}>
            <p style={{ margin: 0 }}>hej</p>
          </div>
        </Dialog2>
      )}
    </Box>
  );
}
