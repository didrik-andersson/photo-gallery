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
  DialogTitle,
} from "../index";
import { Divider, Typography } from "@mui/material";

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
          // title={item.title}
          // maxWidth={1200}
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
          <div style={{ display: "flex", maxHeight: "calc(100vh - 140px)" }}>
            <figure style={{ margin: 0 }}>
              <img
                src={item.img}
                alt="test"
                style={{
                  maxHeight: "calc(100vh - 140px)",
                  maxWidth: "100%",
                  height: "auto",
                  width: "auto",
                  verticalAlign: "middle",
                  display: "block",
                  margin: 0,
                  userSelect: "none",
                  opacity: 1,
                  transition: "opacity 0.3s",
                }}
              />
            </figure>
            <div style={{ maxWidth: 400, width: "100%", overflowY: "auto" }}>
              <DialogTitle
                id="customized-dialog-title"
                onClose={toggleDialogOpen}
                title={item.title}
              />
              <Box sx={{ p: 2 }}>
                <Box>
                  <Typography variant="subtitle2">
                    Hello dude :P Hello dude :P Hello dude :P Hello dude :P
                    Hello dude :P Hello dude :P Hello dude :P Hello dude :P
                    Hello dude :P Hello dude :PHello dude :P Hello dude :P Hello
                    dude :P Hello dude :P Hello dude :PHello dude :P Hello dude.
                  </Typography>
                </Box>
              </Box>
            </div>
          </div>
        </Dialog2>
      )}
    </Box>
  );
}
