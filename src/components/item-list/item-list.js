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
          {/* Set height to calculate heigt of dialog title */}
          {/* <div
            style={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                maxWidth: "50%",
                maxHeight: "calc(100% - 64px)",
              }}
            >
              <img
                src={item.img}
                alt="test"
                style={{
                  objectFit: "contain",
                  display: "block",
                  maxHeight: "100%",
                  maxWidth: "100%",
                }}
              />
            </Box>
            <Box sx={{}}>p:P</Box>           </div>*/}
          <div
            style={{
              display: "flex",
              height: "calc(100% - 65px)",
              // width: "100%",
            }}
          >
            <div
              style={{
                maxWidth: "100%",
              }}
            >
              <img
                src={item.img}
                alt="test"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div style={{ maxWidth: "100%" }}>
              <div style={{ background: "blue" }}>
                <h1>This is nice</h1>
                <p>
                  dgsdgs gdgsdg d dgd sdg dg dddddddgg gg.dgsdgs gdgsdg d dgd
                  sdg dg dddddddgg ggdgsdgs gdgsdg d dgd sdg dg dddddddgg
                  ggdgsdgs gdgsdg d dgd sdg dg dddddddgg ggdgsdgs gdgsdg d dgd
                  sdg dg dddddddgg ggdgsdgs gdgsdg d dgd sdg dg dddddddgg
                  ggdgsdgs gdgsdg d dgd sdg dg dddddddgg ggdgsdgs gdgsdg d dgd
                  sdg dg dddddddgg gg
                </p>
              </div>
            </div>
          </div>
        </Dialog2>
      )}
    </Box>
  );
}
