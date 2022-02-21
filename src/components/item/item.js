import React, { useEffect } from "react";
import {
  useItem,
  ItemImage,
  ItemInformation,
  ItemImageDialog,
  ItemImageSlider,
  ItemBreadcrumbs,
  useStyledComponents,
} from "./index";
import { useDialog } from "../index";
import { ItemContext } from "../../contexts/index";
import { useContext } from "../../hooks/index";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Item() {
  const {
    selectedSize,
    availableSizes,
    setSelectedSize,
    filteredRetailers,
    setFilteredRetailers,
    setinitialSelectedSize,
    setUniqueAvailableSizes,
  } = useItem();

  let { id } = useParams();
  const theme = useTheme();
  const { getItem, item } = useContext(ItemContext);
  const { toggleDialogOpen, dialogOpen } = useDialog();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { ItemWrapper, LeftPane, RightPane } = useStyledComponents();

  useEffect(() => {
    getItem(id);
  }, []);

  useEffect(() => {
    if (!selectedSize && item) {
      setinitialSelectedSize(item);
    }

    if (selectedSize && !availableSizes) {
      setUniqueAvailableSizes();
    }

    if (item && selectedSize) {
      setFilteredRetailers(
        item.retailers.filter((retailer) =>
          Object.keys(retailer.sizes).includes(selectedSize)
        )
      );
    }
  }, [item, selectedSize]);

  return (
    <>
      {item && (
        <>
          <ItemWrapper>
            {mdDown && <ItemBreadcrumbs currentPosition={item.title} />}
            <LeftPane>
              <ItemImage item={item} toggleDialogOpen={toggleDialogOpen} />
              {smDown && <ItemImageSlider stepper images={item.images} />}
            </LeftPane>
            <RightPane>
              {!mdDown && <ItemBreadcrumbs currentPosition={item.title} />}
              <ItemInformation
                item={item}
                selectedSize={selectedSize}
                availableSizes={availableSizes}
                setSelectedSize={setSelectedSize}
                filteredRetailers={filteredRetailers}
              />
            </RightPane>
          </ItemWrapper>
          {dialogOpen && (
            <ItemImageDialog
              item={item}
              dialogOpen={dialogOpen}
              toggleDialogOpen={toggleDialogOpen}
            />
          )}
        </>
      )}
    </>
  );
}
