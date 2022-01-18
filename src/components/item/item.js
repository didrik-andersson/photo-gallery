import React, { useEffect } from "react";
import { ItemImage, ItemInformation, useStyledComponents } from "./index";
import { useParams } from "react-router-dom";
import { useItemContext } from "../../contexts/index";

export default function Item() {
  const { ItemWrapper, LeftPane, RightPane } = useStyledComponents();
  const { getItem, item } = useItemContext();
  let { id } = useParams();

  useEffect(() => {
    getItem(id);
  }, []);

  return (
    <>
      {item && (
        <ItemWrapper>
          <LeftPane>
            <ItemImage item={item} />
          </LeftPane>
          <RightPane>
            <ItemInformation item={item} />
          </RightPane>
        </ItemWrapper>
      )}
    </>
  );
}
