import React, { useState } from "react";
import { DialogContext } from "./index";

export default function DialogProvider(props) {
  const { children } = props;

  const [itemDetailsDialogOpen, setItemDetailsDialogOpen] = useState(false);

  const toggleItemDetailsDialog = () => {
    setItemDetailsDialogOpen(!itemDetailsDialogOpen);
  };

  return (
    <DialogContext.Provider value={{ toggleItemDetailsDialog }}>
      {children}
    </DialogContext.Provider>
  );
}
