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
import { ItemContextTest } from "../../contexts/index";
import { useContext } from "../../hooks/index";
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

  const theme = useTheme();
  const { item } = useContext(ItemContextTest);
  const { toggleDialogOpen, dialogOpen } = useDialog();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { ItemWrapper, LeftPane, RightPane } = useStyledComponents();

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
          retailer.sizes.some((s) => s.size === selectedSize)
        )
      );
    }
  }, [item, selectedSize]);

  return (
    <>
      {item && (
        <>
          <ItemWrapper>
            {mdDown && <ItemBreadcrumbs />}

            <LeftPane>
              {smDown && <ItemImageSlider stepper images={item.images} />}
              <ItemImage item={item} toggleDialogOpen={toggleDialogOpen} />
            </LeftPane>

            <RightPane>
              {!mdDown && <ItemBreadcrumbs />}
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
