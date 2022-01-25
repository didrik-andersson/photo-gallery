import React, { useEffect } from "react";
import {
  ItemImage,
  ItemImageCarousel,
  ItemInformation,
  useStyledComponents,
  useItem,
  ItemBreadcrumbs,
} from "./index";
import { useParams } from "react-router-dom";
import { useItemContext } from "../../contexts/index";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Item() {
  const { ItemWrapper, LeftPane, RightPane } = useStyledComponents();
  const {
    selectedItemImage,
    setSelectedItemImage,
    filteredRetailers,
    setFilteredRetailers,
    availableSizes,
    setUniqueAvailableSizes,
    selectedSize,
    setSelectedSize,
    setinitialSelectedSize,
  } = useItem();
  const { getItem, item } = useItemContext();

  let { id } = useParams();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

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
      setSelectedItemImage(item.images[0]);
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
        <ItemWrapper>
          {mdDown && <ItemBreadcrumbs />}
          <LeftPane>
            <ItemImage selectedItemImage={selectedItemImage} />
            <ItemImageCarousel
              item={item}
              setSelectedItemImage={setSelectedItemImage}
            />
          </LeftPane>
          <RightPane>
            {!mdDown && <ItemBreadcrumbs />}
            <ItemInformation
              item={item}
              filteredRetailers={filteredRetailers}
              availableSizes={availableSizes}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          </RightPane>
        </ItemWrapper>
      )}
    </>
  );
}
