import React from "react";
import {
  ItemImage,
  ItemInformation,
  ItemImageDialog,
  ItemImageSlider,
  ItemBreadcrumbs,
} from "./index";
import { useDialog } from "../index";
import { ItemContext } from "../../contexts/index";
import { useContext } from "../../hooks/index";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ItemWrapper, LeftPane, RightPane } from "./styled-components";

export default function Item() {
  const theme = useTheme();
  const { item } = useContext(ItemContext);
  const { toggleDialogOpen, dialogOpen } = useDialog();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {item && (
        <>
          <ItemWrapper>
            {mdDown && <ItemBreadcrumbs />}

            <LeftPane>
              {smDown && <ItemImageSlider stepper images={item.images} />}
              <ItemImage toggleDialogOpen={toggleDialogOpen} />
            </LeftPane>

            <RightPane>
              {!mdDown && <ItemBreadcrumbs />}
              <ItemInformation />
            </RightPane>
          </ItemWrapper>
          {dialogOpen && (
            <ItemImageDialog
              dialogOpen={dialogOpen}
              toggleDialogOpen={toggleDialogOpen}
            />
          )}
        </>
      )}
    </>
  );
}
