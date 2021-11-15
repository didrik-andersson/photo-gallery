import React, { useState } from "react";
import { DialogContext } from "./index";
import { ItemDetailsDialog } from "../../components/index";
import { useItemContext } from "../index";

export default function DialogProvider(props) {
  const { children } = props;
  const { tempData } = useItemContext();

  const [itemDetailsDialogOpen, setItemDetailsDialogOpen] = useState(false);
  const [itemData, setItemData] = useState(null);

  const getItemData = (identifier) => {
    const foundItem = tempData.find((obj) => obj.title === identifier);
    setItemData(foundItem);
  };

  const toggleItemDetailsDialog = (identifier = false) => {
    setItemDetailsDialogOpen(!itemDetailsDialogOpen);
    if (identifier) getItemData(identifier);
  };

  return (
    <DialogContext.Provider value={{ toggleItemDetailsDialog }}>
      {children}
      {itemData && (
        <ItemDetailsDialog open={itemDetailsDialogOpen} itemData={itemData} />
      )}
    </DialogContext.Provider>
  );
}
