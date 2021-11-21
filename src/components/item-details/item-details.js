import React from "react";
import { DialogTitle } from "../index";
import { useStyledComponents, Retailers } from "./index";

export default function ItemDetails({ toggleFunction, item }) {
  const { StyledItemImage, StyledDialogContent, StyledDialogPanel } =
    useStyledComponents();

  console.log(item);

  return (
    <div>
      <DialogTitle
        id="customized-dialog-title"
        onClose={toggleFunction}
        title={item.title}
      />
      <StyledDialogContent>
        <StyledDialogPanel>
          <StyledItemImage src={item.img} alt={item.title} />
        </StyledDialogPanel>
        <StyledDialogPanel>
          <Retailers retailers={item.retailers} />
        </StyledDialogPanel>
      </StyledDialogContent>
    </div>
  );
}
